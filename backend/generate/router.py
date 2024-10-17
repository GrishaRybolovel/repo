from functools import wraps
from fastapi import APIRouter, Depends, Request, BackgroundTasks, HTTPException
from fastapi.responses import FileResponse, HTMLResponse
from .schemas import GenerateModel
from .generate import generate_shorts_completion, generate_video_completion, generate_seo_completion, \
    generate_analytics_completion
from .models import ResponseModel, CompletionModel, UpdateCompletionRequest
from .utils import get_video_transcript, check_link
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from .analytics import generate_analytics_data
from auth.utils import get_current_user
from typing import List
import asyncio
from .crud import add_completion, list_completions, list_all_completions, get_completion_by_id, \
    update_completion_keywords, update_user_analytics, update_user_credit, add_user_credit, add_user_analytics, \
    check_user_subscription
from auth.models import AuthUserModel
from .utils import insert_keywords_sync, insert_analytics_sync, GetVideoException
import youtube_transcript_api
from celery.result import AsyncResult
import os

generate_router = APIRouter(tags=["Generate"], prefix='/generate')

current_dir = os.path.dirname(os.path.abspath(__file__))
static_dir = os.path.join(current_dir, "static")
templates_dir = os.path.join(current_dir, "templates")
backend_url = os.getenv("BACKEND_URL", "https://trendvi-test.ru")

generate_router.mount("/static", StaticFiles(directory=static_dir), name="static")

templates = Jinja2Templates(directory=templates_dir)


@generate_router.get("/task_status/{task_id}")
async def get_task_status(task_id: str):
    result = AsyncResult(task_id)  # Create an AsyncResult object with the task ID

    if result.ready():  # Task has finished processing
        if result.successful():
            return {
                "status": "completed",
                "result": result.result,  # Final result of the task
                "current_keyword": "100"  # Task is done, so no current keyword
            }
        else:
            return {
                "status": "failed",
                "error": str(result.result),  # Task failed
                "current_keyword": None
            }
    else:
        # Return the current task progress including the current keyword
        task_info = result.info or {}
        return {
            "status": "processing",
            "current_keyword": task_info.get('current_keyword', None)  # Fetch the current keyword from metadata
        }


def validate_action(type: str):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            user = kwargs.get('user') or next((arg for arg in args if isinstance(arg, AuthUserModel)), None)
            if not user:
                raise HTTPException(status_code=401, detail="Unauthorized access")

            try:
                result = await check_user_subscription(user.user_id)
                if not result:
                    raise HTTPException(status_code=403, detail="Subscription expired")
                if type == 'credit':
                    result = await update_user_credit(user.user_id)
                    print(f"Credit update result: {result}")
                    if not result:
                        raise HTTPException(status_code=403, detail="Not enough credits")
                elif type == 'analytics':
                    result = await update_user_analytics(user.user_id)
                    if not result:
                        raise HTTPException(status_code=403, detail="Not enough analytics")

                return await func(*args, **kwargs)
            except HTTPException as e:
                raise e
            except Exception as e:
                raise HTTPException(status_code=500, detail="An error occurred") from e

        return wrapper

    return decorator


@generate_router.get("/admin", response_class=HTMLResponse)
async def admin_panel():
    completions = await list_all_completions()

    sorted_completions = sorted(completions, key=lambda c: c.createdate, reverse=True)
    return templates.TemplateResponse("admin.html", {"request": {},
                                                     "completions": sorted_completions,
                                                     "backend_url": backend_url})


@generate_router.post("/update_completion")
async def update_keywords(request: UpdateCompletionRequest):
    completion_id = request.completion_id
    keywords = request.keywords
    owner_id = request.owner_id

    updated_completion = await update_completion_keywords(completion_id, keywords, owner_id)
    if not updated_completion:
        raise HTTPException(status_code=404, detail="Completion not found")

    try:
        task = insert_analytics_sync.apply_async(args=(completion_id, keywords, owner_id), task_id=completion_id)
        print(task.id)
    except Exception as e:
        print(f"Error launching task: {e}")
    return {"status": "success"}


@generate_router.get("/task_status/{task_id}")
async def get_task_status(task_id: str):
    result = AsyncResult(task_id)

    if not result:
        raise HTTPException(status_code=404, detail="Task not found")

    return {
        "task_id": task_id,
        "status": result.status,
        "result": result.result,  # This can be the final result if needed
        "current_keyword": result.info.get('current_keyword', None) if result.info else None
    }


@generate_router.post("/shorts")
@validate_action("credit")
async def generate_shorts(generate_data: GenerateModel,
                          user: AuthUserModel = Depends(get_current_user)) -> ResponseModel:
    return await generate_shorts_completion(generate_data.request)


@generate_router.get("/download/{completion_id}")
async def download_file(completion_id: str):
    # Assuming completion includes the filename in a format like "tmp_xxx.zip"
    completion = await get_completion_by_id(completion_id)  # Implement this function if not present

    if completion and completion.filename:
        # Use the absolute path based on the shared volume
        file_path = os.path.join("/app/output", completion.filename)

        if os.path.exists(file_path):
            return FileResponse(
                path=file_path,
                media_type='application/zip',
                filename=os.path.basename(file_path)
            )

    raise HTTPException(status_code=404, detail="File not found")


@generate_router.post("/video")
@validate_action("credit")
async def generate_youtube(generate_data: GenerateModel,
                           user: AuthUserModel = Depends(get_current_user)) -> ResponseModel:
    return await generate_video_completion(generate_data.request)


@generate_router.post("/seo")
@validate_action("credit")
async def generate_seo(generate_data: GenerateModel, user: AuthUserModel = Depends(get_current_user)) -> ResponseModel:
    try:
        video_id = check_link(generate_data.request)
        video_transcript = get_video_transcript(video_id)
        print(video_transcript)
        return await generate_seo_completion(video_transcript)
    except ValueError:
        await add_user_credit(user.user_id)
        return ResponseModel(status=False, result="Invalid link")
    except GetVideoException as e:
        await add_user_credit(user.user_id)
        return ResponseModel(status=False, result=str(e))
    except Exception as e:
        await add_user_credit(user.user_id)
        return ResponseModel(status=False, result="Unknown exception")


@generate_router.post("/analytics")
@validate_action("analytics")
async def generate_analytics(generate_data: GenerateModel,
                             user: AuthUserModel = Depends(get_current_user)) -> CompletionModel:

    # Inserting keywrods firstly
    completion = await add_completion(generate_data.request, user.user_id, generate_data.request)


    # This function inserts keywords and starts generating
    insert_keywords_sync.delay(completion.completion_id, generate_data.request, user.user_id)


    return completion


@generate_router.get("/analytics/list")
async def generate_analytics_list(user: AuthUserModel = Depends(get_current_user)) -> List[CompletionModel]:
    return await list_completions(user.user_id)

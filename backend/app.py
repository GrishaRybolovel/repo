from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from auth.router import auth_router
from users.router import users_router
from auth.utils import get_current_user
from generate.router import generate_router
from payment.router import payment_router
from admin.router import admin_router

app = FastAPI(title="TRENDVI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(auth_router)
app.include_router(users_router, dependencies=[Depends(get_current_user)])
app.include_router(generate_router)
app.include_router(payment_router)
app.include_router(admin_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
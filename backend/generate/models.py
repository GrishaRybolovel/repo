from typing import List
from pydantic import BaseModel, Field
from datetime import datetime

class ResponseModel(BaseModel):
    status: bool = True
    result: str

class UpdateCompletionRequest(BaseModel):
    completion_id: str
    keywords: str
    owner_id: int

class TrendModel(BaseModel):
    name: str
    description: str
    explanation: str

class CompletionModel(BaseModel):
    completion_id: str
    owner_id: int
    keywords: str
    status: bool
    filename: str
    createdate: datetime
    query: str
    trends: str
    not_trends: str
    ideas: str
    content_strategy: str
    average_views: str

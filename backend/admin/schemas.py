from pydantic import BaseModel, EmailStr, Field

class Rate(BaseModel):
    username: EmailStr
    rateType: int = Field(ge=0, le=3)
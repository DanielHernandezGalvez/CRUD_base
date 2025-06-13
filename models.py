from pydantic import BaseModel


# Modelo de datos para registro
class UserRegister(BaseModel):
    email: str
    password: str
    weight: float
    height: float
    goal: str  # "lose_fat", "gain_muscle", "maintain"

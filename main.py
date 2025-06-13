from fastapi import FastAPI, HTTPException
from supabase import create_client
import os
from models import UserRegister  # Asegúrate de que este modelo esté definido en models.py
from dotenv import load_dotenv
load_dotenv()  # Carga las variables del archivo .env

# Configuración inicial
app = FastAPI()
supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))


# Endpoint de registro
@app.post("/register")
async def register(user: UserRegister):
    try:
        # 1. Registrar usuario en Auth
        auth_response = supabase.auth.sign_up({
            "email": user.email,
            "password": user.password
        })
        
        # Verificar que el registro fue exitoso
        if not auth_response.user:
            raise HTTPException(status_code=400, detail="Error en registro de autenticación")
        
        # 2. Guardar perfil usando el UUID real
        profile_data = {
            "id": str(auth_response.user.id),  # Convertir UUID a string
            "weight": user.weight,
            "height": user.height,
            "goal": user.goal
        }
        
        response = supabase.table("profiles").insert(profile_data).execute()
        
        # Verificar inserción
        if hasattr(response, 'error') and response.error:
            raise HTTPException(status_code=400, detail=response.error.message)
            
        return {"message": "Usuario registrado exitosamente", "user_id": str(auth_response.user.id)}
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    

# supabase.table("meals").insert({
#     "user_id": "uuid-del-usuario",
#     "meal_type": "breakfast",
#     "is_healthy": True
# }).execute()
    
    
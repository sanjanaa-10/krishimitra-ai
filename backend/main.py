from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routes import auth

# Create all tables in the database (based on our models)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="KrishiMitra AI API")

# Allow the frontend (running on localhost:5173/5174) to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)


@app.get("/")
def read_root():
    return {"message": "KrishiMitra AI backend is running"}
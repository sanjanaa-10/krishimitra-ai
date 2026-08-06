from fastapi import FastAPI

app = FastAPI(title="KrishiMitra AI API")

@app.get("/")
def read_root():
    return {"message": "KrishiMitra AI backend is running"}
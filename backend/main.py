from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"status": "Backend running"}
from pydantic import BaseModel

class SuggestionRequest(BaseModel):
    problem: str

@app.post("/suggestion")
def get_suggestion(data: SuggestionRequest):
    suggestions = {
        "disengaged": "Use a real-life example and ask one quick question.",
        "concept": "Ask students to explain the idea to a partner for 2 minutes.",
        "mixed": "Give a simple recap, then ask fast learners for examples.",
        "noisy": "Give a short written task to regain control.",
        "time": "Summarize the key idea and ask one check question."
    }
    return {
        "suggestion": suggestions.get(
            data.problem,
            "Try a short activity to reset the class."
        )
    }
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Sachin.net ML Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class TextRequest(BaseModel):
    text: str = ""


class LeadRequest(BaseModel):
    text: str = ""
    budget: float = 0
    hasPhone: bool = False


POSITIVE = {"good", "great", "excellent", "happy", "love", "best", "amazing", "achha", "badhiya"}
NEGATIVE = {"bad", "worst", "hate", "poor", "slow", "kharab", "problem"}
SPAM = {"free money", "click here", "winner", "lottery", "urgent", "bitcoin"}


@app.get("/health")
def health():
    return {"status": "ok", "service": "sachin-net-ml"}


@app.post("/api/ml/sentiment")
def sentiment(req: TextRequest):
    text = req.text.lower()
    score = sum(1 for w in POSITIVE if w in text) - sum(1 for w in NEGATIVE if w in text)
    label = "positive" if score > 0 else "negative" if score < 0 else "neutral"
    return {"label": label, "confidence": min(0.95, 0.7 + abs(score) * 0.08), "score": score}


@app.post("/api/ml/spam")
def spam(req: TextRequest):
    text = req.text.lower()
    is_spam = any(w in text for w in SPAM)
    return {"isSpam": is_spam, "confidence": 0.91 if is_spam else 0.12}


@app.post("/api/ml/predict-lead")
def predict_lead(req: LeadRequest):
    prob = min(0.95, 0.25 + req.budget / 60000 + (0.2 if req.hasPhone else 0))
    return {"conversionProbability": round(prob * 100), "tier": "hot" if prob > 0.6 else "warm"}


@app.post("/api/ml/classify")
def classify(req: TextRequest):
    text = req.text.lower()
    cats = {
        "website": ["website", "web", "site"],
        "erp": ["erp", "school", "management"],
        "ecommerce": ["shop", "store", "ecommerce"],
        "ai": ["ai", "chatbot", "machine learning", "ml"],
    }
    best, max_score = "general", 0
    for cat, words in cats.items():
        s = sum(1 for w in words if w in text)
        if s > max_score:
            best, max_score = cat, s
    return {"category": best, "confidence": 0.65 + max_score * 0.12}


@app.post("/api/ml/recommend")
def recommend(req: TextRequest):
    return {
        "recommendations": ["Business Website", "SEO Optimization", "AI Chatbot"],
        "scores": [0.92, 0.85, 0.78],
    }

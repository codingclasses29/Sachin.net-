import { NextResponse } from "next/server";

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:8000";

export async function POST(request) {
  try {
    const body = await request.json();
    const { endpoint, data } = body;

    const allowed = ["sentiment", "spam", "predict-lead", "recommend", "classify"];
    if (!allowed.includes(endpoint)) {
      return NextResponse.json({ ok: false, error: "Invalid ML endpoint." }, { status: 400 });
    }

    try {
      const res = await fetch(`${ML_SERVICE_URL}/api/ml/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) {
        const result = await res.json();
        return NextResponse.json({ ok: true, ...result, source: "ml-service" });
      }
    } catch {
      // fall through to local fallback
    }

    const fallback = localMLFallback(endpoint, data);
    return NextResponse.json({ ok: true, ...fallback, source: "local-fallback" });
  } catch {
    return NextResponse.json({ ok: false, error: "ML request failed." }, { status: 500 });
  }
}

function localMLFallback(endpoint, data) {
  const text = (data?.text || "").toLowerCase();

  if (endpoint === "sentiment") {
    const positive = ["good", "great", "excellent", "happy", "love", "best", "amazing", "achha", "badhiya"];
    const negative = ["bad", "worst", "hate", "poor", "slow", "kharab", "problem"];
    let score = 0;
    positive.forEach((w) => { if (text.includes(w)) score += 1; });
    negative.forEach((w) => { if (text.includes(w)) score -= 1; });
    const label = score > 0 ? "positive" : score < 0 ? "negative" : "neutral";
    return { label, confidence: 0.72 + Math.min(Math.abs(score) * 0.05, 0.25), score };
  }

  if (endpoint === "spam") {
    const spamWords = ["free money", "click here", "winner", "lottery", "urgent", "bitcoin"];
    const isSpam = spamWords.some((w) => text.includes(w));
    return { isSpam, confidence: isSpam ? 0.89 : 0.15 };
  }

  if (endpoint === "predict-lead") {
    const budget = Number(data?.budget) || 0;
    const probability = Math.min(0.95, 0.3 + budget / 50000 + (data?.hasPhone ? 0.15 : 0));
    return { conversionProbability: Math.round(probability * 100), tier: probability > 0.6 ? "hot" : "warm" };
  }

  if (endpoint === "recommend") {
    return {
      recommendations: ["Business Website", "SEO Optimization", "AI Chatbot"],
      scores: [0.92, 0.85, 0.78],
    };
  }

  if (endpoint === "classify") {
    const categories = {
      website: ["website", "web", "site"],
      erp: ["erp", "school", "management"],
      ecommerce: ["shop", "store", "ecommerce", "e-commerce"],
      ai: ["ai", "chatbot", "machine learning", "ml"],
    };
    let best = "general";
    let maxScore = 0;
    Object.entries(categories).forEach(([cat, words]) => {
      const score = words.filter((w) => text.includes(w)).length;
      if (score > maxScore) { maxScore = score; best = cat; }
    });
    return { category: best, confidence: 0.7 + maxScore * 0.1 };
  }

  return { message: "Processed" };
}

import { NextResponse } from "next/server";
import { generateAIReply } from "@/lib/ai";

const TOOL_PROMPTS = {
  "blog-writer": (input) =>
    `Write a professional SEO-optimized blog post about: "${input}". Include title, intro, 3-4 sections with headings, and conclusion. Write in Hindi-English mix if topic is India-focused.`,
  "code-generator": (input) =>
    `Generate clean, production-ready code for: "${input}". Include comments and best practices. Prefer JavaScript/TypeScript or Python.`,
  "resume-builder": (input) =>
    `Create a professional resume/CV based on this info: "${input}". Include Summary, Skills, Experience, Education, Projects sections.`,
  "cover-letter": (input) =>
    `Write a professional cover letter for: "${input}". Keep it concise, persuasive and ATS-friendly.`,
  "email-generator": (input) =>
    `Write a professional email for: "${input}". Include subject line and body.`,
  "grammar-check": (input) =>
    `Check grammar, spelling and improve this text. Return corrected version with brief notes:\n\n${input}`,
  "summarizer": (input) =>
    `Summarize this text in clear bullet points (max 8 points):\n\n${input}`,
  "translator": (input) =>
    `Translate this text to English (if Hindi) or Hindi (if English). Keep natural tone:\n\n${input}`,
  "content-generator": (input) =>
    `Generate marketing content (social media + website copy) for: "${input}". Include 3 variants.`,
  "prompt-library": (input) =>
    `Suggest 5 powerful AI prompts for: "${input}". Format as numbered list with brief explanation.`,
};

export async function POST(request) {
  try {
    const { tool, input } = await request.json();

    if (!tool || !input?.trim()) {
      return NextResponse.json({ ok: false, error: "Tool and input required." }, { status: 400 });
    }

    if (input.length > 4000) {
      return NextResponse.json({ ok: false, error: "Input too long (max 4000 chars)." }, { status: 400 });
    }

    const promptFn = TOOL_PROMPTS[tool];
    if (!promptFn) {
      return NextResponse.json({ ok: false, error: "Unknown tool." }, { status: 400 });
    }

    const message = promptFn(input.trim());
    const result = await generateAIReply(message, []);

    if (!result.ok) {
      return NextResponse.json({ ok: false, error: result.error }, { status: 503 });
    }

    return NextResponse.json({ ok: true, output: result.reply, provider: result.provider });
  } catch {
    return NextResponse.json({ ok: false, error: "AI tool error." }, { status: 500 });
  }
}

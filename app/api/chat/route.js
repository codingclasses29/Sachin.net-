import { NextResponse } from "next/server";
import { generateAIReply } from "@/lib/ai";

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, history = [] } = body;

    if (!message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Message is required." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { ok: false, error: "Message too long." },
        { status: 400 }
      );
    }

    const safeHistory = Array.isArray(history)
      ? history
          .filter(
            (h) =>
              h &&
              (h.role === "user" || h.role === "assistant") &&
              typeof h.content === "string"
          )
          .slice(-12)
      : [];

    const result = await generateAIReply(message.trim(), safeHistory);

    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            result.error ||
            "AI temporarily unavailable. WhatsApp us: +91 9931306292",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      ok: true,
      reply: result.reply,
      provider: result.provider,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "AI server error." },
      { status: 500 }
    );
  }
}

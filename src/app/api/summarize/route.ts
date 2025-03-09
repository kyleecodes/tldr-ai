import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text) return NextResponse.json({ error: "No text provided" }, { status: 400 });

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: `Summarize this Reddit post in TL;DR format, maintaining the same perspective as the text. Keep succinct as possible, 4 sentences absolute max and no run-on sentences: ${text}` }],
      max_tokens: 100,
    });

    return NextResponse.json({ summary: response.choices[0]?.message?.content || "No summary generated" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate summary" }, { status: 500 });
  }
}

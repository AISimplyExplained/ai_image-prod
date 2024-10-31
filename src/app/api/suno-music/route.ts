import axios from "axios";
import { NextResponse } from "next/server";

const API_HOST =
  process.env.SUNO_API_HOST || "https://suno-api-one-black.vercel.app/api/custom_generate";
const API_KEY = process.env.SUNO_API || "c8a586772ef64b36283014a0bce22244";
interface RequestBody {
  title: string;
  prompt: string;
  tags: string;
  make_instrumental: boolean;
}

export async function POST(request: Request) {
  try {
    const { make_instrumental, prompt, tags, title } =
      (await request.json()) as RequestBody;
    if (!make_instrumental || !prompt || !tags || !title) {
      return NextResponse.json(
        { error: "Every field is required." },
        { status: 400 }
      );
    }

    const payload = {
      prompt,
      tags,
      title,
      make_instrumental,
      wait_audio: true,
    };

    const headers = {
      // Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    };

    const res = await axios.post(API_HOST,payload, { headers});
    console.log("res", res.data);

    return NextResponse.json({
      data: res.data,
    });
  } catch (error) {
    console.log("error: \n", error)
    return NextResponse.json(
      { error: "Internal Server error." },
      { status: 500 }
    );
  }
}

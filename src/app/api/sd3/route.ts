import { NextResponse } from "next/server";
import Replicate from "replicate";

const API_HOST = process.env.REPLICATE_API_HOST || "https://api.replicate.com";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

interface RequestBody {
  prompt: string;
  aspect_ratio: string;
  output_format: string;
  negative_prompt: string;
}

export async function POST(req: Request) {
  try {
    const {
      aspect_ratio,
      negative_prompt,
      output_format,
      prompt,
    }: RequestBody = await req.json();

    if (!aspect_ratio || !output_format || !prompt) {
      return NextResponse.json(
        { error: "Every field is required." },
        { status: 400 }
      );
    }

    const input = {
      cfg: 5,
      prompt,
      aspect_ratio,
      output_format,
      output_quality: 100,
      negative_prompt,
    };

    const output = await replicate.run("stability-ai/stable-diffusion-3", {
      input,
    }) as string[];

    console.log("OutPut", output)

    return NextResponse.json({imageUrls: output})
  } catch (error) {
    return NextResponse.json({error: "Internal server error"}, {status:500})
  }
}

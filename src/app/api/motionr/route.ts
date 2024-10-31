
import { NextResponse } from 'next/server';
import Replicate from "replicate";
import OpenAI from "openai";

const API_HOST = process.env.REPLICATE_API_HOST || "https://api.replicate.com";
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
});


// async function main() {
//     const image = await openai.images.generate({ prompt: "A cute baby sea otter" });
//
//     console.log(image.data);
// }
// main();
export async function POST(req: Request) {
    console.log("Received request with body:", req.body);


    if (req.method === 'OPTIONS') {
        // Handle preflight requests for CORS
        const response = new NextResponse(null, { status: 204 }); // 204 No Content
        response.headers.append('Access-Control-Allow-Origin', '*');
        response.headers.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
        response.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return response;
    }

    if (req.method !== 'POST') {
        // Only allow POST requests, respond with 405 if other methods are used
        return new NextResponse('Method Not Allowed', { status: 405 });
    }

    const jsonBody = await req.json();
    // Remove null and undefined values from jsonBody
    const cleanedBody = Object.entries(jsonBody).reduce(
        (acc, [key, value]) => {
            if (value != null) {
                //@ts-ignore
                acc[key] = value;
            }
            return acc;
        },
        {}
    );

    console.log("Processed request body:", cleanedBody);
    const output = await replicate.run(
        // This is the ID of the replicate model you are running
        "lucataco/animate-diff:beecf59c4aee8d81bf04f0381033dfa10dc16e845b4ae00d281e2fa377e48a9f",
        {
            input: cleanedBody,
        },
    );
    console.log("API call successful, prediction:", output);
    const videoUrl = output;
    console.log(videoUrl)
    return NextResponse.json({ videoUrl });
}

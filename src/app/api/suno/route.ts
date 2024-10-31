import { NextResponse } from 'next/server';
import Replicate from "replicate";

const API_HOST = process.env.REPLICATE_API_HOST || "https://api.replicate.com";
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
});

interface RequestBody {
    num_images?: number;
    [key: string]: any; // Allow any additional properties
}

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

    const jsonBody: RequestBody = await req.json();

    // Remove null and undefined values from jsonBody
    const cleanedBody: RequestBody = Object.entries(jsonBody).reduce(
        (acc, [key, value]) => {
            if (value != null) {
                acc[key] = value;
            }
            return acc;
        },
        {} as RequestBody
    );

    console.log("Processed request body:", cleanedBody);
    const output = await replicate.run(
        // This is the ID of the replicate model you are running
        "suno-ai/bark:b76242b40d67c76ab6742e987628a2a9ac019e11d56ab96c4e91ce03b79b2787",
        {
            input: cleanedBody,
        },
    );
    console.log("API call successful, prediction:", output);
    //@ts-ignore
    const audioUrl = output.audio_out; // Extract the audio URL from the output
    return NextResponse.json({ audioUrl });
}


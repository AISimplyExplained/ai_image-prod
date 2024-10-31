import { NextResponse } from 'next/server';
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req) {
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
    const { prompt } = jsonBody;

    if (!prompt) {
        return new NextResponse('Prompt is required', { status: 400 });
    }

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant designed to output JSON. You will receive a prompt for generating an image that you are supposed to enhance. only output the json with the 'prompt' as a key and the new enhanced prompt as the value.",
                },
                { role: "user", content: prompt },
            ],
            model: "gpt-4o",
            response_format: { type: "json_object" },
        });

        const response = completion.choices[0].message.content;

        if(!response) {
            throw new Error("Error while generating response.")
        }
        return NextResponse.json(JSON.parse(response));
    } catch (error) {
        console.error('Error generating completion:', error);
        return new NextResponse('Failed to generate completion', { status: 500 });
    }
}

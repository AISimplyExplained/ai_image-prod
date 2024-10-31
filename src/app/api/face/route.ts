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
    console.log("Received request with body:", jsonBody);

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

    // Change the key name from num_images to num_outputs
    if (cleanedBody.num_images !== undefined) {
        cleanedBody.number_of_images = cleanedBody.num_images;
        delete cleanedBody.num_images;
    }

    // Rename the key from 'image' to 'face_image'
    if (cleanedBody.image !== undefined) {
        cleanedBody.face_image = cleanedBody.image;
        delete cleanedBody.image;
    }

    console.log("Processed request body:", cleanedBody);
    const output = await replicate.run(
        // This is the ID of the replicate model you are running for ControlNetFace
        "fofr/pulid-base:65ea75658bf120abbbdacab07e89e78a74a6a1b1f504349f4c4e3b01a655ee7a",
        {
            input: cleanedBody,
        },
    );
    console.log("API call successful, prediction:", output);

    const imageUrls = output; // Replicate returns a list of URLs
    return NextResponse.json({ imageUrls });
}

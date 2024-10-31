import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';
import axios from 'axios';

interface RequestBody {
    imageUrl: string;
    prompt: string;
    seed: string;
    model: string;
    [key: string]: any; // Allow any additional properties
}

// Function to upload image to Supabase Storage
async function uploadImageToSupabase(imageBuffer: Buffer, fileName: string) {
    console.log(`Starting upload of image to Supabase Storage as ${fileName}`);

    const { data, error } = await supabase.storage
        .from('images')
        .upload(`images/${fileName}`, imageBuffer, {
            cacheControl: '3600',
            upsert: false,
            contentType: 'image/png',
        });

    if (error) {
        console.error('Error uploading image:', error);
        return null;
    }

    console.log('Image upload complete. Storage path:', data.path);
    return data.path;
}

export async function POST(req: Request) {
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

    try {
        console.log('Processing POST request.');
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

        const { imageUrl, prompt, seed, model } = cleanedBody;

        console.log('Cleaned request body:', cleanedBody);

        // Download image as a Buffer
        console.log(`Starting download of image from ${imageUrl}`);
        const response = await axios({
            url: imageUrl,
            method: 'GET',
            responseType: 'arraybuffer',
        });
        const imageBuffer = Buffer.from(response.data, 'binary');
        console.log('Image download complete.');

        // Upload image buffer directly to Supabase Storage
        const fileName = `${new Date().toISOString()}.png`; // Generate a unique file name
        const storagePath = await uploadImageToSupabase(imageBuffer, fileName);

        if (storagePath) {
            const supabaseImageUrl = `${supabase.storageUrl}/object/public/images/${storagePath}`;

            console.log('Saving metadata to database:', { image: supabaseImageUrl, prompt, seed, model });

            const { data, error } = await supabase
                .from('community')
                .insert([{ image: supabaseImageUrl, prompt, seed, model }]);

            if (error) {
                console.error('Error saving metadata to database:', error);
                return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
            } else {
                console.log('Metadata saved to database:', data);
                return NextResponse.json({ data });
            }
        } else {
            console.error('Failed to upload image to Supabase Storage.');
            return new NextResponse(JSON.stringify({ error: 'Failed to upload image to Supabase Storage' }), { status: 500 });
        }
    } catch (error) {
        console.error('Error processing request:', error);
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

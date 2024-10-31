// app/api/download-video/route.js
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET() {
  try {
    const { data, error } = await supabase
      .storage
      .from('videos')  // your bucket name
      .download('ai.mp4');  // path to your video file

    if (error) {
      throw error;
    }

    if (!data) {
      return new NextResponse('File not found', { status: 404 });
    }

    // Set appropriate headers for video download
    const headers = new Headers();
    headers.set('Content-Type', 'video/mp4');
    headers.set('Content-Disposition', 'attachment; filename="ai.mp4"');

    return new NextResponse(data, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Download error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
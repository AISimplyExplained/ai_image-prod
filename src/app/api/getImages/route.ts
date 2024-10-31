import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function GET(req: Request) {
    if (req.method === 'OPTIONS') {
        // Handle preflight requests for CORS
        const response = new NextResponse(null, { status: 204 }); // 204 No Content
        response.headers.append('Access-Control-Allow-Origin', '*');
        response.headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS');
        response.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return response;
    }

    if (req.method !== 'GET') {
        // Only allow GET requests, respond with 405 if other methods are used
        return new NextResponse('Method Not Allowed', { status: 405 });
    }

    try {
        const { data, error } = await supabase
            .from('community')
            .select('*');
        // const { data, error } = await supabase
        //     .from('community')
        //     .select(`
        //         *,
        //         users (
        //             user_name
        //         )
        //     `)
        // .eq('users.user_id', 'community.user_id')
        if (error) {
            const response = new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
            response.headers.append('Cache-Control', 'no-store, max-age=0');
            return response;
        } else {
            const response = NextResponse.json(data);
            response.headers.append('Cache-Control', 'no-store, max-age=0');
            return response;
        }
    } catch (error) {
        const response = new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
        response.headers.append('Cache-Control', 'no-store, max-age=0');
        return response;
    }
}

import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

interface RequestBody {
  id: number;
}

export async function POST(req: Request) {
  if (req.method === "OPTIONS") {
    const response = new NextResponse(null, { status: 204 }); 
    response.headers.append("Access-Control-Allow-Origin", "*");
    response.headers.append("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.append(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    return response;
  }

  if (req.method !== "POST") {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const { id } = (await req.json()) as RequestBody;

  try {
    let { data, error } = await supabase
      .from("community") 
      .select("likes")
      .eq("id", id)
      .single();


    if (error) throw error;

    if(!data) throw new Error("No data available.")

    const newLikes = data.likes + 1;

    const { data: updatedData, error: updateError } = await supabase
      .from("community") 
      .update({ likes: newLikes })
      .eq("id", id);

    if (updateError) throw updateError;

    if (error) {
      const response = new NextResponse(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );
      response.headers.append("Cache-Control", "no-store, max-age=0");
      return response;
    } else {
      const response = NextResponse.json(updatedData);
      response.headers.append("Cache-Control", "no-store, max-age=0");
      return response;
    }
  } catch (error) {
    const response = new NextResponse(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
    response.headers.append("Cache-Control", "no-store, max-age=0");
    return response;
  }
}

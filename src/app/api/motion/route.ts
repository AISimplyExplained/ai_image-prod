import { NextResponse } from "next/server";
import RunwayML from "@runwayml/sdk";

export const maxDuration = 300;



export async function POST(req: Request) {
  console.log("Received request");

  try {
    console.log("Parsing request body");
    const reqBody = await req.json();
    const imageUrl = reqBody.image;
    const promptText = reqBody.promptText || "Create a video.";

    if (!imageUrl) {
      console.error("Image URL is missing in the request");
      throw new Error("Image URL is required");
    }

    console.log("Initializing RunwayML client");
    const client = new RunwayML();

    console.log("Creating image-to-video task");
    const res = await client.imageToVideo
      .create({
        model: "gen3a_turbo",
        promptImage: imageUrl,
        promptText: promptText,
      })
      .withResponse();

    console.log("Polling for task completion");
    let task;
    do {
      await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait for 10 seconds before polling
      task = await client.tasks.retrieve(res.data.id);
      console.log(`Current status: ${task.status}`);
    } while (!["SUCCEEDED", "FAILED"].includes(task.status));

    if (task.status === "FAILED") {
      throw new Error("Video generation failed");
    }

    console.log("Task completed successfully", task);

    // Assuming the task output contains a video URL
    if(!task.output) {
      throw new Error("No video URL found in the task output",);
    }

    const videoUrl = task.output[0];
    if (!videoUrl) {
      throw new Error("No video URL found in the task output");
    }

    return NextResponse.json({ videoUrl: videoUrl });
  } catch (error: any) {
    console.error("Error processing request:", error.message);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

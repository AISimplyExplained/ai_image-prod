import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    try {
        // Destructure the request body to access the data
        const {
            prompt,
            width,
            height,
            presetStyle,
          } = await req.json();

          // Make the POST request to generate images
          const generationResponse = await axios.post(
            'https://cloud.leonardo.ai/api/rest/v1/generations',
            {
              prompt,
              height,
              modelId: "aa77f04e-3eec-4034-9c07-d0f619684628",//Leonardo Kino XL model
              width,
              alchemy: true,
              photoReal: true,
              photoRealVersion : "v2",
              presetStyle,
            },
            {
              headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.LEONARDO_API_KEY}`,
                'content-type': 'application/json',
              },
            }
          );

          // Extract the generated generationId from the response
          const { generationId } = generationResponse.data.sdGenerationJob;

          // Wait for a few seconds for images to be generated
          await new Promise(resolve => setTimeout(resolve, 40000));

          // Make the GET request to retrieve the generated images
          const imagesResponse = await axios.get(
            `https://cloud.leonardo.ai/api/rest/v1/generations/${generationId}`,
            {
              headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.LEONARDO_API_KEY}`, // Replace with your API key
              },
            }
          );

        // Respond to the request
        return NextResponse.json( imagesResponse.data.generations_by_pk , { status: 200 });

      } catch (error) {
        console.error('Error processing request:', error);
      }
}

// pages/api/photoreal.js

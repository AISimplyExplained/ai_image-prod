import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

interface RequestBody {
  noOfFrames: number;
  script: string;
  seed: number;
}

export async function POST(request: Request) {
  const { noOfFrames, script, seed } = (await request.json()) as RequestBody;
  const frames = noOfFrames || 6;

  if (!script) {
    return NextResponse.json({ error: "Please add script." }, { status: 400 });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content:
            "You takes script as input and give prompt as json output. Please make sure that it is parsable.It is for generating images to create a comics. So every tiny detail matters for consistency. Every key name should be 'prompt' and should contain " +
            frames +
            " prompt. Do not mention frame name and number. Prompt should contain background scenery info too. With every prompt generate details about the prompt and call it 'detail', Do it for every prompt. 'detail' should be explain the " +
            "provide consistent details about their gender, hair, age, face structure, outfit, and ethnic background every time. Mention background of the prompt generated in 'detail', Every detail is important. Please provide consistent descriptions. Do not mention any other things like 'Here is your required JSON format data:'." +
            "I am using json parser so it will automatically convert it to array.",
        },
        {
          role: "assistant",
          content: script,
        },
        {
          role: "user",
          content:
            "Generate a list of " +
            frames +
            " JSON objects, each representing a frame with a prompt as the key. The values should be clear, simple prompts for generating images for each storyboard frame. Avoid using any brand names, SFX/VFX, or logos; keep it generic. Ensure consistency in character appearances throughout all frames. " +
            "If the script includes characters, provide consistent details about their gender, hair, age, face structure, outfit, and ethnic background. " +
            "for example: " +
            `"detail":{
         "characters":{
            "Lena":{
               "gender":"female",
               "hair":"long, brown, wavy",
               "age":"adult",
               "face":"oval face with freckles",
               "outfit":"blue summer dress",
               "ethnic background":"Caucasian"
            },
            "Max":{
               "gender":"male",
               "hair":"short, black, spiky",
               "age":"teenager",
               "face":"sharp features with round spectacles",
               "outfit":"red t-shirt with blue jeans",
               "ethnic background":"Caucasian"
            }
         },
         "
      }` +
            `The final result should be like this: '[
          {
            prompt: "...", details: {...}
          },
      ]' this array length will be ${frames} and give all the prompts. Do not cut or add ... to it.`,
        },
      ],
      seed: seed || 9999,
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 400 }
      );
    }

    console.log("C", content)

    // const parsedStr = extractOutermostCurlyBraces(content);

    // if (!parsedStr) {
    //   return NextResponse.json(
    //     { error: "Internal server error, parse failed." },
    //     { status: 400 }
    //   );
    // }

    const res = JSON.parse(content) as { prompt: string }[];

    return NextResponse.json({
      message: "Success",
      res,
    });
  } catch (error) {
    console.log("error, ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 400 }
    );
  }
}

function extractOutermostCurlyBraces(input: string): string | null {
  let count = 0;
  let start = -1;
  let result = null;
  let inString = false;
  let stringChar = "";

  for (let i = 0; i < input.length; i++) {
    if ((input[i] === '"' || input[i] === "'") && input[i - 1] !== "\\") {
      if (!inString) {
        inString = true;
        stringChar = input[i];
      } else if (input[i] === stringChar) {
        inString = false;
      }
      continue;
    }

    if (!inString) {
      if (input[i] === "{") {
        if (count === 0) {
          start = i;
        }
        count++;
      } else if (input[i] === "}") {
        count--;
        if (count === 0 && start !== -1) {
          result = input.slice(start, i + 1);
          break;
        }
      }
    }
  }

  return result;
}

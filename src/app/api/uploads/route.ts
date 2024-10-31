import { NextResponse } from "next/server";
import { pdfToText } from "pdf-ts";
import { nanoid } from "nanoid";
import {extractRawText} from "mammoth"
import fs from "fs"

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json(
        { error: "Please upload a file" },
        { status: 400 }
      );
    }

    if (!file.name.endsWith(".pdf") && !file.name.endsWith(".docx")) {
      return NextResponse.json(
        {
          error: "Invalid file format",
        },
        { status: 404 }
      );
    }

    const result: {
      filename: string;
      text?: string;
    } = {
      filename: file.name,
    };

    if (file.name.endsWith(".pdf")) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const pdfText = await pdfToText(fileBuffer);
      result.text = pdfText;
    } else {
      const fileName = nanoid();
      const tempPath = `/tmp/${fileName}.docx`;
      const fileBuffer = Buffer.from(await file.arrayBuffer())
      fs.writeFileSync(tempPath,fileBuffer)
      const docText = await convertDocxToText(tempPath)
      result.text = docText
    }

    return NextResponse.json({ message: "Success", res:result });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error." },
      { status: 500 }
    );
  }
}

async function convertDocxToText(filePath:string) {
  try {
      const { value: text } = await extractRawText({ path: filePath });
      return text;
  } catch (error) {
      console.error('Error converting .docx to text:', error);
      throw error;
  }
}
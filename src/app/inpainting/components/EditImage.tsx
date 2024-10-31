import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import Inpainting from "./Inpainting";
import TransparentImage from "./TransparentImage";

interface Props {
  file: File;
  removeFile: Dispatch<SetStateAction<File | null>>;
}

export default function EditImage({ file, removeFile }: Props) {
  const [maskImage, setMaskImage] = useState<string | null>(null);

  const startOver = (
    e: MouseEvent<HTMLButtonElement>,
    removeMask: Dispatch<SetStateAction<string | null>>,
    removeFile: Dispatch<SetStateAction<File | null>>
  ) => {
    e.preventDefault();
    removeFile(null);
    removeMask(null);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-10 w-[400px] h-[400px]">
        <Inpainting onDraw={setMaskImage} userUploadedImage={file} />
      </div>
      <div className="absolute top-0 left-0 z-0 w-[400px] h-[400px]">
        <TransparentImage maskImageSrc={maskImage} originalImage={file} />
      </div>
      {maskImage && (
        <button
          onClick={(e) => {
            startOver(e, setMaskImage, removeFile);
          }}
          className=" px-4 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Start over
        </button>
      )}
    </div>
  );
}

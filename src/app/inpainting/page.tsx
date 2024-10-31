"use client";
import Dropzone from "./components/Dropzone";
import EditImage from "./components/EditImage";
import Image from "next/image";
import { useState } from "react";

const Home: React.FC = () => {
  const [userUploadedImage, setUserUploadedImage] = useState<File | null>(null);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {!userUploadedImage && (
        <Dropzone
          onImageDropped={setUserUploadedImage}
          userUploadedImage={userUploadedImage}
        />
      )}
      {userUploadedImage && (
        <EditImage removeFile={setUserUploadedImage} file={userUploadedImage} />
      )}

      {userUploadedImage && (
        <div className="mt-4 w-[400px] h-[400px]">
          <Image
            src={URL.createObjectURL(userUploadedImage)}
            alt="preview image"
            layout="responsive"
            width={400}
            height={400}
            objectFit="contain"
            className="rounded border"
          />
        </div>
      )}
    </main>
  );
};

export default Home;

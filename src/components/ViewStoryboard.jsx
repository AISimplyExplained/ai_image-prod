import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Overlay,
  OverlayClose,
  OverlayContent,
  OverlayTrigger,
} from "./ui/overlay";
import { X } from "lucide-react";
import StoryImage from "./StoryImage";
import Gif from "./Gif"; 
import ExportImage from "./ExportImage";

export default function ViewStoryboard({ generatedImages }) {
  const [showGifCreator, setShowGifCreator] = useState(false);

  return (
    <Overlay>
      <div className="w-full flex justify-around items-center mt-4">
        <OverlayTrigger>
          <Button>View</Button>
        </OverlayTrigger>
        <ExportImage generatedImages={generatedImages} />
        <Gif generatedImages={generatedImages} />
        <OverlayContent className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-white opacity-100 p-8 overflow-auto">
          {generatedImages.map((image, index) => (
            <StoryImage
              key={index}
              imageUrl={image.imageUrl}
              prompt={image.prompt}
              index={index}
            />
          ))}
          <OverlayClose>
            <span className="absolute p-3 rounded-full cursor-pointer hover:bg-gray-200 right-1 top-1">
              <X onClick={() => setShowGifCreator(false)} />
            </span>
          </OverlayClose>
        </OverlayContent>
      </div>
    </Overlay>
  );
}

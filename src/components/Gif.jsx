import axios from "axios";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import { Slider } from "./ui/slider"; // Assuming Slider is also from shadcn/ui
import { createGIF } from "gifshot";

export default function Gif({ generatedImages = [] }) {
  const [isLoading, setIsLoading] = useState(false);
  const [frameDuration, setFrameDuration] = useState(10);
  const buttonRef = useRef(null);

  const handleDuration = (values) => {
    setFrameDuration(values[0]); // Adjust according to the actual value from the Slider
  };

  const generateGif = async () => {
    setIsLoading(true);
    try {
      const promises = generatedImages.map(async (image) => {
        const response = await axios.post(
          "/api/download",
          { imageUrl: image.imageUrl },
          { responseType: "blob" }
        );
        return URL.createObjectURL(response.data);
      });

      const generatedUrls = await Promise.all(promises);

      if (generatedUrls.length === 0) {
        throw new Error("No images available to create GIF.");
      }

      const options = {
        images: generatedUrls,
        gifWidth: 300,
        gifHeight: 300,
        numWorkers: 2,
        frameDuration: frameDuration,
        sampleInterval: 10,
      };

      createGIF(options, (obj) => {
        if (!obj.error) {
          const link = document.createElement("a");
          link.download = "storyboard.gif";
          link.href = obj.image;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.error("Failed to create GIF", obj.error);
        }
      });
    } catch (error) {
      console.error("Error generating GIF:", error);
    }

    if (buttonRef?.current) {
      buttonRef.current.click();
    }

    setIsLoading(false);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={isLoading}>
            {isLoading ? "Generating..." : "Create Gif"}
          </Button>
        </DialogTrigger>
        <DialogContent className={"bg-white flex flex-col gap-10"}>
          <div className="p-4">
            <h3 className="mb-4">Set Frame Duration (in ms)</h3>
            <Slider
              defaultValue={[frameDuration]}
              max={30}
              min={5}
              step={5}
              onValueChange={handleDuration}
              className="cursor-pointer mb-4"
            />
            <Button disabled={isLoading} onClick={generateGif} className="mt-4">
              {isLoading ? "Generating..." : "Start"}
            </Button>
          </div>
          <DialogClose ref={buttonRef}></DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}

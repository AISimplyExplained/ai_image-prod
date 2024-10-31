"use client";
import React, { useState } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import EditStoryFrame from "./EditStoryFrame";
import ViewStoryboard from "./ViewStoryboard";

export default function StoryBoard({
  num,
  generatedImages = [],
  isLoading,
  setStoryBoardGeneratedImages,
  style,
}) {
  const [frames, setFrames] = useState(null);
  const [updatedPrompt, setUpdatedPrompt] = useState("");
  const openDialog = ({ prompt, imageUrl, details }) => {
    setUpdatedPrompt(prompt);
    setFrames({ prompt, imageUrl, details});
  };

  return (
    <div className="w-full h-full">
      <Dialog>
        <div className="flex flex-wrap gap-4 mt-2  justify-center items-stretch">
          {generatedImages.map( (val, i) => {
            return (
              <div
                key={val.prompt + i}
                className=" m-2 min-w-56 max-w-96   flex flex-col justify-center relative"
              >
                <DialogTrigger asChild>
                  <img
                    src={val.imageUrl}
                    className="w-full h-full border-2 border-gray-800 rounded-xl aspect-square cursor-pointer"
                    onClick={() => {
                      openDialog(val);
                    }}
                  />
                </DialogTrigger>
                <p className="text-wrap mt-4 mx-2">{val.prompt}</p>
                <span className="absolute z-30 -top-6 right-2">{i + 1}</span>
              </div>
            );
          })}
          {[...Array(num - generatedImages.length)].map((_, index) => {
            let animate = "";
            if (index === 0 && isLoading) {
              animate += " animate-pulse";
            }
            return (
              <div
                key={index + "random"}
                className={
                  " m-2 min-w-56  h-48 bg-gray-400 border-2 border-gray-700 rounded-lg cursor-pointer flex items-center justify-center" +
                  animate
                }
              ></div>
            );
          })}
          {frames && !isLoading && (
            <EditStoryFrame
              style={style}
              frames={frames}
              setStoryBoardGeneratedImages={setStoryBoardGeneratedImages}
              setUpdatedPrompt={setUpdatedPrompt}
              updatedPrompt={updatedPrompt}
            />
          )}
        </div>
      </Dialog>
      {num === generatedImages.length && <ViewStoryboard generatedImages={generatedImages} />}
    </div>
  );
}

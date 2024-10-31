import React, { useState } from "react";
import { DialogContent, DialogClose, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";

export default function EditStoryFrame({
  frames,
  setStoryBoardGeneratedImages,
  style,
updatedPrompt, setUpdatedPrompt
}) {
  const [newImg, setNewImage] = useState(null);
  // const [updatedPrompt, setUpdatedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const removeImage = () => {
    setNewImage(null);
  };

  const handlePromptChange = (event) => {
    setUpdatedPrompt(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  const generateNewImage = async () => {
    setIsLoading(true);
    let prompt = updatedPrompt + frames?.details;
    if (style !== "color") {
      prompt += " in black and white line drawing style.";
    }
    const imageResponse = await axios.post("/api/dalle-3", {
      prompt,
    });
    const image = imageResponse.data.imageUrls[0];
    setNewImage(image);
    setIsLoading(false);
  };

  const addToStoryBoard = () => {
    if (!newImg || newImg === "") {
      return;
    }
    setStoryBoardGeneratedImages((prev) =>
      prev.map((val) => {
        if (val.prompt === frames.prompt) {
          val.imageUrl = newImg;
          val.prompt = updatedPrompt;
        }
        return val;
      })
    );
    setUpdatedPrompt("");
  };

  return (
    <DialogContent className=" bg-white grid grid-cols-2 p-6 lg:p-10 min-w-[90%] lg:min-w-[900px] ">
      <DialogTitle className="hidden"></DialogTitle>
      <div className=" flex  flex-col w-full gap-4">
        <img
          src={frames.imageUrl}
          className="aspect-square rounded-lg  border-2 border-gray-800"
        />
        <div className="flex flex-col space-y-2 gap-1">
          <Label htmlFor="prompt">Prompt</Label>
          <Textarea
            id="prompt"
            onChange={handlePromptChange}
            value={updatedPrompt}
            placeholder="Enter a detailed description"
            className=""
          />
        </div>
        <Button onClick={generateNewImage} disabled={isLoading}>Create</Button>
      </div>
      <div className="flex flex-col gap-4">
        {newImg ? (
          <img
            src={newImg}
            className="aspect-square rounded-lg border-2 border-gray-800"
          />
        ) : (
          <div className={"w-full min-h-80 bg-gray-300 rounded-lg " + (isLoading && "animate-pulse")}></div>
        )}
        <div className="w-full flex justify-around flex-col md:flex-row gap-4">
          <DialogClose disabled={isLoading}>
            <Button disabled={isLoading} onClick={addToStoryBoard}>Add to StoryBoard</Button>
          </DialogClose>
          <DialogClose disabled={isLoading}>
            <Button disabled={isLoading} onClick={removeImage}>Close</Button>
          </DialogClose>
        </div>
      </div>
    </DialogContent>
  );
}

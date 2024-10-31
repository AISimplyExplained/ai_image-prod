import React from "react";
import { DialogContent, DialogClose } from "./ui/dialog";
import { CircleX, Copy } from "lucide-react";
import { toast } from "sonner";

export default function CommunityImage({ prompt = '', image, seed }) {
  const copyPrompt = async () => {
    navigator.clipboard
      .writeText(prompt)
      .then(() => {
        toast.success("Prompt copied Successfully.");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  const copySeed = async () => {
    navigator.clipboard
      .writeText(seed)
      .then(() => {
        toast.success("Seed copied Successfully.");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <DialogContent className={"bg-white flex flex-col"}>
      <DialogClose>
        <span className="absolute right-2 top-2">
          <CircleX />
        </span>
      </DialogClose>
      <img
        src={image}
        alt="AI Image"
        className="object-cover mx-auto w-full h-auto max-w-[250px] lg:max-w-[370px]  transition-all duration-300 group-hover:scale-105"
      />
      <div>
        <div className="w-full flex justify-between ">
          <span className="font-bold">Prompt</span>
          <span
            onClick={copyPrompt}
            className="cursor-pointer p-1 hover:bg-gray-200 rounded-lg transition-all"
          >
            <Copy />
          </span>
        </div>
        <p >{prompt.length > 120 ? prompt.substring(0, 120) + "...": prompt}</p>
      </div>
      <div className="flex flex-col">
        <div className="w-full flex justify-between ">
          <span className="font-bold">Seed</span>
          <span
            onClick={copySeed}
            className="cursor-pointer p-1 hover:bg-gray-200 rounded-lg transition-all"
          >
            <Copy />
          </span>
        </div>
        <span >{seed}</span>
      </div>
    </DialogContent>
  );
}

import axios from "axios";
import React, { useEffect } from "react";

export default function StoryImage({ imageUrl, prompt, index }) {
  return (
    <div className="p-4 relative">
      <img
        src={imageUrl}
        alt={prompt}
        className="w-full aspect-square border-2 border-gray-400"
      />
      <p className="text-lg">{prompt}</p>
      <span className="absolute top-4 left-0">{index + 1}</span>
    </div>
  );
}

import React, { useState } from "react";
import { DialogTrigger } from "./ui/dialog";
import { Likes } from "./Likes";
import { User, UserCircle } from "lucide-react";

export default function CommunityImages({
  handleSelectedImage,
  prompt,
  image,
  model,
  seed,
  likes,
  id,
  user_id,
  created_at
}) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImgLoaded(true);
  };

  return (
    <React.Fragment>
      <div className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg border border-gray-700">
        <DialogTrigger className="text-start">
          <img
            onLoad={handleImageLoad}
            onClick={() => {
              handleSelectedImage({image, seed, model, likes, id, prompt});
            }}
            src={image}
            alt="AI Image"
            className="object-cover w-full h-aut transition-all duration-200 hover:scale-105 rounded-lg"
          />
        <div className="absolute bottom-12 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black bg-opacity-70 text-white p-4 rounded-t-lg">
            <p className="text-sm font-bold">/{model}</p>
            {/* <hr className="block h-1 border-0 border-t-2 border-gray-200 p-0"/> */}
            <p className="text-xs">{prompt}</p>
            <p className="text-sm">Seed: {seed}</p>
          </div>
        </div>
        </DialogTrigger>
        {isImgLoaded && (
          <div className="p-2 flex w-full justify-between items-center">
            <div className="flex gap-2 items-center">
              <UserCircle />
              <div className="flex flex-col">
                <span className="text-sm">{user_id ? user_id : "aidiamond68"}</span>
                <span className="text-xs text-gray-400">{timeAgo(created_at)}</span>
              </div>
            </div>
            <Likes id={id} likes={likes} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}


function timeAgo(timestamp) {
  const now = new Date();
  const then = new Date(timestamp);

  const secondsAgo = Math.floor((now - then) / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const yearsAgo = Math.floor(daysAgo / 365);

  if (secondsAgo < 60) {
    return `${secondsAgo}s ago`;
  } else if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  } else if (daysAgo < 365) {
    return `${daysAgo}d ago`;
  } else {
    return `${yearsAgo}y ago`;
  }
}

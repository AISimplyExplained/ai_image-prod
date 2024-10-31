import axios from "axios";
import { Heart } from "lucide-react";
import { useState } from "react";

export function Likes({ likes, id }) {
  const [totalLikes, setTotalLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const addLike = async () => {
    if (isLiked) return;
    setTotalLikes((prev) => prev + 1);
    setIsLiked(true);
    try {
      const res = await axios.post("/api/like-images", { id });
    } catch (error) {
      console.log(error);
      setTotalLikes((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <p onClick={addLike} className="z-50 text-white flex gap-1 items-center">
      <span>{totalLikes}</span>
      <Heart className="cursor-pointer" fill={isLiked ? "white" : "" } height={18} width={18} />
    </p>
  );
}

// function FullHeartIcon({ width = 24, height = 24, fill = "red" }) {
//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox="0 0 24 24"
//       fill={fill}
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//     </svg>
//   );
// }

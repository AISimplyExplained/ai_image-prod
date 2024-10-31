"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import axios from "axios";
import { Dialog } from "@/src/components/ui/dialog";
import CommunityImage from "../../components/CommunityImage";
import { Toaster } from "sonner";
import CommunityImages from "../../components/CommunityImages";

import Loader from "../../components/Loader";
export const fetchCache = "force-no-store";

// Function to shuffle array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function Component() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [tab, setTab] = useState("explore");

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const timestamp = Date.parse(new Date().toString());
        const response = await axios.get(`/api/getImages?tid=${timestamp}`, {
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        setImages(shuffleArray(response.data));
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="bg-black text-gray-200 min-h-screen">
        <div className="w-full max-w-[92%] mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center w-full">
              <div class="w-[200px] flex justify-between">
                <span
                  onClick={() => setTab("explore")}
                  className={`cursor-pointer border-b-4 transition duration-300 ${
                    tab === "explore"
                      ? "border-white"
                      : "border-transparent text-gray-500"
                  }`}
                >
                  Explore
                </span>
                <span
                  onClick={() => setTab("following")}
                  className={`cursor-pointer border-b-4 transition duration-300 ${
                    tab === "following"
                      ? "border-white"
                      : "border-transparent text-gray-500"
                  }`}
                >
                  Following
                </span>
                <span
                  onClick={() => setTab("top")}
                  className={`cursor-pointer border-b-4 transition duration-300 ${
                    tab === "top"
                      ? "border-white"
                      : "border-transparent text-gray-500"
                  }`}
                >
                  Top
                </span>
              </div>
            </div>
            {isLoading ? (
              <div className="flex justify-center h-96 items-center">
                <Loader />
              </div>
            ) : (
              <>
                <Dialog>
                  <div className="columns-1 md:columns-2 lg:columns-4 gap-4">
                    {images.map((image, index) => {
                      return (
                        <CommunityImages
                          key={index}
                          handleSelectedImage={handleSelectedImage}
                          {...image}
                        />
                      );
                    })}
                  </div>
                  {selectedImage && (
                    <CommunityImage
                      image={selectedImage.image}
                      prompt={selectedImage.prompt}
                      seed={selectedImage.seed}
                    />
                  )}
                </Dialog>
                <div className="text-center">
                  <Button variant="outline" className="mt-6">
                    View More
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

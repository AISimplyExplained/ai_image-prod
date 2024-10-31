import React, { useState } from "react";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import axios from "axios";

async function fetchImageUrl({ imageUrl, prompt }) {
  try {
    const response = await axios.post(
      "/api/download",
      { imageUrl },
      {
        responseType: "blob",
      }
    );
    const url = URL.createObjectURL(response.data);
    return { url, prompt };
  } catch (error) {
    throw error;
  }
}

async function getLocalUrls(generatedImages = []) {
  try {
    const fetchPromises = generatedImages.map((val) =>
      fetchImageUrl({ imageUrl: val.imageUrl, prompt: val.prompt })
    );

    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw error;
  }
}

export default function ExportImage({generatedImages}) {
  const [isLoading, setIsLoading] = useState(false);
  const exportImage = async () => {
    setIsLoading(true)
    try {
      const images = await getLocalUrls(generatedImages);
      const offScreenDiv = document.createElement("div");
      offScreenDiv.style.position = "absolute";
      offScreenDiv.style.top = "-9999px";
      offScreenDiv.style.left = "-9999px";
      offScreenDiv.style.width = "1400px";
      offScreenDiv.style.display = "flex";
      offScreenDiv.style.flexWrap = "wrap";
      offScreenDiv.style.alignItems = "flex-start";
      offScreenDiv.style.gap = "40px";
      offScreenDiv.style.padding = "60px";
      offScreenDiv.style.justifyContent = "center";

      images.forEach((val, i) => {
        const imageItem = document.createElement("div");
        imageItem.style.width = "400px";
        imageItem.style.position = "relative";
        imageItem.style.display = "flex";
        imageItem.style.flexDirection = "column"; // Stack image and text vertically
        imageItem.style.alignItems = "center"; // Center items horizontally
        imageItem.style.boxSizing = "border-box";

        const img = document.createElement("img");
        img.src = val.url;
        img.style.width = "100%";
        img.style.display = "block";

        const text = document.createElement("p");
        text.textContent = val.prompt;
        text.style.margin = "10px 0 0 0";
        text.style.width = "100%";
        text.style.textAlign = "center";
        text.style.boxSizing = "border-box";

        const num = document.createElement("span");
        num.textContent = i + 1;
        num.style.position = "absolute";
        num.style.top = "12px";
        num.style.left = "-20px";

        imageItem.appendChild(img);
        imageItem.appendChild(num);
        imageItem.appendChild(text);
        offScreenDiv.appendChild(imageItem);
      });

      document.body.appendChild(offScreenDiv);
      const canvas = await html2canvas(offScreenDiv);
      console.log(canvas);
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "gallery.png";
      link.click();

      document.body.removeChild(offScreenDiv);
    } catch (error) {
      console.log("error \n", error);
      alert("Something went wrong. Please try again.");
    }

    setIsLoading(false)
  };
  return (
    <Button onClick={exportImage} disabled={isLoading}>
      {isLoading ? "Generating..." : "Export Image"}
    </Button>
  );
}

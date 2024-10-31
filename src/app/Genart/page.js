"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
  SelectGroup,
  SelectLabel,
} from "../../components/ui/select";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Dropzone } from "../../components/ui/dropzone";
import { Slider } from "../../components/ui/slider";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import axios from "axios";
import Link from "next/link";
import { Input } from "../../components/ui/input";
import { Faq } from "./faq";
import imageCompression from "browser-image-compression";
import { Switch } from "../../components/ui/switch";
import { ImageEditor } from "./ImageEditor";
import StoryBoard from "../../components/StoryBoard";
import { DockIcon, Trash2Icon, TrashIcon } from "lucide-react";
import AudioPlayer from "../../components/AudioPlayer";
import { Toaster, toast } from "sonner";
//another commithihihi
//commit done hihihihhihihihiiiihiiibobohiiiiihi
function ShareIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      />
    </svg>
  );
}

function CustomCheckbox({ id, label, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleCheckboxChange}
        className="form-checkbox"
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}

const photorealstyledata = [
  { style: "Bokeh", value: "BOKEH" },
  { style: "Cinematic", value: "CINEMATIC" },
  { style: "Cinematic (Closeup)", value: "CINEMATIC_CLOSEUP" },
  { style: "Creative", value: "CREATIVE" },
  { style: "Fashion", value: "FASHION" },
  { style: "Film", value: "FILM" },
  { style: "Food", value: "FOOD" },
  { style: "HDR", value: "HDR" },
  { style: "Long Exposure", value: "LONG_EXPOSURE" },
  { style: "Macro", value: "MACRO" },
  { style: "Minimalistic", value: "MINIMALISTIC" },
  { style: "Monochrome", value: "MONOCHROME" },
  { style: "Moody", value: "MOODY" },
  { style: "Neutral", value: "NEUTRAL" },
  { style: "Portrait", value: "PORTRAIT" },
  { style: "Retro", value: "RETRO" },
  { style: "Stock Photo", value: "STOCK_PHOTO" },
  { style: "Vibrant", value: "VIBRANT" },
  { style: "Unprocessed", value: "UNPROCESSED" },
];

export default function Component() {
  const [bgRemovedImage, setBgRemovedImage] = useState(undefined);
  const [seed, setSeed] = useState(Math.floor(Math.random() * 1000000)); // Random seed initialization
  const [bgRemove, setBgRemove] = useState(false);
  const [file, setFile] = useState(undefined);
  const [bgfile, setbgFile] = useState(undefined);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState(""); // State for prompt input
  const [negativePrompt, setNegativePrompt] = useState(""); // State for negative prompt input
  const [model, setModel] = useState(""); // State for selected model
  const [style, setStyle] = useState(""); // State for selected style
  const [checkpointModel, setCheckpointModel] = useState(""); // State for selected checkpoint model
  const [faceStyle, setFaceStyle] = useState(""); // State for selected face style
  const [numImages, setNumImages] = useState(1); // State for number of images
  const [isEthicallyDiverse, setIsEthicallyDiverse] = useState(false); // State for the ethically diverse checkbox
  const [aspectRatio, setAspectRatio] = useState("1024x1024"); // State for selected aspect ratio
  const [error, setError] = useState({
    file: "",
    prompt: "",
    model: "",
    bgfile: "",
    style: "",
    script: "",
    imageFormate: "",
    imageRatio: "",
    musicTitle: "",
    tags: "",
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isMagic, setIsMagic] = useState(false);
  const [originalPrompt, setOriginalPrompt] = useState(""); // State for original prompt
  const [sharedIndex, setSharedIndex] = useState(null);
  const [audioUrl, setAudioUrl] = useState(""); // State for audio URL
  const [videoUrl, setVideoUrl] = useState(""); // State for video URL
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0 });
  const [actualSeed, setActualSeed] = useState(generateRandomSeed());
  const [musicTitle, setMusicTitle] = useState("");
  const [musicTags, setMusicTags] = useState("");
  const [instrumental, setInstrumental] = useState(true);
  const [sunoMusicAudio, setSunoMusicAudio] = useState(null);

  // Dall-e-2 Editing image
  const [originalImage, setOriginalImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);
  const [editedImage, setEditedImage] = useState(null);

  // Storyboard
  const [numberOfFrames, setNumberOfFrames] = useState(6);
  const [storyImageStyle, setStoryImageStyle] = useState("");

  //hello
  const [storyDoc, setStoryDoc] = useState("");
  const [storyBoardGeneratedImages, setStoryBoardGeneratedImages] = useState(
    []
  );

  // SD3
  const [imageFormate, setImageFormate] = useState("");
  const [imageRatio, setImageRatio] = useState("");

  const [loePrompt, setLeoPrompt] = useState("");

  const handleLeoPrompt = (e) => {
    setLeoPrompt(e.target.value);
  };

  const handleImageFormateChange = (value) => {
    setError((prev) => ({ ...prev, imageFormate: "" }));
    setImageFormate(value);
  };

  const handleImageRatioChange = (value) => {
    setError((prev) => ({ ...prev, imageRatio: "" }));
    setImageRatio(value);
  };

    const handleStableDiffusion3 = async () => {
      let errorFlag = false;
      const errors = {
        prompt: "",
        model: "",
        imageFormate: "",
        imageRatio: "",
      };

      if (!model) {
        errors.model = "Please select a model";
        errorFlag = true;
      }

      if (!prompt) {
        errors.prompt = "Please include a prompt";
        errorFlag = true;
      }

      if (!imageFormate) {
        errors.imageFormate = "Please select a image formate";
        errorFlag = true;
      }

      if (!imageRatio) {
        errors.imageRatio = "Please select a image ratio";
        errorFlag = true;
      }

      if (errorFlag) {
        return setError(errors);
      }

      let promptStyle = "";
      if (style !== "") {
        promptStyle += ".It should be " + style + " style";
      }

      setIsLoading(true);

      try {
        const res = await axios.post("/api/sd3", {
          aspect_ratio: imageRatio,
          negative_prompt: negativePrompt,
          output_format: imageFormate,
          prompt: prompt + promptStyle,
        });

        setGeneratedImages(res.data.imageUrls);
      } catch (error) {
        console.log("error", error);
      }

      setIsLoading(false);
    };

  const handleStableDiffusion3Point5 = async () => {
    let errorFlag = false;
    const errors = { prompt: "", model: "", imageFormate: "", imageRatio: "" };

    if (!model) {
      errors.model = "Please select a model";
      errorFlag = true;
    }

    if (!prompt) {
      errors.prompt = "Please include a prompt";
      errorFlag = true;
    }

    if (!imageFormate) {
      errors.imageFormate = "Please select a image formate";
      errorFlag = true;
    }

    if (!imageRatio) {
      errors.imageRatio = "Please select a image ratio";
      errorFlag = true;
    }

    if (errorFlag) {
      return setError(errors);
    }

    let promptStyle = "";
    if (style !== "") {
      promptStyle += ".It should be " + style + " style";
    }

    setIsLoading(true);

    try {
      const res = await axios.post("/api/sd3.5", {
        aspect_ratio: imageRatio,
        negative_prompt: negativePrompt,
        output_format: imageFormate,
        prompt: prompt + promptStyle,
      });

      setGeneratedImages(res.data.imageUrls);
    } catch (error) {
      console.log("error", error);
    }

    setIsLoading(false);
  };

  const handleStoryImageStyle = (value) => {
    setError((prev) => ({
      prompt: prev.prompt,
      script: prev.script,
      style: "",
    }));
    setStoryImageStyle(value);
  };

  const handleNumFrameChange = (value) => {
    if (!isLoading) {
      setStoryBoardGeneratedImages([]);
      setNumberOfFrames(value[0]);
    }
  };

  const handleStoryDoc = async (file) => {
    const fileName = file.name;
    if (!fileName.endsWith(".pdf") && !fileName.endsWith(".docx")) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/api/uploads", formData);
      setStoryDoc(res.data.res);
    } catch (error) {
      console.log("Error", error);
    }

    setError((prev) => ({ prompt: "", script: "", style: prev.style }));
  };

  const removeStoryDoc = () => {
    setStoryDoc(null);
  };

  const handleStoryboard = async () => {
    const storyPrompt = storyDoc?.text || prompt || "";

    let errorFlag = false;
    let errors = { style: "", script: "", prompt: "" };

    if (storyImageStyle === "") {
      errorFlag = true;
      errors.style = "Please select a style.";
    }

    if (storyPrompt === "") {
      errorFlag = true;
      errors.prompt = "Please include a script or prompt";
      errors.script = "Please include a script or prompt";
    }

    if (errorFlag) {
      return setError(errors);
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/api/storyboard", {
        noOfFrames: numberOfFrames,
        script: storyPrompt,
      });

      toast.success("Generating Images... Please wait.");

      const storyPrompts = response.data.res;
      const fetchPromises = storyPrompts?.map((val, i) =>
        fetchImagesFromPrompt(val, i)
      );
      const results = await Promise.all(fetchPromises);
      const sortedImages = new Array(numberOfFrames);

      results.forEach((val) => {
        sortedImages[val.index] = val;
      });

      setStoryBoardGeneratedImages(sortedImages);
    } catch (error) {
      console.log("error: \n", error);
      toast.error("Something went wrong, Please try again.");
    }
    setIsLoading(false);
  };

  async function fetchImagesFromPrompt(val, i) {
    try {
      const details = JSON.stringify(val.detail);
      let story = val.prompt + details;
      if (storyImageStyle !== "color") {
        story += " in black and white line drawing style.";
      }
      const imageResponse = await axios.post("/api/dalle-3", { prompt: story });
      const image = imageResponse.data.imageUrls[0];
      return {
        imageUrl: image,
        prompt: val.prompt,
        index: i,
        details: details,
      };
    } catch (error) {
      throw error;
    }
  }

  // Suno music
  const handleMusicTitle = (value) => {
    setError((prev) => ({ ...prev, musicTitle: "" }));
    setMusicTitle(value.target.value);
  };

  const handleMusicTags = (value) => {
    setError((prev) => ({ ...prev, tags: "" }));
    setMusicTags(value.target.value);
  };

  const handleInstrumentalChange = (value) => {
    setInstrumental(value === "true" ? true : false);
  };

  const handleSunoMusic = async () => {
    let errorFlag = false;
    let errors = { prompt: "", tags: "", musicTitle: "" };

    if (!prompt) {
      errors.prompt = "Please include a prompt";
      errorFlag = true;
    }

    if (!musicTags) {
      errors.tags = "Please include a tags";
      errorFlag = true;
    }

    if (!musicTitle) {
      errors.musicTitle = "Please include a title.";
    }

    if (errorFlag) {
      return setError(errors);
    }

    setIsLoading(true);
    try {
      const res = await axios.post("/api/suno-music", {
        make_instrumental: instrumental,
        prompt,
        tags: musicTags,
        title: musicTitle,
      });
      console.log(res.data.data);
      setSunoMusicAudio(res.data.data[0]);
    } catch (error) {
      console.log("Error", error);
    }
    setIsLoading(false);
  };

  const handleMouseEnter = (tooltip, e) => {
    const rect = e.target.getBoundingClientRect();
    setTooltipContent(tooltip);
    setTooltipPosition({ top: "20px", left: "230px" });
  };

  const handleValueChange = (value) => {
    setModel(value);
    setTooltipContent("");
  };

  const handleShare = async (imageUrl, index) => {
    try {
      const response = await fetch("/api/share", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl, prompt, seed, model }),
      });

      if (!response.ok) {
        throw new Error("Failed to share");
      }
      const result = await response.json();
      console.log("Shared successfully:", result);
      setSharedIndex(index);
      setTimeout(() => setSharedIndex(null), 2000); // Remove feedback after 2 seconds
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleModelChange = (value) => {
    setModel(value);
    setPrompt("");
    setNegativePrompt("");
    setStyle(""); // Reset style to undefined
    setCheckpointModel("");
    setFaceStyle("");
    setNumImages(1);
    setIsEthicallyDiverse(false);
    setAspectRatio("1024x1024");
    setFile(undefined);
    setbgFile(undefined);
    setGeneratedImages([]);
    setError({ file: "", prompt: "", model: "", bgfile: "" });

    if (value) {
      setError((prev) => ({ ...prev, model: "" }));
    }
  };

  const handleMagicToggle = async (checked) => {
    setIsMagic(checked);
    setIsLoading(true);
    let finalPrompt = `${prompt} in ${style} style`;
    if (checked) {
      setOriginalPrompt(prompt); // Store the original prompt
      try {
        const response = await axios.post("/api/magic", {
          prompt: finalPrompt,
        });
        setPrompt(response.data.prompt);
      } catch (error) {
        console.error("Error calling magic API:", error);
      }
    } else {
      setPrompt(originalPrompt); // Revert to the original prompt if magic is turned off
    }

    setIsLoading(false);
  };

  function generateRandomSeed() {
    return Math.floor(Math.random() * 1000000);
  }

  const [displayedSeed, setDisplayedSeed] = useState("");

  const handleBackgroundRemoveToggle = async () => {
    if (file) {
      // Ensure there is a file to work with
      setIsLoading(true);
      try {
        const imageDataURL = await readAsDataURL(file);
        const response = await axios.post("/api/remove", {
          image: imageDataURL,
        });
      } catch (error) {
        console.error("Error removing background:", error);
      }
      setIsLoading(false);
    }
  };

  const handleMotion = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/motionr", {
        prompt: prompt,
      });
      setVideoUrl(response.data.videoUrl); // Set the video URL
    } catch (error) {
      console.error("Error generating video:", error);
    }
    setIsLoading(false);
  };

  const handleSuno = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/suno", {
        prompt: prompt,
      });
      setAudioUrl(response.data.audioUrl); // Set the audio URL
    } catch (error) {
      console.error("Error generating audio:", error);
    }
    setIsLoading(false);
  };

  const handleUpscale = async () => {
    let processedFile = file;
    setIsLoading(true);

    if (file && file.size > 1 * 1024 * 1024) {
      // Check if the file is larger than 1MB
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        processedFile = await imageCompression(file, options);
        setFile(processedFile);
      } catch (error) {
        console.error("Error compressing file:", error);
        return;
      }
    }

    if (processedFile) {
      setError((prev) => ({ ...prev, file: "" }));
    }

    if (processedFile) {
      // Ensure there is a file to work with
      try {
        const imageDataURL = await readAsDataURL(processedFile);
        const response = await axios.post("/api/upscaler", {
          image: imageDataURL,
        });
        setGeneratedImages([response.data.imageUrl]); // Set the generatedImages state with the new image data
      } catch (error) {
        console.error("Error upscaling image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSeedChange = (event) => {
    const inputSeed = event.target.value;
    setDisplayedSeed(inputSeed);
    if (inputSeed === "" || /^\d+$/.test(inputSeed)) {
      setActualSeed(
        inputSeed === "" ? generateRandomSeed() : parseInt(inputSeed, 10)
      );
    }
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
    if (event.target.value.trim() !== "") {
      setError((prev) => ({ ...prev, prompt: "" }));
    }
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  const ImagesDisplay = ({ isLoading, images }) => {
    const [activeImage, setActiveImage] = useState(null);
    const [loadingIndices, setLoadingIndices] = useState(new Set());
    const [sharingIndices, setSharingIndices] = useState(new Set());
    const [sharedIndex, setSharedIndex] = useState(null);

    const toggleImageView = (imageUrl) => {
      if (activeImage === imageUrl) {
        setActiveImage(null);
      } else {
        setActiveImage(imageUrl);
      }
    };

    const handleShare = async (imageUrl, index) => {
      setSharingIndices((prev) => new Set(prev).add(index));
      try {
        const response = await fetch("/api/share", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imageUrl, prompt, seed, model }),
        });

        if (!response.ok) {
          throw new Error("Failed to share");
        }
        const result = await response.json();
        console.log("Shared successfully:", result);
        setSharedIndex(index);
        setTimeout(() => setSharedIndex(null), 2000); // Remove feedback after 2 seconds
      } catch (error) {
        console.error("Error sharing:", error);
      } finally {
        setSharingIndices((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }
    };

    const handleUpscale = async (index, imageUrl) => {
      try {
        setLoadingIndices((prev) => new Set(prev).add(index));

        // Add an extra 9-second delay if the model is "dall-e-3"
        if (model === "dall-e-3") {
          await new Promise((resolve) => setTimeout(resolve, 9000));
        }

        console.log("fetch started");
        let imageFile = await fetch(imageUrl).then((res) => res.blob());
        console.log("fetch happened");
        if (imageFile.size > 1 * 1024 * 1024) {
          // If the image is larger than 1MB
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          };
          imageFile = await imageCompression(imageFile, options);
        }

        const compressedImageUrl = await readAsDataURL(imageFile);
        const response = await axios.post("/api/upscaler", {
          image: compressedImageUrl,
        });
        const updatedImages = [...images];
        updatedImages[index] = response.data.imageUrl;
        setGeneratedImages(updatedImages);
      } catch (error) {
        console.error("Error upscaling image:", error);
      } finally {
        setLoadingIndices((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }
    };

    if (isLoading) {
      return (
        <div className="animate-pulse space-y-4">
          {Array.from({ length: numImages }).map((_, index) => (
            <div key={index} className="bg-gray-300 h-48 rounded-md"></div>
          ))}
        </div>
      );
    }

    return (
      <div>
        <div className="grid grid-cols-1 gap-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="flex flex-col items-center">
              {loadingIndices.has(index) ? (
                <div className="animate-pulse bg-gray-200 h-48 w-full rounded-md"></div>
              ) : (
                <img
                  alt={`Generated image ${index + 1}`}
                  className="w-full h-auto rounded-md"
                  src={imageUrl}
                  onClick={() => toggleImageView(imageUrl)}
                  style={{ objectFit: "cover" }}
                />
              )}
              <div className="flex items-center mt-2 justify-between w-full">
                <Button
                  onClick={() => handleDownload(imageUrl, index)}
                  className="mr-2"
                >
                  <DownloadIcon className="w-6 h-6" />
                </Button>
                <div className="flex flex-col items-center">
                  {model !== "upscale" && model !== "photoreal" && (
                    <>
                      <Switch
                        id={`upscale-switch-${index}`}
                        onCheckedChange={(checked) =>
                          checked && handleUpscale(index, imageUrl)
                        }
                      />
                      <Label
                        htmlFor={`upscale-switch-${index}`}
                        className="ml-2"
                      >
                        Upscale
                      </Label>
                    </>
                  )}
                </div>
                <Button
                  onClick={() => handleShare(imageUrl, index)}
                  className="ml-2"
                >
                  {sharingIndices.has(index) ? (
                    <div className="animate-spin inline-block w-6 h-6 border-4 border-t-transparent rounded-full"></div>
                  ) : sharedIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="green"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    <ShareIcon className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
        {activeImage && (
          <div
            id="js-overlay"
            className="p-4 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 border-b-gray-600"
            onClick={() => toggleImageView(null)}
          >
            <img
              src={activeImage}
              className="max-w-full max-h-full border-8 border-gray-600 rounded-lg"
              alt="Active"
            />
          </div>
        )}
      </div>
    );
  };

  const handleFileChange = async (file) => {
    if (file && file.size > 1 * 1024 * 1024) {
      // Check if the file is larger than 1MB
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        setFile(compressedFile);
      } catch (error) {
        console.error("Error compressing file:", error);
      }
    } else {
      setFile(file);
    }

    if (file) {
      setError((prev) => ({ ...prev, file: "" }));
    }
  };

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  const handleNegativePromptChange = (event) => {
    setNegativePrompt(event.target.value);
  };

  const handleStyleChange = (value) => {
    setStyle(value);
    if (isMagic) {
      setPrompt(originalPrompt); // Revert to the original prompt if magic was on
      setIsMagic(false); // Turn off magic mode
    }
  };

  const handleCheckpointModelChange = (value) => {
    setCheckpointModel(value);
  };

  const handleFaceStyleChange = (value) => {
    setFaceStyle(value);
  };

  const handleNumImagesChange = (value) => {
    setNumImages(value[0]);
  };

  const handleAspectRatioChange = (value) => {
    setAspectRatio(value);
  };

  const handleCreate = async () => {
    let errorFlag = false;
    let errors = { file: "", prompt: "", model: "" };

    if (!model) {
      errors.model = "Please select a model";
      errorFlag = true;
    }

    if ((model === "ControlNet" || model === "leo-motion") && !file) {
      errors.file = "Please upload an image";
      errorFlag = true;
    }
    if (model === "relight") {
      setNegativePrompt("bad quality");
    }

    if (model !== "leo-motion" && !prompt) {
      errors.prompt = "Please include a prompt";
      errorFlag = true;
    }

    if (errorFlag) {
      setError(errors);
      return;
    }

    setIsLoading(true);
    try {
      let imageDataURL = null;
      if (file) {
        if (file.size > 1 * 1024 * 1024) {
          // Check if the file is larger than 1MB
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          };
          const compressedFile = await imageCompression(file, options);
          imageDataURL = await readAsDataURL(compressedFile);
        } else {
          imageDataURL = await readAsDataURL(file);
        }
      }
      let bgDataURL = null;

      if (bgfile) {
        if (bgfile.size > 1 * 1024 * 1024) {
          // Check if the file is larger than 1MB
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          };
          const compressedbgFile = await imageCompression(bgfile, options);
          bgDataURL = await readAsDataURL(compressedbgFile);
        } else {
          bgDataURL = await readAsDataURL(bgfile);
        }
      }

      // Determine the endpoint based on the model
      let endpoint = "";
      switch (model) {
        case "relight":
          endpoint = "/api/relight";
          break;
        case "suno":
          endpoint = "/api/suno";
          break;
        case "photoreal":
          endpoint = "/api/photoreal";
          break;
        case "leo-motion":
          endpoint = "/api/motion";
          break;
        case "motion":
          endpoint = "/api/motionr";
          break;
        case "rmbg":
          endpoint = "/api/remove";
          break;
        case "upscale":
          endpoint = "/api/upscaler";
          break;
        case "stable-diffusion":
          endpoint = "/api/sdxl";
          break;
        case "dall-e-3":
          endpoint = "/api/dalle-3";
          break;
        case "dall-e-2":
          endpoint = "/api/dall-e-2";
          break;
        case "ControlNet":
          endpoint = "/api/generate";
          break;
        case "ControlNetFace":
          endpoint = "/api/generate"; // assuming the same endpoint for ControlNet and ControlNetFace
          break;
        default:
          endpoint = "/api/generate"; // default fallback
      }

      let finalPrompt = `${prompt}`;
      if (isEthicallyDiverse) {
        finalPrompt = `${finalPrompt}, ethnically diverse`;
      }
      finalPrompt = `${finalPrompt} in ${style} style`;

      const [width, height] = aspectRatio.split("x").map(Number);

      const response = await axios.post(endpoint, {
        image: imageDataURL,
        bg_image: bgDataURL,
        prompt: finalPrompt,
        negative_prompt: negativePrompt + " bad quality",
        num_images: numImages,
        width: width,
        height: height,
        size: aspectRatio,
        seed: actualSeed,
        checkpoint_model: checkpointModel,
        face_style: faceStyle,
        promptText: loePrompt,
      });

      if (model == "photoreal" || model == "transparent") {
        console.log(response.data.generated_images);
        let urls = response.data.generated_images.map((img) => img.url);
        setGeneratedImages(urls);
      } else if (model === "leo-motion") {
        console.log("Res", response.data);
        setVideoUrl(response.data.videoUrl);
      } else {
        setGeneratedImages(
          response.data.imageUrls || [response.data.imageUrl] || [
              "/placeholder.svg",
            ]
        );
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error", error.message);
      }
    }
    setIsLoading(false);
  };
  async function handleEditImage() {
    if (!originalImage) {
      return;
    }

    if (!maskImage) {
      alert("Please mark the image");
      return;
    }

    if (!prompt) {
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("originalImage", originalImage);
    formData.append("maskImage", maskImage);
    formData.append("prompt", prompt);

    try {
      const res = await axios.post("/api/dall-e-2", formData);
      setGeneratedImages([res.data.url]);
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  }

  function copySeedToClipboard() {
    navigator.clipboard.writeText(seed.toString()).then(
      () => {
        console.log("Seed copied to clipboard!");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        console.error("Failed to copy seed:", err);
      }
    );
  }

  function readAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const handleDownload = async (imageUrl, index) => {
    try {
      const response = await axios.post(
        "/api/download",
        { imageUrl },
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `generated-image-${index + 1}.png`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download image:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto my-8 space-y-8 lg:space-y-0">
        <div className="flex flex-col w-full p-4 space-y-6 bg-white border rounded-lg lg:rounded-l-lg">
          <div className="flex justify-between">
            <Link href="/">
              <img
                alt="DDD logo"
                className="h-12 object-cover"
                src="/dlogo.png"
              />
            </Link>
            <Link href={"/community"} target="_blank">
              <div className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2 text-sm font-medium text-white">
                See what others are making ⚡️
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="relative space-y-2">
                <Label htmlFor="Model">Model</Label>

                <Select onValueChange={handleModelChange}>
                  <SelectTrigger id="model" className="w-[220px]">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Create Images</SelectLabel>
                      <SelectItem
                        value="stable-diffusion"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Generate stunningly stable and high-quality images",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Stable Diffusion
                      </SelectItem>
                      <SelectItem
                        value="stable-diffusion-3"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "A model that’s fast and produces accurate text",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Stable Diffusion 3
                      </SelectItem>
                      <SelectItem
                        value="stable-diffusion-3.5"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "A model that’s fast and produces accurate text",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Stable Diffusion 3.5
                      </SelectItem>
                      <SelectItem
                        value="dall-e-3"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Create imaginative and unique images with advanced AI",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;DALL-E 3
                      </SelectItem>

                      <SelectItem
                        value="photoreal"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Produce lifelike, photorealistic images effortlessly",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;PhotoReal
                      </SelectItem>
                      <SelectItem
                        value="ControlNet"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Customize your images with precision and control",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;ControlNet
                      </SelectItem>
                      <SelectItem
                        value="ControlNet-Face Controls"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Fine-tune facial features for perfect portraits",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;ControlNet-Face
                      </SelectItem>
                      <SelectItem
                        value="storyboard"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Create a visual storyboard from a text prompt",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Storyboard
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Create Motion</SelectLabel>
                      <SelectItem
                        value="leo-motion"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Create short animated clips from Image prompts",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                        // disabled
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Runway Motion
                      </SelectItem>
                      <SelectItem
                        value="motion"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Create short animated clips from text prompts",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                        disabled
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Luma
                      </SelectItem>
                      <SelectItem
                        value="motion"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Create short animated clips from text prompts",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                        disabled
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Runway
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Create Audio</SelectLabel>
                      <SelectItem
                        value="suno"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Convert text to speech with natural-sounding audio",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Suno Voice
                      </SelectItem>
                      <SelectItem
                        value="suno-music"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Convert text to speech with natural-sounding audio",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Suno Music
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Edit</SelectLabel>
                      <SelectItem
                        value="dall-e-2"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Edit small parts of an image by selecting it",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;DALL-E 2
                      </SelectItem>
                      <SelectItem
                        value="relight"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Adjust lighting to enhance image backgrounds.",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Relight Background
                      </SelectItem>
                      <SelectItem
                        value="rmbg"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Effortlessly isolate subjects by removing backgrounds",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Remove Background
                      </SelectItem>
                      <SelectItem
                        value="upscale"
                        onMouseEnter={(e) =>
                          handleMouseEnter(
                            "Increase image resolution without losing quality",
                            e
                          )
                        }
                        onMouseLeave={() => setTooltipContent("")}
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;Upscale
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {tooltipContent && (
                  <div
                    className="absolute bg-[#f4f4f5] text-black text-xs p-2 rounded w-64 z-40"
                    style={{
                      top: tooltipPosition.top,
                      left: tooltipPosition.left,
                    }}
                  >
                    {tooltipContent}
                  </div>
                )}
              </div>
              {error.model && (
                <div style={{ color: "red", fontSize: "0.75rem" }}>
                  {error.model}
                </div>
              )}
            </div>
            {model === "photoreal" && (
              <div className="space-y-2">
                <Label htmlFor="Style">Style</Label>
                <Select onValueChange={handleStyleChange}>
                  <SelectTrigger id="image-style">
                    <SelectValue placeholder="Select Style" />
                  </SelectTrigger>
                  <SelectContent>
                    {photorealstyledata.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {model === "relight" && (
              <div className="space-y-2">
                <Label htmlFor="bg-image">Background reference image</Label>
                <Dropzone
                  width={200}
                  height={200}
                  value={bgfile}
                  onChange={(bgfile) => {
                    setbgFile(bgfile);
                  }}
                />
                {error.bgfile && (
                  <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {error.bgfile}
                  </div>
                )}
              </div>
            )}
            {(model === "ControlNet" ||
              model === "relight" ||
              model === "rmbg" ||
              model === "leo-motion" ||
              model === "upscale") && (
              <div className="space-y-2">
                <Label htmlFor="product-image">Original Image</Label>
                <Dropzone
                  width={200}
                  height={200}
                  value={file}
                  onChange={(file) => {
                    setFile(file);
                  }}
                />
                {error.file && (
                  <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {error.file}
                  </div>
                )}
              </div>
            )}
            {model === "leo-motion" && (
              <div className="space-y-2">
                <Label>Prompt </Label>
                <Textarea
                  className={"resize-none"}
                  value={loePrompt}
                  onChange={handleLeoPrompt}
                  rows={4}
                  placeholder="Type something here..."
                />
              </div>
            )}
            {model === "ControlNetFace" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="checkpoint-model">Checkpoint Model</Label>
                  <Select onValueChange={handleCheckpointModelChange}>
                    <SelectTrigger id="checkpoint-model">
                      <SelectValue placeholder="Select Checkpoint Model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general - albedobaseXL_v21">
                        Basic Texture
                      </SelectItem>
                      <SelectItem value="general - dreamshaperXL_alpha2Xl10">
                        Dreamy Art
                      </SelectItem>
                      <SelectItem value="animated - starlightXLAnimated_v3">
                        Vivid Cartoon
                      </SelectItem>
                      <SelectItem value="animated - pixlAnimeCartoonComic_v10">
                        Anime Comic
                      </SelectItem>
                      <SelectItem value="realistic - rundiffusionXL_beta">
                        Photorealistic
                      </SelectItem>
                      <SelectItem value="realistic - RealVisXL_V4.0">
                        High Detail
                      </SelectItem>
                      <SelectItem value="realistic - sdxlUnstableDiffusers_nihilmania">
                        Experimental
                      </SelectItem>
                      <SelectItem value="cinematic - CinematicRedmond">
                        Cinematic
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="face-style">Face Style</Label>
                  <Select onValueChange={handleFaceStyleChange}>
                    <SelectTrigger id="face-style">
                      <SelectValue placeholder="Select Face Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-fidelity">
                        High-Fidelity
                      </SelectItem>
                      <SelectItem value="stylized">Stylized</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="num-images">Number of Images</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="num-images"
                      min={1}
                      max={4}
                      step={1}
                      value={[numImages]}
                      onValueChange={handleNumImagesChange}
                    />
                    <span>{numImages}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-image">Product Image</Label>
                  <Dropzone
                    width={200}
                    height={200}
                    value={file}
                    onChange={(file) => {
                      setFile(file);
                    }}
                  />
                </div>
              </>
            )}
            {model === "dall-e-2" && (
              <div className="relative flex flex-col space-y-2">
                <Label>Image</Label>
                <ImageEditor
                  setEditedImage={setEditedImage}
                  setUserImage={setOriginalImage}
                  userImage={originalImage}
                  updatedMaskedImage={setMaskImage}
                />
                {error.file && (
                  <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {error.file}
                  </div>
                )}
              </div>
            )}

            {model !== "rmbg" &&
              model !== "leo-motion" &&
              model !== "upscale" &&
              model !== "motion" &&
              model !== "photoreal" &&
              model !== "suno" &&
              model !== "dall-e-2" &&
              model !== "storyboard" && 
              model !== "stable-diffusion-3" &&
              model !== "stable-diffusion-3.5" &&
              model !== "suno-music" && (
                <div className="space-y-2">
                  <Label htmlFor="Style">Style</Label>
                  <Select onValueChange={handleStyleChange} value={style}>
                    <SelectTrigger id="image-style">
                      <SelectValue placeholder="Select Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Artistic">Artistic</SelectItem>
                      <SelectItem value="Photorealistic">
                        Photorealistic
                      </SelectItem>
                      <SelectItem value="Cartoon">Cartoon</SelectItem>
                      <SelectItem value="Fantasy art">Fantasy</SelectItem>
                      <SelectItem value="Pixel art">Pixel</SelectItem>
                      <SelectItem value="Watercolor">Watercolor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            {model === "storyboard" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="Style">Style</Label>
                  <Select
                    onValueChange={handleStoryImageStyle}
                    value={storyImageStyle}
                  >
                    <SelectTrigger id="image-style">
                      <SelectValue placeholder="Select Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="black and white">
                        Black and White
                      </SelectItem>
                      <SelectItem value="color">Color Correct</SelectItem>
                    </SelectContent>
                  </Select>
                  {error?.style && (
                    <div style={{ color: "red", fontSize: "0.75rem" }}>
                      {error.style}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="Frames">Number of Frames</Label>
                  <div className="flex items-center space-x-2 pb-4">
                    <Slider
                      defaultValue={[numberOfFrames]}
                      max={12}
                      min={2}
                      step={2}
                      onValueChange={handleNumFrameChange}
                      className={"cursor-pointer"}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="Script">Script</Label>
                  {storyDoc ? (
                    <div className="px-2 py-2 bg-gray-200 rounded-lg flex items-center gap-3 relative">
                      <span className="p-1 text-gray-200 bg-slate-900 rounded-md">
                        <DockIcon />
                      </span>
                      <span>{storyDoc.filename}</span>
                      <div
                        className="absolute right-4 cursor-pointer p-1 text-gray-200 bg-slate-950 rounded-md"
                        onClick={removeStoryDoc}
                      >
                        <Trash2Icon />
                      </div>
                    </div>
                  ) : (
                    <Dropzone
                      fileType={{
                        "application/pdf": [],
                        "application/msword": [],
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                          [],
                      }}
                      onChange={handleStoryDoc}
                    />
                  )}
                  {error.script && (
                    <div style={{ color: "red", fontSize: "0.75rem" }}>
                      {error.script}
                    </div>
                  )}
                </div>
              </>
            )}
            {["stable-diffusion"].includes(model) && (
              <div className="space-y-2">
                <Label htmlFor="num-images">Number of Images</Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="num-images"
                    min={1}
                    max={4}
                    step={1}
                    value={[numImages]}
                    onValueChange={handleNumImagesChange}
                  />
                  <span>{numImages}</span>
                </div>
              </div>
            )}
            {model === "suno-music" && (
              <div className="flex flex-col space-y-2">
                <Label htmlFor="title">Tittle</Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Enter title of the song"
                  onChange={handleMusicTitle}
                  value={musicTitle}
                />
                {error.musicTitle && (
                  <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {error.musicTitle}
                  </div>
                )}
              </div>
            )}
            {model === "suno-music" && (
              <div className="flex flex-col space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Enter tags for the song"
                  onChange={handleMusicTags}
                  value={musicTags}
                />
                {error.tags && (
                  <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {error.tags}
                  </div>
                )}
              </div>
            )}
            {model !== "rmbg" &&
              model !== "upscale" &&
              model !== "leo-motion" && (
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="prompt">Prompt</Label>
                  <Textarea
                    onChange={handlePromptChange}
                    value={prompt}
                    id="prompt"
                    placeholder="Enter a detailed description"
                  />
                  {error.prompt && (
                    <div style={{ color: "red", fontSize: "0.75rem" }}>
                      {error.prompt}
                    </div>
                  )}
                </div>
              )}
            {model !== "rmbg" &&
              model !== "leo-motion" &&
              model !== "upscale" &&
              model !== "motion" &&
              model !== "suno" &&
              model !== "stable-diffusion-3" &&
              model !== "stable-diffusion-3.5" &&
              model !== "suno-music" && (
                <div className="flex items-center space-x-2">
                  <Switch
                    id="magic-mode"
                    checked={isMagic}
                    onCheckedChange={handleMagicToggle}
                  />
                  <Label htmlFor="magic-mode">Add Magic</Label>
                </div>
              )}
            {model !== "rmbg" &&
              model !== "leo-motion" &&
              model !== "upscale" &&
              model !== "motion" &&
              model !== "suno" &&
              model !== "dall-e-2" &&
              model !== "storyboard" &&
              model !== "suno-music" &&
              model !== "leo-motion" && (
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="negative-prompt">Negative Prompt</Label>
                  <Textarea
                    id="negative-prompt"
                    value={negativePrompt}
                    onChange={handleNegativePromptChange}
                    placeholder="Specify elements to exclude from the image (e.g., 'no cars, no animals')"
                  />
                </div>
              )}
            {(model === "stable-diffusion-3" ||
              model === "stable-diffusion-3.5") && (
              <div className="space-y-2">
                <Label htmlFor="Style">Image Format</Label>
                <Select
                  onValueChange={handleImageFormateChange}
                  value={imageFormate}
                >
                  <SelectTrigger id="image-formate">
                    <SelectValue placeholder="Select Image Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="png">png</SelectItem>
                    <SelectItem value="jpg">jpg</SelectItem>
                    <SelectItem value="webp">webp</SelectItem>
                  </SelectContent>
                </Select>
                {error.imageFormate && (
                  <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {error.imageFormate}
                  </div>
                )}
              </div>
            )}
            {(model === "stable-diffusion-3" ||
              model === "stable-diffusion-3.5") && (
              <div className="space-y-2">
                <Label htmlFor="Style">Image Ratio</Label>
                <Select
                  onValueChange={handleImageRatioChange}
                  value={imageRatio}
                >
                  <SelectTrigger id="image-ratio">
                    <SelectValue placeholder="Select Image Ratio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1:1">1:1</SelectItem>
                    <SelectItem value="16:9">16:9</SelectItem>
                    <SelectItem value="21:9">21:9</SelectItem>
                    <SelectItem value="5:4">5:4</SelectItem>
                    <SelectItem value="3:2">3:2</SelectItem>
                  </SelectContent>
                </Select>
                {error.imageRatio && (
                  <div style={{ color: "red", fontSize: "0.75rem" }}>
                    {error.imageRatio}
                  </div>
                )}
              </div>
            )}
            {model !== "rmbg" &&
              model !== "upscale" &&
              model !== "motion" &&
              model !== "suno" &&
              model !== "suno-music" &&
              model !== "leo-motion" && (
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="email">Seed</Label>
                  <Input
                    type="text"
                    id="seed"
                    placeholder="Enter seed or leave blank for random"
                    onChange={handleSeedChange}
                    value={displayedSeed}
                  />
                </div>
              )}
            {model === "suno-music" && (
              <div className="flex flex-col space-y-2">
                <Label htmlFor="aspect-ratio">Make Instrumental</Label>
                <RadioGroup
                  defaultValue="true"
                  onValueChange={handleInstrumentalChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="Instrumental 1" />
                    <Label htmlFor="Instrumental 1">true</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="Instrumental 2" />
                    <Label htmlFor="Instrumental 2">false</Label>
                  </div>
                </RadioGroup>
              </div>
            )}
            {model !== "ControlNet" &&
              model !== "relight" &&
              model !== "rmbg" &&
              model !== "upscale" &&
              model !== "motion" &&
              model !== "suno" &&
              model !== "dall-e-2" &&
              model !== "storyboard" &&
              model !== "stable-diffusion-3" &&
              model !== "stable-diffusion-3.5" &&
              model !== "suno-music" &&
              model !== "leo-motion" && (
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="aspect-ratio">Aspect Ratio</Label>
                  <RadioGroup
                    defaultValue="1024x1024"
                    onValueChange={handleAspectRatioChange}
                  >
                    {model === "dall-e-3" ? (
                      <>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="1024x1024"
                            id="aspect-ratio-1"
                          />
                          <Label htmlFor="aspect-ratio-1">1:1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="1792x1024"
                            id="aspect-ratio-2"
                          />
                          <Label htmlFor="aspect-ratio-2">16:9</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="1024x1792"
                            id="aspect-ratio-3"
                          />
                          <Label htmlFor="aspect-ratio-3">9:16</Label>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="1024x1024"
                            id="aspect-ratio-1"
                          />
                          <Label htmlFor="aspect-ratio-1">1:1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="1024x768"
                            id="aspect-ratio-2"
                          />
                          <Label htmlFor="aspect-ratio-2">4:3</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="1024x576"
                            id="aspect-ratio-3"
                          />
                          <Label htmlFor="aspect-ratio-3">16:9</Label>
                        </div>
                      </>
                    )}
                  </RadioGroup>
                </div>
              )}
            {model !== "relight" &&
              model !== "leo-motion" &&
              model !== "rmbg" &&
              model !== "upscale" &&
              model !== "motion" &&
              model !== "suno" &&
              model !== "dall-e-2" &&
              model !== "storyboard" &&
              model !== "stable-diffusion-3" &&
              model !== "stable-diffusion-3.5" &&
              model !== "suno-music" && (
                <CustomCheckbox
                  id="ethically-diverse"
                  label="Ethnically Diverse"
                  onChange={(checked) => setIsEthicallyDiverse(checked)}
                />
              )}
          </div>
          {model === "rmbg" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleBackgroundRemoveToggle}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : model === "upscale" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleUpscale}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : model === "motion" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleMotion}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : model === "suno" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleSuno}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : model === "dall-e-2" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleEditImage}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : model === "storyboard" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleStoryboard}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : model === "stable-diffusion-3" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleStableDiffusion3}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : model === "stable-diffusion-3.5" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleStableDiffusion3Point5}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : model === "suno-music" ? (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleSunoMusic}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          ) : (
            <Button
              className="w-full bg-black hover:bg-blue-600 text-white"
              onClick={handleCreate}
              disabled={isLoading}
            >
              {isLoading ? "Generating" : "Create"}
            </Button>
          )}
          <Toaster />
        </div>
        <div className="relative w-full  p-4 space-y-6 bg-white border rounded-lg lg:rounded-r-lg">
          {model === "storyboard" && (
            <StoryBoard
              setStoryBoardGeneratedImages={setStoryBoardGeneratedImages}
              style={storyImageStyle}
              num={numberOfFrames}
              isLoading={isLoading}
              generatedImages={storyBoardGeneratedImages}
            />
          )}
          {!isLoading && generatedImages.length > 0 && (
            <div className="flex justify-between items-center">
              <span>Seed: {seed}</span>
              <Button onClick={copySeedToClipboard}>
                {isCopied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="green"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>
                )}
              </Button>
            </div>
          )}
          {model !== "storyboard" && (
            <Suspense
              fallback={
                <div className="animate-pulse space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-gray-300 h-48 rounded-md"
                    ></div>
                  ))}
                </div>
              }
            >
              <ImagesDisplay isLoading={isLoading} images={generatedImages} />
            </Suspense>
          )}
          {audioUrl && (
            <div className="mt-4 flex justify-center">
              <audio controls src={audioUrl}>
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          {sunoMusicAudio && (
            <div className="mt-4 flex justify-between">
              <AudioPlayer
                src={sunoMusicAudio.audio_url}
                tags={sunoMusicAudio.tags}
                title={sunoMusicAudio.title}
                imageUrl={sunoMusicAudio.image_url}
              />
            </div>
          )}
          {videoUrl && (
            <div className="mt-4 flex justify-center">
              <video controls src={videoUrl} className="max-w-full">
                Your browser does not support the video element.
              </video>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end max-w-5xl mx-auto my-8 ">
        <Faq />
      </div>
    </>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = ({ src, title,  imageUrl,tags }) => {
  return (
    <div className="flex flex-col items-center border rounded-lg p-4 w-full mx-auto shadow-lg gap-8">
      <div className="flex items-center justify-between w-full">
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{tags}</p>
        </div>
        <img src={imageUrl} alt={title} className="rounded-lg w-20 h-20" />
      </div>
      <ReactAudioPlayer src={src} autoPlay controls className="w-full" />
    </div>
  );
};

export default AudioPlayer;

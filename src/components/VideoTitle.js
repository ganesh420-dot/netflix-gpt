import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-2 px-2 md:px-8 text-xl rounded-md hover:bg-opacity-60">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-white text-black p-2 px-8 text-xl rounded-md hover:bg-opacity-60">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

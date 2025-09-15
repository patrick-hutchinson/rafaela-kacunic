import React, { useEffect } from "react";

import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";

import { useInView } from "framer-motion";
import { useRef, useState, useContext } from "react";

import { StateContext } from "@/context/StateContext";

const Media = React.memo(({ medium, setDuration, setProgress, muted, paused }) => {
  if (!medium) return null; // Handle early return

  const { deviceDimensions } = useContext(StateContext);

  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, margin: "0px 0px -100px 0px" });

  const getMediaStyle = (mediaAspectRatio) => {
    const deviceAspectRatio = deviceDimensions.width / deviceDimensions.height;
    const fitWidth = mediaAspectRatio > deviceAspectRatio;

    return {
      width: fitWidth ? "100%" : "auto",
      height: fitWidth ? "auto" : "100%",
      aspectRatio: mediaAspectRatio,
      overflow: "hidden",
      position: "relative",
    };
  };

  // Handle Sanity Image
  if (medium.type === "image") {
    return (
      <div style={getMediaStyle(medium.width / medium.height)}>
        <Image
          src={medium.url}
          alt="image"
          unoptimized
          width={medium.width}
          height={medium.height}
          draggable={false}
          placeholder="blur"
          blurDataURL={medium.lqip}
          style={{
            position: "relative",
            opacity: 1,
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  // Handle Sanity Video
  if (medium.type === "video") {
    const [aspectWidth, aspectHeight] = medium.aspect_ratio.split(":");

    let lastUpdate = 0;

    function handleTime(e) {
      if (!setProgress) return;

      const now = Date.now();
      if (now - lastUpdate > 1000) {
        setProgress(formatTime(Math.round(e.target.currentTime)));
        lastUpdate = now;
      }
    }

    function handleDuration(e) {
      if (!setDuration) return;

      setDuration(formatTime(Math.floor(e.target.duration)));
    }

    function formatTime(seconds) {
      if (isNaN(seconds)) return "0:00";
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs.toString().padStart(2, "0")}`;
    }

    useEffect(() => {
      console.log(muted, "muted");
    }, [muted]);

    return (
      <div ref={videoRef} style={getMediaStyle(aspectWidth / aspectHeight)}>
        {!isLoaded && (
          <Image
            src={`https://image.mux.com/${medium.playbackId}/thumbnail.jpg?width=50`}
            fill
            alt="placeholder image"
            style={{
              opacity: isLoaded ? 0 : 1,
              zIndex: 1,
              filter: "blur(30px)",
              transform: "scale(1.8)",
            }}
          />
        )}
        {isInView && (
          <MuxPlayer
            ref={playerRef}
            playbackId={medium.playbackId}
            autoPlay
            controls={false}
            loop
            muted={muted ?? true}
            paused={paused ? paused : false}
            playsInline
            fill
            style={{
              position: "relative",
              opacity: 1,
              zIndex: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onLoadedData={() => setIsLoaded(true)}
            onTimeUpdate={(e) => handleTime(e)}
            onLoadedMetadata={(e) => handleDuration(e)}
          />
        )}
      </div>
    );
  }
});

Media.displayName = "Media";
export default Media;

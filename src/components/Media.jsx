import React from "react";

import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";

import { useInView } from "framer-motion";
import { useRef } from "react";

const Media = React.memo(({ medium }) => {
  if (!medium) return null; // Handle early return

  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, margin: "0px 0px -100px 0px" });

  // Handle Sanity Image
  if (medium.type === "image") {
    return (
      <Image
        src={medium.url}
        alt="image"
        unoptimized
        width={100}
        height={100}
        draggable={false}
        placeholder="blur"
        blurDataURL={medium.lqip}
      />
    );
  }

  // Handle Sanity Video
  if (medium.type === "video") {
    const [aspectWidth, aspectHeight] = medium.aspect_ratio.split(":");

    return (
      <div
        ref={videoRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          aspectRatio: aspectWidth / aspectHeight,
          cursor: "pointer",
          overflow: "hidden",
          // maxHeight: "100vh",
          // maxWidth: "100vw",
        }}
        onClick={(e) => {
          if (!enableFullscreen) return; // exit if fullscreen is disabled
          handleFullscreen(e);
        }}
      >
        {!isLoaded && (
          <Image
            src={`https://image.mux.com/${medium.playbackId}/thumbnail.jpg?width=50`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            alt="placeholder image"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              opacity: isLoaded ? 0 : 1,

              zIndex: 1,
              filter: isMobile ? "blur(10px)" : "blur(30px)",
              transform: isMobile ? "scale(1.7 )" : "scale(1.8)",

              width: "100%",
              height: "100%",
            }}
          />
        )}
        {isInView &&
          (medium.static_renditions?.files?.find((f) => f.name === "high.mp4") ? (
            // Use the static MP4 if available
            <MuxPlayer
              src={`https://stream.mux.com/${medium.playbackId}/high.mp4`}
              autoPlay
              controls={false}
              loop
              muted
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
            />
          ) : (
            // Otherwise use the playbackId to get the full Mux streaming player
            <MuxPlayer
              playbackId={medium.playbackId}
              autoPlay
              controls={false}
              loop
              muted
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
            />
          ))}
      </div>
    );
  }
});

Media.displayName = "Media";
export default Media;

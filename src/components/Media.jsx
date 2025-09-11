import React from "react";

import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";

import { useInView } from "framer-motion";
import { useRef, useState, useContext } from "react";

import { StateContext } from "@/context/StateContext";

const Media = React.memo(({ medium }) => {
  if (!medium) return null; // Handle early return

  const { deviceDimensions } = useContext(StateContext);

  const [isLoaded, setIsLoaded] = useState(false);
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
    const deviceAspectRatio = deviceDimensions.width / deviceDimensions.height;

    const getMediaStyle = (mediaAspectRatio) => {
      const fitWidth = mediaAspectRatio > deviceAspectRatio;

      return {
        width: fitWidth ? "100%" : "auto",
        height: fitWidth ? "auto" : "100%",
        aspectRatio: mediaAspectRatio,
        overflow: "hidden",
        position: "relative",
      };
    };

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
        )}
      </div>
    );
  }
});

Media.displayName = "Media";
export default Media;

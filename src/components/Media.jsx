import React from "react";

import Image from "next/image";

const Media = React.memo(({ medium }) => {
  if (!medium) return null; // Handle early return

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
    return (
      <video playsInline autoPlay loop muted>
        <source type="video/mp4" src={medium.url} />
      </video>
    );
  }
});

Media.displayName = "Media";
export default Media;

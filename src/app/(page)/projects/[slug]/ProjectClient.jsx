"use client";

import { useState } from "react";

import Text from "@/components/Text";

import Header from "@/components/Header";
import Media from "@/components/Media";
import styles from "./project.module.css";

const Project = ({ project, displayNumber }) => {
  const complete_gallery = [project.thumbnail, ...(project.image_gallery ?? [])];

  const image_count = complete_gallery.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleImageNavigation = () => setCurrentIndex((prev) => (prev + 1) % image_count);
  const toggleInfo = () => setShowInfo((prev) => !prev);

  return (
    <main>
      <Header currentIndex={currentIndex} image_count={image_count} showInfo={showInfo} onInfoClick={toggleInfo} />

      {showInfo && (
        <div className={styles.info}>
          <p>{`${displayNumber}. ${project.name} (${image_count} images) ${project.year}`}</p>
          <Text text={project.about} />
        </div>
      )}

      <div className={styles.media_wrapper} onClick={() => handleImageNavigation()}>
        <Media medium={complete_gallery[currentIndex]} />
      </div>
    </main>
  );
};

export default Project;

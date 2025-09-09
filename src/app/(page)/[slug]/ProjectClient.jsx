"use client";

import { useState } from "react";

import Media from "@/components/Media";
import styles from "./styles.module.css";

const Project = ({ project }) => {
  const complete_gallery = [project.thumbnail, ...(project.image_gallery ?? [])];

  const image_count = complete_gallery.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleImageNavigation = () => setCurrentIndex((prev) => (prev + 1) % image_count);
  const toggleInfo = () => setShowInfo((prev) => !prev);

  return (
    <main>
      <div className={styles.project_header}>
        <div onClick={() => toggleInfo()}>INFO</div>
        <div>{`${currentIndex} / ${image_count}`}</div>
        <div>BACK</div>
      </div>

      {showInfo && <div className={styles.info}>{project.info}</div>}

      <div className={styles.media_wrapper} onClick={() => handleImageNavigation()}>
        <Media medium={complete_gallery[currentIndex]} />
      </div>
    </main>
  );
};

export default Project;

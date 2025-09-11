"use client";

import { useState } from "react";

import Text from "@/components/Text";

import Header from "@/components/Header";
import Media from "@/components/Media";
import styles from "./project.module.css";

import { motion, AnimatePresence } from "framer-motion";

const Project = ({ project, displayNumber }) => {
  const complete_gallery = [project.thumbnail, ...(project.imagegallery ?? [])];

  const image_count = complete_gallery.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleImageNavigation = () => setCurrentIndex((prev) => (prev + 1) % image_count);
  const toggleInfo = () => setShowInfo((prev) => !prev);

  console.log(project, "project");

  return (
    <main>
      <Header currentIndex={currentIndex} image_count={image_count} showInfo={showInfo} onInfoClick={toggleInfo} />

      {showInfo && (
        <div className={styles.info}>
          <p>{`${displayNumber}. ${project.name} (${image_count} images) ${project.year}`}</p>
          <Text text={project.about} />
        </div>
      )}

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          className={styles.media_wrapper}
          onClick={() => handleImageNavigation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          key={complete_gallery[currentIndex].url}
        >
          <Media medium={complete_gallery[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Project;

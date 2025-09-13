"use client";

import { useState } from "react";

import Text from "@/components/Text";

import Header from "@/components/Header";
import Media from "@/components/Media";
import styles from "./project.module.css";

import { motion, AnimatePresence } from "framer-motion";
import ProjectInfo from "@/components/ProjectInfo";

const Project = ({ project, project_index }) => {
  const image_count = project.imagegallery.length;

  console.log(image_count);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleImageNavigation = () => setCurrentIndex((prev) => (prev + 1) % image_count);
  const toggleInfo = () => setShowInfo((prev) => !prev);

  console.log(project, "project");

  return (
    <main className={styles.project_page} style={{ cursor: image_count > 1 ? "pointer" : "default" }}>
      <Header currentIndex={currentIndex} image_count={image_count} showInfo={showInfo} onInfoClick={toggleInfo} />

      {showInfo && (
        <div className={styles.info}>
          <ProjectInfo project={project} project_index={project_index} />
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
          key={project.imagegallery[currentIndex].url}
        >
          <Media medium={project.imagegallery[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Project;

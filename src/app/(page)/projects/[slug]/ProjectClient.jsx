"use client";

import { useEffect, useState, useContext } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { StateContext } from "@/context/StateContext";

import Header from "@/components/Header/Header";
import Media from "@/components/Media";
import ProjectInfo from "@/components/ProjectInfo";
import VideoControls from "@/components/VideoControls/VideoControls";

import styles from "./project.module.css";

const Project = ({ project, project_index }) => {
  const { isMobile } = useContext(StateContext);

  const image_count = project?.imagegallery?.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleImageNavigation = () => setCurrentIndex((prev) => (prev + 1) % image_count);
  const toggleInfo = () => setShowInfo((prev) => !prev);

  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(true);
  const [duration, setDuration] = useState(true);

  const [showVideoHeader, setShowVideoHeader] = useState(false);

  useEffect(() => {
    const isVideo = project.imagegallery[currentIndex].type === "video";
    setShowVideoHeader(isVideo);
  }, [currentIndex]);

  return (
    <main className={styles.project_page} style={{ cursor: image_count > 1 ? "pointer" : "default" }}>
      <Header
        currentIndex={currentIndex}
        image_count={image_count}
        showInfo={showInfo}
        onInfoClick={toggleInfo}
        duration={duration}
        progress={progress}
        setPaused={setPaused}
        setMuted={setMuted}
        paused={paused}
        muted={muted}
        showVideoHeader={showVideoHeader}
      />
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
          <Media
            medium={project.imagegallery[currentIndex]}
            setProgress={setProgress}
            setDuration={setDuration}
            paused={paused}
            muted={muted}
          />
        </motion.div>
      </AnimatePresence>
      {showVideoHeader && isMobile && (
        <VideoControls
          progress={progress}
          duration={duration}
          paused={paused}
          setPaused={setPaused}
          muted={muted}
          setMuted={setMuted}
        />
      )}{" "}
    </main>
  );
};

export default Project;

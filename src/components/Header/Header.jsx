"use client";

import { usePathname } from "next/navigation";
import { useContext } from "react";
import AnimationLink from "../AnimationLink";

import { StateContext } from "@/context/StateContext";

import VideoControls from "@/components/VideoControls/VideoControls";

import styles from "./Header.module.css";

const Header = ({
  showInfo,
  currentIndex,
  image_count,
  onInfoClick,
  duration,
  progress,
  paused,
  muted,
  setPaused,
  setMuted,
  showVideoHeader,
}) => {
  const pathname = usePathname();

  const { isMobile } = useContext(StateContext);

  const isProject = pathname.includes("projects");

  const InfoButton = () => {
    return (
      <div className={styles["info_button"]}>
        <button onClick={onInfoClick}>{showInfo ? "CLOSE" : "INFO"}</button>
      </div>
    );
  };

  const MediaCounter = () => {
    return <div className={styles.media_count}>{`${currentIndex + 1}/${image_count}`}</div>;
  };

  return (
    <header id={styles.header}>
      <div className={styles.header_inner}>
        {isProject && (
          <div className={styles["info_button"]}>
            <button onClick={onInfoClick}>{showInfo ? "CLOSE" : "INFO"}</button>
          </div>
        )}

        {showVideoHeader && !isMobile && (
          <VideoControls
            progress={progress}
            duration={duration}
            paused={paused}
            setPaused={setPaused}
            muted={muted}
            setMuted={setMuted}
          />
        )}

        {isProject && <MediaCounter />}
      </div>
      <div className={styles.back_button}>
        <AnimationLink path="/">BACK</AnimationLink>
      </div>
    </header>
  );
};

export default Header;

"use client";

import { useState, useEffect, useLayoutEffect } from "react";

import styles from "./home.module.css";

import Image from "next/image";
import Link from "next/link";

import Media from "@/components/Media";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

import { enableScroll, disableScroll } from "@/helpers/blockScrolling";

export default function Home({ projects, home }) {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    if (showOpening) disableScroll();
  }, [showOpening]);

  useEffect(() => {
    setTimeout(() => {
      setShowOpening(false);
    }, 1000);
  }, []);

  const handleAnimationComplete = () => enableScroll();

  const openingVariants = {
    open: { height: "100vh", transition: { height: { duration: 1, ease: "easeInOut" } } },
    closed: { height: "50vh", transition: { height: { duration: 1, ease: "easeInOut" } } },
  };

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.nameplate}
        initial="open"
        animate={showOpening ? "open" : "closed"}
        variants={openingVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        <Link href="/about" className={styles.nameplate_inner}>
          <div className={styles.nameplate_text}>RAFAELA</div>
          <img className={styles.nameplate_icon} src="/assets/images/nameplate-icon.png" alt="Nameplate" />
        </Link>
      </motion.div>

      <motion.div className={styles.project_grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.media_wrapper}>
            <Link href={project.slug.current}>
              <Media medium={project.thumbnail} />
            </Link>
          </div>
        ))}
      </motion.div>

      <div className={styles.hero}>
        <div className={`${styles.tagline} ff1`}>{home.tagline}</div>
        <Footer />
        <div className={styles.passport_container} style={{ width: `${94}px`, height: `${120}px` }}>
          <Image
            src="/assets/images/PassfotoRK.png"
            alt="Passport"
            width={94}
            height={120}
            style={{ width: `${94}px`, height: `${120}px` }}
          />
          <Image
            src="/assets/images/MaskePF.png"
            alt="Mask"
            width={110}
            height={172}
            className={styles.mask}
            style={{ width: `${110}px`, height: `${172}px` }}
          />
        </div>
      </div>
    </main>
  );
}

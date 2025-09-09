"use client";

import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { enableScroll, disableScroll } from "@/helpers/blockScrolling";

import { usePathname } from "next/navigation";

import Link from "next/link";

import styles from "./home.module.css";

const ClientLayout = ({ children }) => {
  const pathname = usePathname(); // reactive, updates on route change

  const nameplate = useRef(null);
  const [isHome, setIsHome] = useState(pathname === "/");
  const [showIcon, setShowIcon] = useState(pathname === "/about" || pathname === "/legal");
  const [showOpening, setShowOpening] = useState(isHome);

  useEffect(() => {
    if (showOpening) disableScroll();
  }, [showOpening]);

  useEffect(() => {
    setTimeout(() => {
      setShowOpening(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  useEffect(() => {
    setShowIcon(pathname === "/about" || pathname === "/legal");
  }, [pathname]);

  const handleAnimationComplete = () => enableScroll();

  const openingVariants = {
    open: { height: "100vh", transition: { height: { duration: 1, ease: "easeInOut" } } },
    closed: { height: "50vh", transition: { height: { duration: 1, ease: "easeInOut" } } },
  };

  return (
    <main>
      <motion.div
        className={styles.nameplate}
        ref={nameplate}
        style={{
          position: isHome ? "sticky" : "fixed",
          width: isHome ? "100%" : "calc(100% - 2 * var(--margin))",
        }}
        initial={isHome ? "open" : "closed"}
        animate={isHome && showOpening ? "open" : "closed"}
        variants={openingVariants}
        onAnimationComplete={handleAnimationComplete}
      >
        <Link href="/about" className={`${showIcon ? styles.showIcon : ""} ${styles.nameplate_inner}`}>
          <div className={styles.nameplate_text}>RAFAELA</div>
          <img className={styles.nameplate_icon} src="/assets/images/nameplate-icon.png" alt="Nameplate" />
        </Link>
      </motion.div>

      {children}
    </main>
  );
};

export default ClientLayout;

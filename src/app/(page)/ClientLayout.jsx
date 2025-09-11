"use client";

import { useState, useEffect, useRef, useContext } from "react";

import { ViewTransitions } from "next-view-transitions";

import { motion } from "framer-motion";

import { enableScroll, disableScroll } from "@/helpers/blockScrolling";

import { usePathname } from "next/navigation";

import { AnimationContext } from "@/context/AnimationContext";

// import Link from "next/link";
import { Link } from "next-view-transitions";

import styles from "./home.module.css";

const ClientLayout = ({ children }) => {
  // Route Change and AnimatePresence
  const pathname = usePathname(); // reactive, updates on route change

  // Nameplate
  const nameplate = useRef(null);
  const [isHome, setIsHome] = useState(pathname === "/");
  const [showIcon, setShowIcon] = useState(pathname === "/about" || pathname === "/legal");
  const [showOpening, setShowOpening] = useState(isHome);

  const { pathChanged } = useContext(AnimationContext);

  useEffect(() => {
    if (showOpening) {
      disableScroll();
      document.querySelector("body").classList.add("no-scroll");
    }
  }, [showOpening]);

  useEffect(() => {
    if (pathChanged && !showOpening) {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [pathChanged]);

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

  const handleAnimationComplete = () => {
    enableScroll();
    document.querySelector("body").classList.remove("no-scroll");
  };

  const openingVariants = {
    open: { height: "100vh", transition: { height: { duration: 1, ease: "easeInOut" } } },
    closed: { height: "50vh", transition: { height: { duration: 1, ease: "easeInOut" } } },
  };

  let AnimatedRoute = () => {
    return <div>{children}</div>;
  };

  return (
    <ViewTransitions>
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

      <AnimatedRoute />
    </ViewTransitions>
  );
};

export default ClientLayout;

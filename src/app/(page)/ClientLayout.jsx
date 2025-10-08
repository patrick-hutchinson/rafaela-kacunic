"use client";

import { useState, useEffect, useRef, useContext } from "react";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { enableScroll, disableScroll } from "@/helpers/blockScrolling";

import { AnimationContext } from "@/context/AnimationContext";

import AnimationLink from "@/components/AnimationLink";

import styles from "./home.module.css";

const ClientLayout = ({ children }) => {
  // Route Change and AnimatePresence
  const pathname = usePathname(); // reactive, updates on route change

  // Nameplate
  const nameplate = useRef(null);
  const isHome = pathname === "/";
  const [showIcon, setShowIcon] = useState(pathname === "/legal");
  const [showOpening, setShowOpening] = useState(isHome);
  const [destination, setDestination] = useState("/about");
  const [hidden, setHidden] = useState(false);

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

  // Change the destination of the scribble depending on the current page
  useEffect(() => {
    if (pathname !== "/") document.querySelector("body").classList.remove("no-scroll");
  }, [pathname]);

  // ✅ Correct syntax:
  useEffect(() => {
    pathname.includes("/project") ? setHidden(true) : setHidden(false);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setShowOpening(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setShowIcon(pathname === "/legal");
  }, [pathname]);

  useEffect(() => {
    pathname === "/about" ? setDestination("/") : setDestination("/about");
  }, [pathname]);

  const handleAnimationComplete = () => {
    enableScroll();
    document.querySelector("body").classList.remove("no-scroll");
  };

  const openingVariants = {
    open: { height: "100vh", transition: { height: { duration: 1, ease: "easeInOut" } } },
    closed: { height: "50vh", transition: { height: { duration: 1, ease: "easeInOut" } } },
  };

  useEffect(() => {
    console.log(isHome, "isHome");
  }, [isHome]);

  return (
    <>
      <motion.div
        className={`${styles.nameplate} ${hidden ? styles.hidden : ""}`}
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
        <div className={`${showIcon ? styles.showIcon : ""}  ${styles.nameplate_inner}`}>
          <AnimationLink path={destination}>
            <div className={styles.nameplate_text}>RAFAELA</div>
            <img className={styles.nameplate_icon} src="/assets/images/nameplate-icon.png" alt="Nameplate" />
          </AnimationLink>
        </div>
      </motion.div>

      {children}
    </>
  );
};

export default ClientLayout;

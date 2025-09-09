"use client";

import styles from "./home.module.css";

import Image from "next/image";
import Link from "next/link";

import Media from "@/components/Media";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Home({ projects, home }) {
  return (
    <div>
      <motion.div className={styles.project_grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.media_wrapper}>
            <Link href={`/projects/${project.slug.current}`}>
              <Media medium={project.thumbnail} />
            </Link>
          </div>
        ))}
      </motion.div>

      <div className={styles.hero}>
        <div className={`${styles.tagline} ff1`}>
          <div className={styles.tagline_inner}>
            {home.tagline}

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
        </div>
        <Footer />
      </div>
    </div>
  );
}

"use client";

import styles from "./home.module.css";

import Image from "next/image";
import ProjectInfo from "@/components/ProjectInfo";

import AnimationLink from "@/components/AnimationLink";
// import Link from "next/link";
// import { Link } from "next-view-transitions";

import Media from "@/components/Media";
import Footer from "@/components/Footer";

export default function Home({ projects, home }) {
  return (
    <>
      <div className={styles.project_grid}>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.project_wrapper}>
              <AnimationLink path={`/projects/${project.slug.current}`}>
                <Media medium={project.thumbnail} />

                <div className={styles.info}>
                  <ProjectInfo project={project} project_index={index + 1} />
                </div>
              </AnimationLink>
            </div>
          );
        })}
      </div>

      <div className={styles.hero}>
        <div className={`${styles.tagline} ff1`}>
          <div className={styles.tagline_inner}>
            <div style={{ display: "inline-block", position: "relative", zIndex: 2 }}>{home.tagline}</div>

            <div className={styles.passport_container} style={{ width: `${94}px`, height: `${120}px`, zIndex: 1 }}>
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
      </div>
      <Footer />
    </>
  );
}

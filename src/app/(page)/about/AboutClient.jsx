"use client";

import styles from "./about.module.css";

// import Link from "next/link";
import { Link } from "next-view-transitions";
import Text from "@/components/Text";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutClient = ({ about }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.about_container}>
          <section className={`${styles.section} ${styles.about} ff2`}>
            <h3 className={styles.section_header}>about</h3>
            <div className={styles.text_wrapper}>
              <Text text={about.about} />
            </div>
          </section>

          <div>
            <section className={`${styles.section} ${styles.services} ff2`}>
              <h3 className={styles.section_header}>services</h3>
              <div className={styles.text_wrapper}>
                <ul>
                  {about.services.map((service, index, array) => (
                    <li key={index} className={styles.service}>
                      {service}
                      {index !== array.length - 1 && ", "}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className={`${styles.section} ${styles.contact} ff2`}>
              <h3 className={styles.section_header}>contact</h3>
              <div className={styles.text_wrapper}>
                <ul>
                  {about.socials.map((social, index) => (
                    <li key={index}>
                      <Link href={social.link ? social.link : "#"} target="_blank">
                        {social.platform}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <section className={`${styles.section} ${styles.badland} ff2`}>
            <h3 className={styles.section_header}>badland</h3>
            <div className={styles.text_wrapper}>
              <Text text={about.badland} />
            </div>
          </section>
        </div>
        <div className={styles.footer_container}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default AboutClient;

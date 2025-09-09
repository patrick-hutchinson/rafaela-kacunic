import styles from "./about.module.css";

import { PortableText } from "@portabletext/react";

import Link from "next/link";
import Footer from "@/components/Footer";

const AboutClient = ({ about }) => {
  return (
    <main className={styles.main}>
      <div className={styles.about_container}>
        <section className={`${styles.section} ${styles.about} ff2`}>
          <h3 className={styles.section_header}>about</h3>
          <div className={styles.text_wrapper}>
            <PortableText value={about.about} />
          </div>
        </section>

        <div>
          <section className={`${styles.section} ${styles.services} ff2`}>
            <h3 className={styles.section_header}>services</h3>
            <div className={styles.text_wrapper}>
              <ul>
                {about.services.map((service, index) => (
                  <li key={index}>{service}</li>
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
            <PortableText
              value={about.badland}
              components={{
                marks: {
                  link: ({ value, children }) => {
                    const href = value?.href || value?.link; // depending on your schema
                    return (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutClient;

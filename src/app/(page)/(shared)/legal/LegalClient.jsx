import styles from "./legal.module.css";

import { PortableText } from "@portabletext/react";

const LegalClient = ({ legal }) => {
  return (
    <main className={styles.main}>
      <div className={styles.legal_container}>
        <section className={`${styles.section} ${styles.imprint} ff2`}>
          <h3 className={styles.section_header}>imprint</h3>
          <div className={styles.text_wrapper}>
            <PortableText
              value={legal.imprint}
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

        <section className={`${styles.section} ${styles.privacy_policy} ff3`}>
          <h3 className={styles.section_header}>privacy policy</h3>
          <div className={styles.text_wrapper}>
            <PortableText
              value={legal.privacy_policy}
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
    </main>
  );
};

export default LegalClient;

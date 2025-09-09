import Header from "@/components/Header";
import styles from "./legal.module.css";

import Text from "@/components/Text";

const LegalClient = ({ legal }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.legal_container}>
          <section className={`${styles.section} ${styles.imprint} ff2`}>
            <h3 className={styles.section_header}>imprint</h3>
            <div className={styles.text_wrapper}>
              <Text text={legal.imprint} />
            </div>
          </section>

          <section className={`${styles.section} ${styles.privacy_policy} ff3`}>
            <h3 className={styles.section_header}>privacy policy</h3>
            <div className={styles.text_wrapper}>
              <Text text={legal.privacy_policy} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LegalClient;

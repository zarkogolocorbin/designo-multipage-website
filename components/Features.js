import Image from "next/image";
import styles from "../styles/features.module.css";
import { motion } from "framer-motion";
const Variants = {
  offscreen: {
    y: -10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

export default function Features() {
  return (
    <section className={styles.features}>
      <motion.article
        className={styles["features-container"]}
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
      >
        <Image
          src="/assets/home/desktop/illustration-passionate.svg"
          alt="illustration-passionate"
          width={202}
          height={202}
        />
        <div className={styles["features-content"]}>
          <h3>PASSIONATE</h3>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </motion.article>
      <motion.article
        className={styles["features-container"]}
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
      >
        <Image
          src="/assets/home/desktop/illustration-resourceful.svg"
          alt="illustration-resourceful"
          width={202}
          height={202}
        />
        <div className={styles["features-content"]}>
          <h3>RESOURCEFUL</h3>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </motion.article>
      <motion.article
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 1.6,
        }}
        className={styles["features-container"]}
      >
        <Image
          src="/assets/home/desktop/illustration-friendly.svg"
          alt="illustration-friendly"
          width={202}
          height={202}
        />
        <div className={styles["features-content"]}>
          <h3>FRIENDLY</h3>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </motion.article>
    </section>
  );
}

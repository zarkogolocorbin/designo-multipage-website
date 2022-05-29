import Link from "next/link";
import Image from "next/image";
import styles from "../styles/showcase.module.css";
import { motion } from "framer-motion";

const Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      // type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

const contentVariants = {
  offscreen: {
    y: -10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      // type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles["showcase-center"]}>
        <motion.div
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className={styles["showcase-content"]}
        >
          <h2>Award-winning custom designs and digital branding solutions</h2>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link href={"/about"}>
            <a>learn more</a>
          </Link>
        </motion.div>
        <div className={styles["showcase-image"]}>
          <Image
            src={"/assets/black-front.svg"}
            width={"284px"}
            height={"573px"}
            alt="hero image"
            blurDataURL="/assets/black-front.svg"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}

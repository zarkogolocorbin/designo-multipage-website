import Link from "next/link";
import styled from "../styles/cta.module.css";
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

export default function Cta() {
  return (
    <section className={styled.cta}>
      <motion.div
        variants={Variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className={styled["cta-center"]}
      >
        <div>
          <h2>Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link href="/contact">
          <a>Get in touch</a>
        </Link>
      </motion.div>
    </section>
  );
}

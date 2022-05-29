import styles from "../../styles/aboutShowcase.module.css";
import TalentSection from "./Talent";
import Image from "next/image";

export default function AboutShowcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles["showcase-center"]}>
        <div className={styles["showcase-content"]}>
          <h1>About us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <div className={styles["showcase-images"]}>
          <div className={styles["showcase-img-mobile"]}>
            <Image
              src="/assets/about/mobile/image-about-hero.jpg"
              width={767}
              height={655}
              alt={"img"}
            />
          </div>
          <div className={styles["showcase-img-tablet"]}>
            <Image
              src="/assets/about/tablet/image-about-hero.jpg"
              width={943}
              height={438}
              alt={"img"}
            />
          </div>
          <div className={styles["showcase-img-desktop"]}>
            <Image
              src="/assets/about/desktop/image-about-hero.jpg"
              width={476}
              height={480}
              alt={"img"}
            />
          </div>
        </div>
      </div>
      <TalentSection />
    </section>
  );
}

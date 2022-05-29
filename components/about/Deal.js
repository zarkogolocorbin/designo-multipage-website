import styles from "../../styles/about-details.module.css";
import Image from "next/image";

export default function DealSection() {
  return (
    <section className={styles["deal-section"]}>
      <div className={styles["deal-images"]}>
        <div className={styles["details-img-mobile"]}>
          <Image
            src="/assets/about/mobile/image-real-deal.jpg"
            width={767}
            height={655}
            alt="images"
          />
        </div>
        <div className={styles["details-img-tablet"]}>
          <Image
            src="/assets/about/tablet/image-real-deal.jpg"
            width={943}
            height={438}
            alt="images"
          />
        </div>
        <div className={styles["details-img-desktop"]}>
          <Image
            src="/assets/about/desktop/image-real-deal.jpg"
            width={476}
            height={640}
            alt="images"
          />
        </div>
      </div>
      <div className={styles["deal-content"]}>
        <h2>The real deal</h2>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
    </section>
  );
}

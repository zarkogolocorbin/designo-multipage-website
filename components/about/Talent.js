import styles from "../../styles/about-details.module.css";
import Image from "next/image";

export default function TalentSection() {
  return (
    <section className={styles["talent-section"]}>
      <div className={styles["talent-images"]}>
        <div className={styles["details-img-mobile"]}>
          <Image
            src={"/assets/about/mobile/image-world-class-talent.jpg"}
            width={767}
            height={655}
            alt="images"
          />
        </div>
        <div className={styles["details-img-tablet"]}>
          <Image
            src={"/assets/about/tablet/image-world-class-talent.jpg"}
            width={943}
            height={438}
            alt="images"
          />
        </div>
        <div className={styles["details-img-desktop"]}>
          <Image
            src={"/assets/about/desktop/image-world-class-talent.jpg"}
            width={476}
            height={640}
            alt="images"
          />
        </div>
      </div>
      <div className={styles["talent-content"]}>
        <h2>World-class talent</h2>
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import styles from "../styles/locations-card.module.css";
export default function Locations() {
  return (
    <section className={styles.locations}>
      <div className={styles["locations-card"]}>
        <Image
          src="/assets/shared/desktop/illustration-canada.svg"
          width={202}
          height={202}
          alt="canada"
        />
        <div className={styles["locations-content"]}>
          <h3>Canada</h3>
          <Link href="/location">
            <a>see location</a>
          </Link>
        </div>
      </div>
      <div className={styles["locations-card"]}>
        <Image
          src="/assets/shared/desktop/illustration-australia.svg"
          width={202}
          height={202}
          alt="canada"
        />
        <div className={styles["locations-content"]}>
          <h3>Australia</h3>
          <Link href="/location">
            <a>see location</a>
          </Link>
        </div>
      </div>
      <div className={styles["locations-card"]}>
        <Image
          src="/assets/shared/desktop/illustration-united-kingdom.svg"
          width={202}
          height={202}
          alt="canada"
        />
        <div className={styles["locations-content"]}>
          <h3>United Kingdom</h3>
          <Link href="/location">
            <a>see location</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

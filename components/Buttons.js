import Link from "next/link";
import styles from "../styles/buttons.module.css";

export default function Buttons() {
  return (
    <section className={styles.buttons}>
      <div className={styles["web-design"]}>
        <div className={styles.overlay}>
          <Link href="/web-design">
            <a>
              <h2>web design</h2>
              <p>
                view projects <span> &gt; </span>
              </p>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles["app-design"]}>
        <div className={styles.overlay}>
          <Link href="/app-design">
            <a>
              <h2>app design</h2>
              <p>
                view projects <span> &gt; </span>
              </p>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles["graphic-design"]}>
        <div className={styles.overlay}>
          <Link href="/graphic-design">
            <a>
              <h2>graphic design</h2>
              <p>
                view projects <span> &gt; </span>
              </p>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import styles from "../styles/buttons.module.css";

export default function Buttons() {
  return (
    <section className={styles.buttons}>
      <div className={styles["web-design"]}>
        <div className={styles.overlay}>
          <Link
            href="/web-design"
            aria-label="this link will take you back to the web design page"
          >
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
          <Link
            href="/app-design"
            aria-label="this link will take you back to the app-design page"
          >
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
          <Link
            href="/graphic-design"
            aria-label="this link will take you back to the graphic design page"
          >
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

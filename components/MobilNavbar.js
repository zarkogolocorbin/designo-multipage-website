import styles from "../styles/header.module.css";
import Link from "next/link";

export default function MobilNavbar() {
  return (
    <div className={styles["mobileNav-overlay"]}>
      <ul className={styles["navbarMobile-links"]}>
        <li>
          <Link href="/about">
            <a>our company</a>
          </Link>
        </li>
        <li>
          <Link href="/location">
            <a>locations</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

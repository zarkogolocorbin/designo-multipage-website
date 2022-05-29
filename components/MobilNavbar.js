import styles from "../styles/header.module.css";
import Link from "next/link";

export default function MobilNavbar() {
  return (
    <div className={styles["mobileNav-overlay"]}>
      <ul className={styles["navbarMobile-links"]}>
        <li>
          <Link
            href="/about"
            aria-label="this link will take you to the about page"
          >
            <a>our company</a>
          </Link>
        </li>
        <li>
          <Link
            href="/location"
            aria-label="this link will take you to the location page"
          >
            <a>locations</a>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            aria-label="this link will take you to the contact page"
          >
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

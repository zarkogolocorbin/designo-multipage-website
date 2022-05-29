import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobilNavbar from "./MobilNavbar";
import styles from "../styles/header.module.css";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleLinks = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles[`${showNavbar ? "navbar-fixed" : "navbar"}`]}>
      <div className={styles["navbar-center"]}>
        <Link href="/">
          <a>
            <Image
              src="/assets/shared/desktop/logo-dark.png"
              width={"200px"}
              height={"27px"}
              alt="logo image"
            />
          </a>
        </Link>
        <button
          className={styles[`${showNavbar ? "active-menu" : "hamburger-menu"}`]}
          onClick={() => toggleLinks()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={styles["navbar-links"]}>
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
      {showNavbar && <MobilNavbar />}
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/footer.module.css";

export default function FooterContact() {
  return (
    <footer className={styles["footer-contact"]}>
      <div className={styles["footer-contact-center"]}>
        <div className={styles["footer-navbar"]}>
          <div className={styles["footer-logo"]}>
            <Link href="/">
              <a>
                <Image
                  src={"/assets/shared/desktop/logo-light.png"}
                  height={27}
                  width={202}
                  alt={"logo"}
                />
              </a>
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/location">
              <a>Location</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles["contact-address"]}>
            <p style={{ fontWeight: "bold" }}>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className={styles["contact-details"]}>
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className={styles["contact-social"]}>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/shared/desktop/icon-facebook.svg"
                      height={24}
                      width={24}
                      alt="social-icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/shared/desktop/icon-youtube.svg"
                      height={24}
                      width={24}
                      alt="social-icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/shared/desktop/icon-twitter.svg"
                      height={24}
                      width={24}
                      alt="social-icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/shared/desktop/icon-pinterest.svg"
                      height={24}
                      width={24}
                      alt="social-icon"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/shared/desktop/icon-instagram.svg"
                      height={24}
                      width={24}
                      alt="social-icon"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
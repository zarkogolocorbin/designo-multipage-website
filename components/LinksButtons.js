import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/buttonsLink.module.css";

export default function LinksButtons({ allCategories }) {
  const router = useRouter();
  const currentCategories = allCategories.filter((category) => {
    return category.slug !== router.query.slug;
  });

  return (
    <section className={styles.buttons}>
      {currentCategories.map((curCategory, index) => {
        return (
          <div key={index} className={styles[`${curCategory.slug}`]}>
            <div className={styles.overlay}>
              <Link href={`/${curCategory.slug}`}>
                <a>
                  <h2>{curCategory.name}</h2>
                  <p>
                    view projects <span> &gt; </span>
                  </p>
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

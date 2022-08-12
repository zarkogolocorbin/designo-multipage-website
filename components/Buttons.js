import Link from "next/link";
import styles from "../styles/buttons.module.css";
import Carousel from "react-elastic-carousel";

export default function Buttons({ category }) {
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },

    { width: 850, itemsToShow: 2 },
  ];
  return (
    <section className={styles.buttons}>
      {category.length < 3 ? (
        category.map((category, index) => {
          return (
            <div
              className={[styles.card, styles[`${category.slug}`]].join(" ")}
              key={index}
            >
              <div className={styles.overlay}>
                <Link
                  href="/app-design"
                  aria-label="this link will take you back to the app-design page"
                >
                  <a>
                    <h2>{category.categoryTitle}</h2>
                    <p>
                      view projects <span> &gt; </span>
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <Carousel breakPoints={breakPoints}>
          {category.map((category, index) => {
            return (
              <div
                className={[styles.card, styles[`${category.slug}`]].join(" ")}
                key={index}
              >
                <div className={styles.overlay}>
                  <Link
                    href="/app-design"
                    aria-label="this link will take you back to the app-design page"
                  >
                    <a>
                      <h2>{category.categoryTitle}</h2>
                      <p>
                        view projects <span> &gt; </span>
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </section>
  );
}

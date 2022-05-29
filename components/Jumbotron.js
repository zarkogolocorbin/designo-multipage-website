import styles from "../styles/jumbotron.module.css";

export default function Jumbotron({ title, text }) {
  return (
    <section className={styles.jumbotron}>
      <div className={styles["jumbotron-content"]}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

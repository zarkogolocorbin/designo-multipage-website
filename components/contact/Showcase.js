import Form from "./Form";
import styles from "../../styles/contactShowcase.module.css";

export default function ShowcaseContact() {
  return (
    <section className={styles["contact-showcase"]}>
      <div className={styles["contact-content"]}>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <Form />
    </section>
  );
}

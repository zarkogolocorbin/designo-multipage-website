import Image from "next/image";
import styles from "../styles/projects.module.css";

export default function Projects({ projects }) {
  return (
    <section className={styles.projects}>
      {projects.map((project, index) => {
        return (
          <article key={index}>
            <div>
              <Image
                src={project.imgUrl}
                width={"350px"}
                height={"320px"}
                alt={project.title}
                placeholder="blur"
                blurDataURL="/assets/pin-location.svg"
              />
            </div>
            <div>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

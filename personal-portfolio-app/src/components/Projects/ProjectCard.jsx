import React from "react";
import styles from "./ProjectCard.module.css";


const ProjectCard = ({
  project: { title, description, skills, source, image },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={new URL(`../../assets/projects/${image}`, import.meta.url).href}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

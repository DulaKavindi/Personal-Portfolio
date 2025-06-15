import React from "react";
import styles from "./ProjectCard.module.css";
import projectImg from "../../assets/projects/project.png";

const ProjectCard = ({
  project: { title, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={projectImg}
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

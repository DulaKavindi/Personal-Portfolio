import React from 'react';
import styles from './About.module.css';

import aboutImg from '../../assets/about/about.png';
import cursorIcon from '../../assets/about/cursorIcon.png';
import serverIcon from '../../assets/about/serverIcon.png';
import uiIcon from '../../assets/about/uiIcon.png';

import js from '../../assets/skills/js.png';
import css from '../../assets/skills/css.png';
import figma from '../../assets/skills/figma.png';
import html from '../../assets/skills/html.png';
import linux from '../../assets/skills/linux.png';
import illustrator from '../../assets/skills/illustrator.png';
import photoshop from '../../assets/skills/photoshop.png';
import python from '../../assets/skills/python.png';
import react from '../../assets/skills/react.png';

const skills = [
  { title: 'JavaScript', img: js },
  { title: 'CSS', img: css },
  { title: 'Figma', img: figma },
  { title: 'HTML', img: html },
  { title: 'Linux', img: linux },
  { title: 'Illustrator', img: illustrator },
  { title: 'Photoshop', img: photoshop },
  { title: 'Python', img: python },
  { title: 'React', img: react },
];

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        <img className={styles.aboutImage} src={aboutImg} alt="About illustration" />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive and interactive user interfaces using modern web technologies.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I also work on backend services, designing APIs and managing data with clean and scalable architectures.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI/UX icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Enthusiast</h3>
              <p>
                Passionate about crafting user-friendly designs and ensuring the best possible experience for end-users.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.skillsSection} id="skills">
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img
                  className={styles.skillsImg}
                  src={skill.img}
                  alt={skill.title}
                />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

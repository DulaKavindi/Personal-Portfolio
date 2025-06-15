import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let's connect and build something amazing together!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:dularikavindi6@gmail.com">dularikavindi6@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/dulari-kavindi-008280317/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="GitHub icon" />
          <a href="https://github.com/DulaKavindi" target="_blank" rel="noopener noreferrer">
            GitHub Portfolio
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

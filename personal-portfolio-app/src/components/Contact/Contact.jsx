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
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:dularikavindi6@gmail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/dulari-kavindi-008280317/">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/DulaKavindi">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

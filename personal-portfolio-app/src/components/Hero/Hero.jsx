import React from 'react'
import styles from "./Hero.module.css";
import Me from "../../assets/hero/Me.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi... I'm Dulari Kavindi</h1>
        <p className={styles.description}>I'm an enthusiastic and dedicated IT student at the Institute of University of Moratuwa, passionate about web development. I enjoy building clean, responsive applications and continuously expanding my skills to become a full-stack developer.</p>
    
      </div>

        <img className={styles.heroImg} src={Me} alt="Hero image of me"/>
     
     <div className={styles.topBlur}/>
     <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero

import React from 'react';
import styles from './HeroSection.module.css';
import cover from '../images/HeroSectionBackground.jpg';

export default function HeroSection() {
  return (
    <section className={styles.HeroSection}>
      <img
        src={cover}
        className={styles.cover}
      ></img>
    </section>
  );
}

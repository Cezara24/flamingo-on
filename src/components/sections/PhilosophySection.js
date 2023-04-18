import React from "react";
import styles from "./PhilosophySection.module.css";
import SectionTitle from "../SectionTitle";
import Note from "../Note";
import noteLogo from "../../images/noteLogo.png";

export default function PhilosophySection() {
  return (
    <section className={styles.PhilosophySection}>
      <SectionTitle text="経営理念"></SectionTitle>
      <h2 className={styles.subtitle}>We love you all</h2>
      <div className={styles.notesContainer}>
        <Note
          text=""
          link="一言では伝えきれませんので、是非こちらをご一読ください"
          href="https://flamingo-on.com/?page_id=2623"
          imgSrc=""
          alt=""
        />
        <Note
          text="代表note "
          link="https://note.com/hiroshi_flamingo"
          href="https://note.com/hiroshi_flamingo/"
          imgSrc={noteLogo}
          alt="note.com logo"
        />
      </div>
    </section>
  );
}

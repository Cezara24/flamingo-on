import React from "react";
import styles from "./MembersSection.module.css";
import SectionTitle from "../SectionTitle";
import Note from "../Note";

export default function MembersSection() {
  return (
    <section className={styles.MembersSection}>
      <div className={styles.titleContainer}>
        <SectionTitle text="メンバー" />
        <h2 className={styles.subtitle}>
          Experience/Strength/Academic background
        </h2>
      </div>

      <div className={styles.notesContainer}>
        <div className={styles.notes}>
          <Note
            link="メンバー紹介 パスワード付き"
            href="https://flamingo-on.com/?p=2680"
            secondText="(パスワードは pineapplepizza)"
          />
        </div>
      </div>
    </section>
  );
}

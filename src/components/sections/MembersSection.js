import React from "react";
import { useSelector } from "react-redux";
import styles from "./MembersSection.module.css";
import { vhWithoutHeader } from "../../helpers/helpers";
import SectionTitle from "../SectionTitle";
import Note from "../Note";

export default function MembersSection() {
  const headerHeight = useSelector((state) => state.header.height);
  const MembersSectionHeight = vhWithoutHeader(headerHeight);

  return (
    <section
      className={styles.MembersSection}
      style={
        !isNaN(MembersSectionHeight) ? { height: MembersSectionHeight } : null
      }
    >
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

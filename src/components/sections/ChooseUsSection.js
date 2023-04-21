import React from "react";
import styles from "./ChooseUsSection.module.css";
import SectionTitle from "../SectionTitle";
import Grid__Z from "../../components/zLayout/Grid__Z";
import { chooseUsData } from "../../helpers/generalData";

export default function ChooseUsSection() {
  const data = chooseUsData();

  return (
    <section className={styles.ChooseUsSection}>
      <SectionTitle text="選ばれる理由" />

      <div className={styles.zGridContainer}>
        <Grid__Z data={data} category="chooseUs" />
      </div>
    </section>
  );
}

import React from "react";
import styles from "./FieldSection.module.css";
import SectionTitle from "../SectionTitle";
import CardsGrid from "../Cards/CardsGrid";
import { fieldCards } from "../../helpers/generalData";

export default function FieldSection() {
  const cards = fieldCards();

  return (
    <section className={styles.FieldSection}>
      <SectionTitle text="専門分野"/>
      <div className={styles.cardsGridContainer}>
        <CardsGrid cards={cards} category="field" col="3" />
      </div>
    </section>
  );
}

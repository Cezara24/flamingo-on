import React from "react";
import { useSelector } from "react-redux";
import styles from "./FieldSection.module.css";
import SectionTitle from "../SectionTitle";
import CardsGrid from "../Cards/CardsGrid";
import { vhWithoutHeader } from "../../helpers/helpers";
import { fieldCards } from "../../helpers/cardsData";

export default function FieldSection() {
  const headerHeight = useSelector((state) => state.header.height);
  const fieldSectionheight = vhWithoutHeader(headerHeight);

  const cards = fieldCards();

  return (
    <section
      className={styles.FieldSection}
      style={!isNaN(fieldSectionheight) ? { height: fieldSectionheight } : null}
    >
      <SectionTitle text="専門分野" />
      <div className={styles.cardsGridContainer}>
        <CardsGrid cards={cards} category="field" col="3" />
      </div>
    </section>
  );
}

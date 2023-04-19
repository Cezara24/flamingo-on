import React from "react";
import { useSelector } from "react-redux";
import styles from "./ServicesSection.module.css";
import SectionTitle from "../SectionTitle";
import CardsGrid from "../Cards/CardsGrid";
import { vhWithoutHeader } from "../../helpers/helpers";
import { languageModulesCards } from "../../helpers/cardsData";

export default function ServicesSection() {
  const headerHeight = useSelector((state) => state.header.height);
  const servicesSectionheight = vhWithoutHeader(headerHeight);

  const cards = languageModulesCards();
  return (
    <section
      className={styles.ServicesSection}
      style={
        !isNaN(servicesSectionheight) ? { height: servicesSectionheight } : null
      }
    >
      <SectionTitle text="サービス"></SectionTitle>
      <div className={styles.cardsGridContainer}>
        <CardsGrid cards={cards} category="language" />
      </div>
    </section>
  );
}

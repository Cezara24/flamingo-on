import React from "react";
import styles from "./ServicesSection.module.css";
import SectionTitle from "../SectionTitle";
import CardsGrid from "../Cards/CardsGrid";
import { servicesCards } from "../../helpers/generalData";

export default function ServicesSection() {
  const cards = servicesCards();

  return (
    <section className={styles.ServicesSection}>
      <SectionTitle text="サービス" />
      <div className={styles.cardsGridContainer}>
        <CardsGrid cards={cards} category="services" col="2" />
      </div>
    </section>
  );
}

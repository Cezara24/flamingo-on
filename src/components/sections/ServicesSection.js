import React from "react";
import { useSelector } from "react-redux";
import styles from "./ServicesSection.module.css";
import { vhWithoutHeader } from "../../helpers/helpers";
import SectionTitle from "../SectionTitle";
import CardsGrid from "../Cards/CardsGrid";
import { servicesCards } from "../../helpers/cardsData";

export default function ServicesSection() {
  const headerHeight = useSelector((state) => state.header.height);
  const servicesSectionHeight = vhWithoutHeader(headerHeight);

  const cards = servicesCards();
  return (
    <section
      className={styles.ServicesSection}
      style={
        !isNaN(servicesSectionHeight) ? { height: servicesSectionHeight } : null
      }
    >
      <SectionTitle text="サービス" />
      <div className={styles.cardsGridContainer}>
        <CardsGrid cards={cards} category="services" col="2" />
      </div>
    </section>
  );
}

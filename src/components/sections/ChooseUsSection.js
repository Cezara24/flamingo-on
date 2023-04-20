import React from "react";
import { useSelector } from "react-redux";
import styles from "./ChooseUsSection.module.css";
import SectionTitle from "../SectionTitle";
import CardsGrid from "../Cards/CardsGrid";
import { vhWithoutHeader } from "../../helpers/helpers";
import { chooseUsCards } from "../../helpers/cardsData";

export default function ChooseUsSection() {
  const headerHeight = useSelector((state) => state.header.height);
  const chooseUsSectionheight = vhWithoutHeader(headerHeight);

  const cards = chooseUsCards();

  return (
    <section
      className={styles.ChooseUsSection}
      style={!isNaN(chooseUsSectionheight) ? { height: chooseUsSectionheight } : null}
    >
      <SectionTitle text="選ばれる理由" textColor="#2b161b"/>
      <div className={styles.cardsGridContainer}>
        <CardsGrid cards={cards} category="chooseUs" col="3" cardHeight="40rem" />
      </div>
    </section>
  );
}

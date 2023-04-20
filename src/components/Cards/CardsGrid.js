import React from "react";
import styles from "./CardsGrid.module.css";
import Card from "./Card";

export default function CardsGrid(props) {
  const cards = { ...props.cards };
  const category = props.category;
  const col = props.col;
  const cardHeight = props.cardHeight;
  const modules = [...Object.keys(cards)];
  const buttonText = "Read More →";

  return (
    <div
      className={`
        ${styles.CardsGrid}
        ${col === "2" && styles.col2}
        ${col === "3" && styles.col3}
      `}
    >
      {modules.map((item) => (
        <Card
          category={category}
          cardHeight={cardHeight}
          key={cards[item].id}
          imgSrc={cards[item].imgSrc}
          title={cards[item].title}
          details={cards[item].details}
          buttonText={buttonText}
          buttonType="full"
          buttonTransform="uppercase"
        />
      ))}
    </div>
  );
}

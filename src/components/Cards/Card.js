import React from "react";
import styles from "./Card.module.css";
import Button from "../Button";
import ScreenCardIcon from "./ScreenCardIcon";
import MentorCardIcon from "./MentorCardIcon";

export default function Card(props) {
  const category = props.category;
  const imgSrc = props.imgSrc;
  const title = props.title;
  const details = [...props.details];
  const buttonText = props.buttonText;
  const buttonType = props.buttonType;
  const buttonTransform = props.buttonTransform;

  return (
    <div className={styles.Card}>
      <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.img}>
            {imgSrc === "ScreenCardIcon" && <ScreenCardIcon />}
            {imgSrc === "MentorCardIcon" && <MentorCardIcon />}
          </div>
          <div className={styles.title}>{title}</div>
        </div>

        <div className={styles.detailsContainer}>
          <ul className={styles.details}>
            {details.map((item, index) => (
              <li key={`${category}_${title}_${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.Button}>
        <Button
          name={buttonText}
          text={buttonText}
          type={buttonType}
          position=""
          underlinedButton=""
          transform={buttonTransform}
          section=""
        />
      </div>
    </div>
  );
}

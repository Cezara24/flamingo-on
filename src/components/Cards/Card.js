import React from "react";
import styles from "./Card.module.css";
import Button from "../Button";
import ScreenCardIcon from "./ScreenCardIcon";
import MentorCardIcon from "./MentorCardIcon";
import Frame from "../Frame";
import fieldImg from "../../images/field.png"

export default function Card(props) {
  const category = props.category;
  const imgSrc = props.imgSrc;
  const title = props.title;
  const details = [...props.details];
  const buttonText = props.buttonText;
  const buttonType = props.buttonType;
  const buttonTransform = props.buttonTransform;
  const cardHeight = props.cardHeight ? props.cardHeight : "30rem";

  return (
    <div>
      {title === "img" && <Frame imgSrc={fieldImg}/>}
      
      {title !== "img" && 
        <div
          className={styles.Card}
          style={{ height: cardHeight}}
        >

          <div className={styles.cardContainer}>
            <div
              className={`${category !== "field" && styles.titleImgContainer}
            ${category === "field" && styles.titleImgContainer__fieldSection}`}
            >
              {imgSrc ? (
                <div className={styles.img}>
                  {imgSrc === "ScreenCardIcon" && <ScreenCardIcon />}
                  {imgSrc === "MentorCardIcon" && <MentorCardIcon />}
                </div>
              ) : null}

              <div
                className={`${category !== "field" && styles.title}
              ${category === "field" && styles.title__fieldSection}`}
              >
                {title}
              </div>
            </div>

            <div className={styles.detailsContainer}>
              <ul className={`
                ${category !== "chooseUs" && styles.details}
                ${category === "chooseUs" && styles.details__chooseUs}
              `}>
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
      }
    </div>
  );
}

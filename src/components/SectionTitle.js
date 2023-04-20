import React from "react";
import styles from "./SectionTitle.module.css";

export default function SectionTitle(props) {
  const text = props.text;
  const textColor = props.textColor ? props.textColor : "auto";

  return (
    <div className={styles.SectionTitle}>
      <h1
        className={styles.titleText}
        style={{color: textColor}}
      >{text}</h1>
    </div>
  );
}

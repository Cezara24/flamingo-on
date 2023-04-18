import React from "react";
import styles from "./SectionTitle.module.css";

export default function SectionTitle(props) {
  const text = props.text;
  return <h1 className={styles.SectionTitle}>{text}</h1>;
}

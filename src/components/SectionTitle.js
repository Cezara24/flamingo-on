import React from "react";
import { useSelector } from "react-redux";
import styles from "./SectionTitle.module.css";

export default function SectionTitle(props) {
  const text = props.text;
  const textColor = props.textColor ? props.textColor : "auto";
  const headerHeight = useSelector((state) => state.header.height);
  const height = !isNaN(headerHeight) ? headerHeight : null;
  console.log("height: ", height)

  return (
    <div
      className={styles.SectionTitle}
      style={{paddingTop: height}}
    >
      <h1
        className={styles.titleText}
        style={{color: textColor}}
      >{text}</h1>
    </div>
  );
}

      // style={
      //   !isNaN(headerHeight)
      //     ? { paddingTop: headerHeight }
      //     : null
      // }
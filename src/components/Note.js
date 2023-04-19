import React from "react";
import styles from "./Note.module.css";

export default function Note(props) {
  const text = props.text;
  const link = props.link;
  const href = props.href;
  const imgSrc = props.imgSrc;
  const alt = props.alt;
  const secondText = props.secondText;
  return (
    <div className={styles.Note}>


      {text ? <div className={styles.noteText}>{text}</div> : null}


      <a href={href} className={styles.link}>
        {link}
      </a>


      {secondText ? <p className={styles.secondText}>{secondText}</p> : null}


      {imgSrc ? (
        <div className={styles.imgContainer}>
          <img className={styles.noteImg} src={imgSrc} alt={alt}></img>
        </div>
      ) : null}

      
    </div>
  );
}

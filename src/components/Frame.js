import React from "react";
import styles from "./Frame.module.css"

export default function Frame(props) {
    const imgSrc = props.imgSrc;

    return (
        <div className={styles.Frame}>
            <div className={styles.imgContainer}>
                <img src={imgSrc} className={styles.img}></img>
            </div>
        </div>
    )
}
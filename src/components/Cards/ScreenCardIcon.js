import React from "react";
import styles from "./ScreenCardIcon.module.css";

export default function ScreenCardIcon() {
  return (
    <div className={styles.ScreenCardIcon}>
      <span className={`material-icons ${styles.screenIcon}`}>
        desktop_windows
      </span>

      <span className={`material-icons ${styles.gearIcon}`}>settings</span>
    </div>
  );
}

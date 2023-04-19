import React from "react";
import styles from "./MentorCardIcon.module.css";

export default function MentorCardIcon() {
  return (
    <div className={styles.MentorCardIcon}>
      <div className={styles.border}></div>

      <span className={`material-icons ${styles.campaignIcon}`}>campaign</span>

      <span className={`material-icons ${styles.soundIcon}`}>rss_feed</span>
    </div>
  );
}

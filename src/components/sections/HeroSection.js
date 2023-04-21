import { useRef, useState, React } from "react";
import styles from "./HeroSection.module.css";
import flamingo from "../../images/flamingo.png";
import flamingoPink from "../../images/flamingoPink.png";

export default function HeroSection() {
  const flamingoRef = useRef(null);
  const [previousHoverState, setPreviousHoverState] = useState("");

  function handleHover(isHovering, hoverState) {
    if (isHovering) {
      flamingoRef.current.src = flamingoPink;
      if (hoverState !== previousHoverState) {
        if (hoverState === "left") {
          flamingoRef.current.style.transform = "rotateY(180deg)";
        } else if (hoverState === "right") {
          flamingoRef.current.style.transform = "rotateY(0deg)";
        }
        setPreviousHoverState(hoverState);
      }
    } else {
      flamingoRef.current.src = flamingo;
    }
  }

  return (
    <section className={styles.HeroSection}>
      <div className={styles.title}>Flamingo company</div>
      <div className={styles.subtitle}>
        <div
          className={`${styles.textContainer} ${styles.dev}`}
          onMouseEnter={() => handleHover(true, "left")}
          onMouseLeave={() => handleHover(false)}
        >
          <h2 className={styles.subtitle__text}>develop</h2>
          <span className={`material-icons ${styles.subtitle__text}`}>
            lightbulb
          </span>
        </div>

        <img
          src={flamingo}
          className={`${styles.flamingo}`}
          ref={flamingoRef}
          style={{ transition: "transform 0.8s", transformStyle: "preserve-3d" }}
        ></img>

        <div
          className={`${styles.textContainer} ${styles.ment}`}
          onMouseEnter={() => handleHover(true, "right")}
          onMouseLeave={() => handleHover(false)}
        >
          <span className={`material-icons ${styles.subtitle__text}`}>
            favorite
          </span>
          <h2 className={styles.subtitle__text}>mentoring</h2>
        </div>
      </div>
    </section>
  );
}

// 
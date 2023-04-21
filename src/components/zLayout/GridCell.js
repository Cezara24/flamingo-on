import React from "react";
import styles from "./GridCell.module.css";
import arrow from "../../images/arrow.png";

export default function GridCell(props) {
  const category = props.category;
  const type = props.type;
  const title = props.title;
  const details = [...props.details];

  return (
    <div className={styles.GridCell}>
      {type === "title" && <div className={styles.title}>{title}</div>}
      {category === "chooseUs" && type === "arrow" && 
        <div className={styles.arrow}>
          <img src={arrow} className={`
            ${styles.arrowImg}
            ${title === "arrow2" && styles.flip}
          `} />  
        </div>
      }
      {type === "details" && (
        <div className={styles.detailsContainer}>
            {details.map(([...item], index) => (
              <div className={styles.details}>
                {
                  <ul className={styles.details__list}>
                    {item.map((listItem, listIndex) => (
                      <li key={`${category}_${title}_${index}_${listIndex}`}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                }
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

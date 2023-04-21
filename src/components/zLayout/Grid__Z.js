import React from "react";
import styles from "./Grid__Z.module.css";
import GridCell from "./GridCell";

export default function Grid__Z(props) {
  const data = { ...props.data };
  const category = props.category;
  const cellKeys = [...Object.keys(data)];

  return (
    <div className={styles.Grid__Z}>
      {cellKeys.map((item) => (
        <GridCell
          category={category}
          key={data[item].id}
          type={data[item].type}
          col={data[item].col}
          title={data[item].title}
          details={data[item].details}
        />
      ))}
    </div>
  );
}

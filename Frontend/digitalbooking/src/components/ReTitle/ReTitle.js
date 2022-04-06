import React from "react";
import styles from "./reTitle.module.css";

export const ReTitle = (props) => {
  const { type, title } = props;
  const { titles } = styles;

  return (
    <div className={titles}>
      <p>{type}</p>
      <h5>{title}</h5>
    </div>
  );
};

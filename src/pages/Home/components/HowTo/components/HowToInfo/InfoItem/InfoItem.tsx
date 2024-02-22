import React from "react";
import styles from "./styles.module.scss";

// Define a type for the component's props
type InfoItemProps = {
  title: string;
  text: string;
};

// Use the defined type for the function's props
function InfoItem({ title, text }: InfoItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

InfoItem.defaultProps = {
  title: "Title",
  text: "Text",
};

export default InfoItem;

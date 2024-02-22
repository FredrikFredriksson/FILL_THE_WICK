import React from "react";
import styles from "./styles.module.scss";

type HowToItemProps = {
  title: string;
  text: string;
  image: string;
};
function HowToItem({ title, text, image }: HowToItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerImage}>
        <img src={image} alt="Header" width={300} height={300} />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

HowToItem.defaultProps = {
  title: "Title",
  text: "Text",
  image: "/path/to/default/image.jpg",
};

export default HowToItem;

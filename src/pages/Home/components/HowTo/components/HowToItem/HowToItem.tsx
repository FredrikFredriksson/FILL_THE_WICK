import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

// Define a type for the component's props
type HowToItemProps = {
  title: string;
  text: string;
  image: string;
};

// Use the defined type for the function's props
function HowToItem({ title, text, image }: HowToItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.headerImage}>
        {/* Use Image component if you need more optimization later */}
        <img src={image} alt="Header Image" width={300} height={300} />
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

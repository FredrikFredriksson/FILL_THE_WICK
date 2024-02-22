import React from "react";
import styles from "./styles.module.scss";

type OurPartnersItemProps = { image: string; name: string; description: string};

function OurPartnersItem({ image, name, description }: OurPartnersItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image} alt="Partner" />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default OurPartnersItem;

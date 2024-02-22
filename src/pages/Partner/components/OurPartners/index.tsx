// Ensure your imports are correct
import React from "react";
import OurPartnersItem from "./OurPartnersItem";
import styles from "./styles.module.scss";

function OurPartners() {
  const question = `${process.env.PUBLIC_URL}/assets/questionlol.png`;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Our Partners</h1>
        <h3>
          We are proud to be partnered with the following projects and
          communities.
        </h3>
      </div>
      <div className={styles.partnerContainer}>
        <OurPartnersItem
          image={question}
          name="TBA"
          description=""
        />
        <OurPartnersItem
          image={question}
          name="TBA"
          description=""
        />
        <OurPartnersItem
          image={question}
          name="TBA"
          description=""
        />
      </div>
    </div>
  );
}

export default OurPartners;

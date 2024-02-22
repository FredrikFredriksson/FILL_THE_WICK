import React from "react";
import styles from "./styles.module.scss";

function PartnerButton() {
  return (
    <div className={styles.container}>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSed081xzKXomISMF5gZj4jpyQ1Xqmwn-GGPRb4RWFJ8djMIrg/viewform?usp=sf_link"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <div className={styles.button}>Become A Partner</div>
      </a>
    </div>
  );
}

export default PartnerButton;

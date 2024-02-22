import React from "react";
import Info from "../Info/Info";
import Tokenomics from "../Tokenomics/Tokenomics";
import styles from "./styles.module.scss";
import HowToInfo from "../HowTo/components/HowToInfo/HowToInfo";
import Socials from "../Socials/Socials";

function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.cards}>
        <HowToInfo />
      </div>
      <div className={styles.wrapper}>
        <Info />
        <Tokenomics />
      </div>
      <Socials />
    </div>
  );
}

export default About;

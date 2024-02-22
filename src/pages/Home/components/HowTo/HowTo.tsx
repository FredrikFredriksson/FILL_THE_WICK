import React from "react";
import HowToList from "./components/HowToList/HowToList";
import styles from "./styles.module.scss";
import Buy from "../BuyToken/Buy";

function HowTo() {
  return (
    <div className={styles.howTo} id="how-it-works">
      <h1>How it works</h1>
      <HowToList />
    </div>
  );
}

export default HowTo;

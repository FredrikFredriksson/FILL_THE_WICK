import React from "react";
import styles from "./styles.module.scss";
import PartnerButton from "../PartnerButton/PartnerButton";

function Header() {
  const ftwspeech = `${process.env.PUBLIC_URL}/assets/FTW-SPEECH.png`;
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Partner Directory</h1>
        <p>
          We are open to applications from emerging Solana-based tokens seeking
          to gain visibility within an active community and secure funding
          through purchased supply.
          <br />
          <br />
          Our mission is to support the growth of smaller tokens within the
          Solana ecosystem by acquiring supply and distributing it to our
          members. 
        </p>
        <PartnerButton />
      </div>

      <div className={styles.img}>
        {" "}
        <img src={ftwspeech} alt="FTW-SPEECH" height={600} width={700} />
      </div>
    </div>
  );
}

export default Header;

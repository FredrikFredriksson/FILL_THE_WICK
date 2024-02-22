import React from "react";
import HowToItem from "../HowToItem/HowToItem";
import styles from "./styles.module.scss";

function HowToList() {
  // Update the paths to use process.env.PUBLIC_URL for accessing assets in the public directory
  const GiveCoin = `${process.env.PUBLIC_URL}/assets/givemecoin.png`;
  const Hold = `${process.env.PUBLIC_URL}/assets/hold.png`;
  const Recieve = `${process.env.PUBLIC_URL}/assets/recieve.png`;

  return (
    <div className={styles.listContainer}>
      <HowToItem
        title="Buy FTW"
        text="Go to Raydium and Purchase FTW."
        image={GiveCoin}
      />
      <HowToItem
        title="Hold"
        text="Keep your FTW in your wallet, do not sell them."
        image={Hold}
      />
      <HowToItem
        title="Recieve"
        text="Congratulations, you held your FTW and you are now rewarded with several unique airdrops from up and coming projects."
        image={Recieve}
      />
    </div>
  );
}

export default HowToList;

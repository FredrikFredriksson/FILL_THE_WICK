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
        title="1. BUY FTW"
        text={
          <>
            Dive into the airdrop revolution by purchasing <span>$FTW</span> via{" "}
            <a
              href="https://jup.ag/swap/SOL-FTW_4KJaJJxZRdeX9L8sZbPfGMCGex9LgmXr2wtyncFiv58P"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jupiter
            </a>
            . <br />
            <br />
            Your journey with Fill The Wick begins here.
          </>
        }
        image={GiveCoin}
      />
      <HowToItem
        title="2. Hold"
        text={
          <>
            Secure <span>$FTW</span> in your wallet and stand by. Remember, to
            earn, you simply hold. No sales, just consistent rewards.
          </>
        }
        image={Hold}
      />
      <HowToItem
        title="3. Recieve"
        text={
          <>
            Holding $FTW qualifies you for a steady flow of airdrops from
            emerging Solana tokens.
            <br />
            <br />
            The more <span>$FTW</span> you hold, the greater your share of the
            airdrop spoils.
          </>
        }
        image={Recieve}
      />
    </div>
  );
}

export default HowToList;

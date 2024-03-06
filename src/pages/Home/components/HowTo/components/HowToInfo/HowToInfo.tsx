import React from "react";
import styles from "./styles.module.scss";
import InfoItem from "./InfoItem/InfoItem";

function HowToInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Our Story</h1>
      </div>
      <div className={styles.infoContainer}>
        <InfoItem
          title="Who We Are"
          text={
            <>
              Starting as a meme on Solana, Fill The Wick faced challenges from
              a Jeeting Dev. The community took control, turning our meme into
              action.
              <br />
              <br />
              Now, we're a community force in the Solana ecosystem, focused on
              growth and supporting projects with potential.
            </>
          }
        />
        <InfoItem
          title="Our Vision"
          text={
            <>
              Fill The Wick, more than a meme, captures our ethos. We transform
              market lows into chances for growth.
              <br />
              <br />
              Holding $FTW means easy access to airdrops from new partners,
              enhancing our ecosystem without extra steps.
            </>
          }
        />

        <InfoItem
          title="Making It Happen"
          text={
            <>
              We boost emerging meme coins and unique Solana projects. Through
              our Partner Dashboard, share your idea. If it fits, we back it,
              integrating your token for our holders.
              <br />
              <br />
              This expands your reach and strengthens our community, keeping FTW
              holders at innovation's edge.
            </>
          }
        />
      </div>
    </div>
  );
}

export default HowToInfo;

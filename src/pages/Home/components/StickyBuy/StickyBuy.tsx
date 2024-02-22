import React from "react";
import styles from "./styles.module.scss";

function StickyBuy() {
  return (
    <div className={styles.container}>
      <a
        href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4KJaJJxZRdeX9L8sZbPfGMCGex9LgmXr2wtyncFiv58P&fixed=in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.buyButton}></div>
      </a>
    </div>
  );
}

export default StickyBuy;

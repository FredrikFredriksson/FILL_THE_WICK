import React from "react";
import styles from "./styles.module.scss";

function Buy() {
  return (
    <div className={styles.container}>
      <a
        href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4KJaJJxZRdeX9L8sZbPfGMCGex9LgmXr2wtyncFiv58P&fixed=in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.buyButton}>BUY FTW</div>
      </a>
    </div>
  );
}

export default Buy;

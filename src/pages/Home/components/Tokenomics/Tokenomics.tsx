import React from "react";
import "./Tokenomics.css";

function Tokenomics() {
  return (
    <div className="tokenomicsContainer">
      <h1 className="tokenomics" id="tokenomics">
        TOKENOMICS
      </h1>
      <div className="tokenomicsItem">
        Name: FILL THE WICK <br />
        <br /> Ticker: $FTW <br />
        <br />
        Supply: 1.000.000.000
        <br /> Tax 0% <br />
        <br />
        <a
          href="https://solscan.io/tx/2yudvK1t6pcvfPqgUNrSScbUThTZuQNehUfy57nCeMXCcgHozprsmVAcv6Ju9v5VJGmHGq4heJJ1CwrE2iUCGouX"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Liquidity Burned Forever
        </a>{" "}
        <br />
        <a
          href="https://dexscreener.com/solana/ec3evv61znp6j2mml14nnbnzwvhvizhtg47phyhrvfav"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="contract"
        >
          4KJaJJxZRdeX9L8sZbPfGMCGex9LgmXr2wtyncFiv58P
        </a>
      </div>
    </div>
  );
}

export default Tokenomics;

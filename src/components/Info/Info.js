import React from "react";
import "./Info.css";

function Info() {
  const contractAddress = "4KJaJJxZRdeX9L8sZbPfGMCGex9LgmXr2wtyncFiv58P";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract address copied to clipboard!"); // Optional: alert the user
  };
  return (
    <div className="infoContainer">
      <div className="about" id="about">
        <div className="contract" onClick={copyToClipboard}>
          <span>Contract:</span>{" "}
          <span>4KJaJJxZRdeX9L8sZbPfGMCGex9LgmXr2wtyncFiv58P</span>
        </div>
        <h1>ABOUT</h1>
        <h3>
        <span className="FTW">$FTW</span> - created the 15th of January 2024 by unknown <span className="fuckTheDev">Dev</span>.
          <br />
          <span className="fuckTheDev">Dev</span> turned out to be a str8 jeeter with several wallets that sniped
          the token launch.
          <br />
          <span className="fuckTheDev">Dev</span> was skilled in shilling and creating hype, making everyone believe
          he was fr.
          <br /> <span className="fuckTheDev">Dev</span> dumped on every new hodler, turning the promising
          meme-narrative "<span className="FTW">FILL THE WICK</span>" into rubble. <br />
          <br /> Now here we stand today, community bearing, a project overtaken
          by us. With a healthy Pool of Liquidity locked, we will never falter.
          We are here to <span className="FTW">FILL_THE_WICK</span>. <br /> <br />
          <span>"Live to <span className="FTW">Fill the Wick</span>, or Exit as a Jeet."</span> - Leonardo
          DaVinci 2024
        </h3>
      </div>
    </div>
  );
}

export default Info;

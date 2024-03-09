import React from "react";
import "./Header.css";
import Buy from "../BuyToken/Buy";

function Header() {
  // Use the public URL path to your image
  const fillBg = `${process.env.PUBLIC_URL}/assets/fillbg.png`;

  return (
    <div className="containerHeader">
      <div className="header">
        <h1 className="headerTitle">
          FILL <br /> THE WICK
        </h1>
        <h3 className="headerSub">
          Wicks are printed solely for the purpose of becoming filled
        </h3>
        <p className="headerText">
          Discover Solana's first Token Airdrop Incubator. Hold, receive, and
          grow with a community focused on nurturing and distributing digital
          wealth through strategic partnerships.
        </p>
        <div className="headerBuy">
          <Buy />
        </div>
      </div>
      <div className="imageContainer">
        <img className="headerImage" alt="header" src={fillBg} />
      </div>
    </div>
  );
}

export default Header;

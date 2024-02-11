import React from "react";
import "./Header.css";
import fillBg from "../../assets/fillbg.png";
import Buy from "../BuyToken/Buy";

function Header() {
  return (
    <div
      className="containerHeader"
      style={{
        backgroundImage: `url(${fillBg})`,
        backgroundSize: "cover", // Ensures the background covers the div
        backgroundPosition: "center",
        // Keeps the background centered
      }}
    >
      <div className="header">
        <h1 className="headerTitle">
          FILL <br /> THE WICK
        </h1>
        <h3 className="headerSub">
          Wicks are printed solely for the purpose of becoming filled
        </h3>
        <p className="headerText">
          Join the sacred quest for celestial gains. Ignite your candles, pray
          for prosperity, and let the divine wick guide you to glory. 
        </p>
        <div className="headerBuy">
          <Buy />
        </div>
      </div>
    </div>
  );
}

export default Header;

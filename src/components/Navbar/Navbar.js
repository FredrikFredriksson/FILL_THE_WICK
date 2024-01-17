import React from "react";
import "./Navbar.css";
import Logo from "../../assets/FTW-LOGO.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarGroup">
        <div className="navbarItem">
          <a href="#tokenomics">TOKENOMICS</a>
        </div>
        <div className="navbarItem">
          <a
            href="https://dexscreener.com/solana/ec3evv61znp6j2mml14nnbnzwvhvizhtg47phyhrvfav"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHARTS
          </a>
        </div>
      </div>

      <div className="navbarItem logo">
        <a
          href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4KJaJJxZRdeX9L8sZbPfGMCGex9LgmXr2wtyncFiv58P&fixed=in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="image" src={Logo} alt="logo" />
        </a>
      </div>

      <div className="navbarGroup">
        <div className="navbarItem">
          <a href="#socials">SOCIALS</a>
        </div>
        <div className="navbarItem">
          <a href="#about">ABOUT</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

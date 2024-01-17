import React from "react";
import "./Socials.css";
import X from "../../assets/x.svg";
import TELEGRAM from "../../assets/telegram.svg";
function Socials() {
  return (
    <div className="socials" id="socials">
      <div>
        <a
          href="https://twitter.com/FTWFillTheWick"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="X" className="x" src={X} />
        </a>
      </div>
      <div>
        <a
          href="https://t.me/ftwcommunity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="telegram" className="telegram" src={TELEGRAM} />
        </a>
      </div>
    </div>
  );
}

export default Socials;

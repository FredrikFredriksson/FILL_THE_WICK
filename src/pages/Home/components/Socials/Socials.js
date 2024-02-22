import React from "react";
import "./Socials.css";

function Socials() {
  // Use the public URL path to your images
  const X = `${process.env.PUBLIC_URL}/assets/x.svg`;
  const TELEGRAM = `${process.env.PUBLIC_URL}/assets/telegram.svg`;

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

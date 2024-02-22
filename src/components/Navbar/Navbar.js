import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();

  const Logo = `${process.env.PUBLIC_URL}/assets/FTW-LOGO.png`;

  const handleNavLinkClick = (path, sectionId) => (event) => {
    event.preventDefault();
    navigate(path);
    setTimeout(() => scrollToSection(sectionId), 0);
  };
  return (
    <div className="navbar">
      <div className="navbarItem logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="logoText">
          <Link to="/">FTW</Link>
        </div>
      </div>
      <FiMenu
        className="burger"
        onClick={() => setIsNavVisible(!isNavVisible)}
      />
      <div className={`navbarGroup ${isNavVisible ? "visible" : ""}`}>
        <div className="navbarItem">
          <Link to="/partner">Partner</Link>
        </div>
        <div className="navbarItem">
          <a href="/" onClick={handleNavLinkClick("/", "how-it-works")}>
            How It Works
          </a>
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
        <div className="navbarItem">
          <a href="/" onClick={handleNavLinkClick("/", "about")}>
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

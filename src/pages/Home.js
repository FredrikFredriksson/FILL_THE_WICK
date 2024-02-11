import React from "react";
import "./Home.css";
import Buy from "../components/BuyToken/Buy";
import Info from "../components/Info/Info";
import Header from "../components/Header/Header";
import Tokenomics from "../components/Tokenomics/Tokenomics";
import Socials from "../components/Socials/Socials";

function Home() {
  return (
    <div className="main">
      <Header />
      <Info />
      <Tokenomics />
      <Buy />
      <Socials />
    </div>
  );
}

export default Home;

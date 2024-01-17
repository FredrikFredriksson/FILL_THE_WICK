import React from "react";
import "./Home.css";
import CEO from "../assets/FTW-CEO.png";
import Buy from "../components/BuyToken/Buy";
import Info from "../components/Info/Info";
import Header from "../components/Header/Header";
import PEPE from "../assets/FTW-PEPE.png";
import Tokenomics from "../components/Tokenomics/Tokenomics";
import SMILE from "../assets/FTW-SMILE.png";
import Socials from "../components/Socials/Socials";

function Home() {
  return (
    <div className="main">
      <Header />
      <img alt="pepe" className="pepe" src={PEPE} />
      <Buy />
      
      <Info />
      <Tokenomics />
      <Buy />
      <Socials />
      <img alt="ceo" className="ceoImage2" src={CEO} />
      <img alt="smile" className="ceoImage" src={SMILE} />
    </div>
  );
}

export default Home;

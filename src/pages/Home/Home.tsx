import React from "react";
import "./Home.css";
import Header from "./components/Header/Header";
import Socials from "./components/Socials/Socials.js";
import HowTo from "./components/HowTo/HowTo";
import About from "./components/About/About";
// Import HowTo component from its updated location


function Home() {
  return (
    <div className="main">
      <Header />
      <HowTo />
      <About />
      
    </div>
  );
}

export default Home;

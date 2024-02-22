import React from "react";
import "./Home.css";
import Header from "./components/Header/Header";
import HowTo from "./components/HowTo/HowTo";
import About from "./components/About/About";

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

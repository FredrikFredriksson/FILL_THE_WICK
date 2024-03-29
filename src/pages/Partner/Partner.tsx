import React from "react";
import Header from "./components/Header/Header";
import OurPartners from "./components/OurPartners";
import Socials from "../Home/components/Socials/Socials";

function Partner() {
  return (
    <div className="main">
      <Header />
      <OurPartners />
      <Socials />
    </div>
  );
}

export default Partner;

import React from "react";
import Hero from "../../Components/HeroSec/Hero";
import About from "../../Components/AboutSection/About";
import TechSec from "../../Components/TechSect/TechSec";
import Tech2 from "../../Components/TechSect/Tech2";
import OtherTechs from "../../Components/TechSect/otherTechs";
import Qualification from "../../Components/Qualification/Qualification";
import PortfolioGrid from "../../Components/portfolio/PortfolioGrid";

//---------------Imports------------

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Qualification />
      <PortfolioGrid />
      <TechSec />
      <Tech2 />
      <OtherTechs />
    </>
  );
};

export default HomePage;

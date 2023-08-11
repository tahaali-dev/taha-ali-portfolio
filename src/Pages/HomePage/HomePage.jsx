import React from "react";
import Hero from "../../Components/HeroSec/Hero";
import About from "../../Components/AboutSection/About";
import TechSec from "../../Components/TechSect/TechSec";
import Tech2 from "../../Components/TechSect/Tech2";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TechSec />
      <Tech2 />
      <About />
    </>
  );
};

export default HomePage;

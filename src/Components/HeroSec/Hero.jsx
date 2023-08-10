import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero-cont">
      <div className="Common-width">
        <div className="image">
          <img src=" /image.jpg" alt="" />
        </div>

        <div className="content-hero">
          <h4>End-to-End Developer</h4>
          <h2>
            Navigating Both Ends of the Web: Full Stack😎 Wonders{" "}
            <span>Unveiled</span>
          </h2>
          <p>
            I'm a full stack web developer charting new territories, crafting
            seamless user experiences, and engineering robust systems. Join me
            on this journey of innovation and witness the magic where code meets
            creativity at every layer of the stack.
          </p>
          <div className="hero-buttons">
            <button className="blackbutton">Get In Touch</button>
            <button className="white-button">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

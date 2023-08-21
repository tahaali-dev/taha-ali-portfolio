import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Hero-cont " id="top">
      <div className="Common-width width-85">
        <div className="image">
          <motion.div
            initial={{ x: "-3rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "ease-in",
            }}
          >
            <h2>WORK</h2>
            <h3>FOLIO</h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: "3rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "ease-in",
          }}
          className="content-hero"
        >
          <h4>End-to-End Developer</h4>
          <h2>
            Full-Stack Journey
            <span>Unveiled</span>
            Weaving Web Magic with Fresh Hands.😎
          </h2>
          <p>
            Hi, I'm , a web developer specializing in MERN technologies.
            I'm passionate about crafting dynamic web solutions that seamlessly
            integrate the power of these tools. Let's work together to turn
            ideas into interactive realities using the versatile MERN stack.
          </p>
          <div className="hero-buttons">
            <Link to="/contact-taha" className="blackbutton">
              Reach Out
            </Link>

            <a href="/testpdf.pdf" download className="white-button">
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

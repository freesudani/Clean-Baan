import React from "react";
import "./Home.css";
import HomeImage from "../../images/pexels-michelangelo-buonarroti-4176369.jpg";
import Button from "../Button";
import { motion } from "framer-motion";

const TextVariance = {
  hidde: {
    x: "-20vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeInOut" },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const ImageVariance = {
  hidde: {
    X: "20vw",
    opacity: 0,
  },
  visible: {
    X: 0,
    opacity: 1,
    transition: { ease: "easeInOut" },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="home-text"
        variants={TextVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="home-title">Clean Baan</h1>
        <p className="home-paragraph">
          Welcome to Clean Baan Cooperation where you provided with eco-friendly
          house cleaning services, Established in 2011 and headquartered in
          Bangkok thailand , our services extendn to various locations
          throughout Thailand and Asia, and Our staff receive a full month of
          paid training based on international standards. In other words, we not
          only know how to make our clients satisfied but are also fully
          qualified to deliver consistent, high-quality cleaning each visit.
        </p>
        <Button />
      </motion.div>
      <motion.div
        className="home-picture"
        className="home-text"
        variants={ImageVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={HomeImage} alt="Home" className="home-image" />
      </motion.div>
    </div>
  );
};

export default Home;

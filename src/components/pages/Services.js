import React, { useState } from "react";
import "./Services.css";
import { motion } from "framer-motion";
import SerImageFour from "../../images/pexels-paweł-l-1253800.jpg";
import SerImageTwo from "../../images/pexels-pixabay-260689.jpg";
import SerImageThree from "../../images/pexels-pixabay-261045.jpg";
import SerImageOne from "../../images/pexels-pixabay-276724.jpg";

const InfoOne =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed repellat illum minima amet? Nesciunt molestias consectetur eveniet voluptatem, placeat dolorem!";

const ServiceVariance = {
  hidden: {
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

const Services = () => {
  const [readMoreOne, setReadMoreOne] = useState(false);
  const [readMoreTwo, setReadMoreTwo] = useState(false);
  const [readMoreThree, setReadMoreThree] = useState(false);
  const [readMoreFour, setReadMoreFour] = useState(false);
  return (
    <div class="services">
      <motion.div
        className="services-box"
        variants={ServiceVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={SerImageOne} alt="housecleaning" className="services-photo" />
        <h1 className="services-title">Home Cleaning</h1>
        <p className="services-paragraph">
          {readMoreOne ? InfoOne : `${InfoOne.substring(0, 10)}`}{" "}
          <button
            onClick={() => setReadMoreOne(!readMoreOne)}
            type="button"
            className="services-button"
          >
            {readMoreOne ? "Show Less" : "...Read More"}
          </button>
        </p>
      </motion.div>
      <motion.div
        className="services-box"
        variants={ServiceVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={SerImageTwo} alt="housecleaning" className="services-photo" />
        <h1 className="services-title">Office Cleaning</h1>
        <p className="services-paragraph">
          {readMoreTwo ? InfoOne : `${InfoOne.substring(0, 10)}`}{" "}
          <button
            onClick={() => setReadMoreTwo(!readMoreTwo)}
            type="button"
            className="services-button"
          >
            {readMoreTwo ? "Show Less" : "...Read More"}
          </button>
        </p>
      </motion.div>
      <motion.div
        className="services-box"
        variants={ServiceVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img
          src={SerImageFour}
          alt="housecleaning"
          className="services-photo"
        />
        <h1 className="services-title">Carpet Cleaning</h1>
        <p className="services-paragraph">
          {readMoreThree ? InfoOne : `${InfoOne.substring(0, 10)}`}{" "}
          <button
            onClick={() => setReadMoreThree(!readMoreThree)}
            type="button"
            className="services-button"
          >
            {readMoreThree ? "Show Less" : "...Read More"}
          </button>
        </p>
      </motion.div>
      <motion.div
        className="services-box"
        variants={ServiceVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img
          src={SerImageThree}
          alt="housecleaning"
          className="services-photo"
        />
        <h1 className="services-title">Swimming Pool Cleaning</h1>
        <p className="services-paragraph">
          {readMoreFour ? InfoOne : `${InfoOne.substring(0, 10)}`}{" "}
          <button
            onClick={() => setReadMoreFour(!readMoreFour)}
            type="button"
            className="services-button"
          >
            {readMoreFour ? "Show Less" : "...Read More"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Services;

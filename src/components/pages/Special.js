import React, { useState } from "react";
import "./Special.css";
import { motion } from "framer-motion";
import SerImageFour from "../../images/pexels-cottonbro-4108715.jpg";
import SerImageTwo from "../../images/pexels-mart-production-7414910.jpg";
import SerImageThree from "../../images/pexels-matilda-wormwood-4099467.jpg";
import SerImageOne from "../../images/pexels-pixabay-159306.jpg";

const InfoTwo =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed repellat illum minima amet? Nesciunt molestias consectetur eveniet voluptatem, placeat dolorem!";

const SpecialVariance = {
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

const Special = () => {
  const [readMoreOne, setReadMoreOne] = useState(false);
  const [readMoreTwo, setReadMoreTwo] = useState(false);
  const [readMoreThree, setReadMoreThree] = useState(false);
  const [readMoreFour, setReadMoreFour] = useState(false);
  return (
    <div class="special">
      <motion.div
        className="special-box"
        variants={SpecialVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img
          src={SerImageThree}
          alt="housecleaning"
          className="special-photo"
        />
        <h1 className="special-title">Deep Cleaning</h1>
        <p className="special-paragraph">
          {readMoreOne ? InfoTwo : `${InfoTwo.substring(0, 10)}`}
          <button
            onClick={() => setReadMoreOne(!readMoreOne)}
            type="button"
            className="special-button"
          >
            {readMoreOne ? "Show Less" : "...Read More"}
          </button>
        </p>
      </motion.div>
      <motion.div
        className="special-box"
        variants={SpecialVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={SerImageFour} alt="housecleaning" className="special-photo" />
        <h1 className="special-title">Standard Cleaning</h1>
        <p className="special-paragraph">
          {readMoreTwo ? InfoTwo : `${InfoTwo.substring(0, 10)}`}
          <button
            onClick={() => setReadMoreTwo(!readMoreTwo)}
            type="button"
            className="special-button"
          >
            {readMoreTwo ? "Show Less" : "...Read More"}
          </button>
        </p>
      </motion.div>
      <motion.div
        className="special-box"
        variants={SpecialVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={SerImageTwo} alt="housecleaning" className="special-photo" />
        <h1 className="special-title">Move in/out Day</h1>
        <p className="special-paragraph">
          {readMoreThree ? InfoTwo : `${InfoTwo.substring(0, 10)}`}
          <button
            onClick={() => setReadMoreThree(!readMoreThree)}
            type="button"
            className="special-button"
          >
            {readMoreThree ? "Show Less" : "...Read More"}
          </button>
        </p>
      </motion.div>
      <motion.div
        className="special-box"
        variants={SpecialVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img src={SerImageOne} alt="housecleaning" className="special-photo" />
        <h1 className="special-title">Construction Day</h1>
        <p className="special-paragraph">
          {readMoreFour ? InfoTwo : `${InfoTwo.substring(0, 10)}`}
          <button
            onClick={() => setReadMoreFour(!readMoreFour)}
            type="button"
            className="special-button"
          >
            {readMoreFour ? "Show Less" : "...Read More"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Special;

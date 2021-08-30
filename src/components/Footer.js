import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, Keyframes } from "framer-motion";
import "./Footer.css";

const socialVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-columns">
        <h2>About Us</h2>
        <ul className="footer-column">
          <li>
            <a>Branches office</a>
          </li>
          <li>
            <a>Awards</a>
          </li>
          <li>
            <a>Reviews</a>
          </li>
          <li>
            <a>In The News</a>
          </li>
          <li>
            <a>Terms Of Use</a>
          </li>
        </ul>
      </div>
      <div className="footer-columns">
        <h2>Locations</h2>
        <ul className="footer-column">
          <li>
            <a>Bangkok</a>
          </li>
          <li>
            <a>Beijen</a>
          </li>
          <li>
            <a>Tokyo</a>
          </li>
          <li>
            <a>Seoul</a>
          </li>
          <li>
            <a>Moscow</a>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <motion.div
          className="social"
          variants={socialVariants}
          whileHover="hover"
        >
          <FaInstagram />
        </motion.div>
        <motion.div
          className="social"
          variants={socialVariants}
          whileHover="hover"
        >
          <FaFacebookF />
        </motion.div>
        <motion.div
          className="social"
          variants={socialVariants}
          whileHover="hover"
        >
          <FaTwitter />
        </motion.div>
        <motion.div
          className="social"
          variants={socialVariants}
          whileHover="hover"
        >
          <FaPhoneAlt />
        </motion.div>
      </div>

      <div className="copyright">
        <p>
          © 2021 Time Out Thailand Limited and affiliated companies owned by
          Clean-Baan Co. All rights reserved. Time Out is a registered trademark
          of Time Out Digital Limited.
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ setShowModal }) => {
  return (
    <Link to="book">
      <button className="btn" onClick={() => setShowModal(true)}>
        Book A Service
      </button>
    </Link>
  );
};

export default Button;

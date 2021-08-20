import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <Link to="book">
      <button className="btn">Book With Us</button>
    </Link>
  );
};

export default Button;

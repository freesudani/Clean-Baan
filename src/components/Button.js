import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  return (
    <Link to="book">
      <button className="btn">Book A Service</button>
    </Link>
  );
};

export default Button;

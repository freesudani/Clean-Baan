import React, { useState } from "react";
import { MenuItemsTwo } from "./MenuItemsTwo";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItemsTwo.map((item, index) => {
          return (
            <li ckey={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
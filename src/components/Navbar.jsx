import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "../component.css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3>Tech Accessories</h3>
        <h3>Outdoor Gear</h3>
        <h3>Athletic Apparel</h3>
      </div>
      <div className="navbar-logo">Timbu Cloud Shop</div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </nav>
  );
};

export default Navbar;

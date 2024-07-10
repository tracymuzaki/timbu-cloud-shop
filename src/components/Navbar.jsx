import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../component.css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Tech Accessories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Outdoor Gear
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Athletic Apparel
              </a>
            </li>
          </ul>
          <a className="navbar-brand mx-auto" href="/">
            <img
              src="/images/Logo.png"
              alt=""
              width={"90.95px"}
              height={"27.07px"}
            />
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/checkout">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

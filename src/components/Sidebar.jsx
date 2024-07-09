import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../component.css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h2>
          <FontAwesomeIcon icon={faFilter} className="filter-icon" />
          <span>Filter</span>
        </h2>
      </div>
      <div className="sidebar-section">
        <h3>Brand</h3>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <label>
            <input type="checkbox" className="checkbox-element" /> Apple
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Samsung
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> LG
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Infinix
          </label>
        </div>
      </div>
      <div className="sidebar-section">
        <h3>Product Type</h3>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <label>
            <input type="checkbox" /> Phone Cases
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Screen Protectors
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Wireless Chargers
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Portable Power Banks
          </label>
        </div>
      </div>
      <div className="sidebar-section">
        <h3>
          Price <span className="currency-symbol">₦</span>
        </h3>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <label>
            <input type="checkbox" /> 100 - 500
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 500 - 1000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 1000 - 5000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 5000 - 500,000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 500,000 - Above
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

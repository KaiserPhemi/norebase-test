// react libraries
import React from "react";

import { FiSearch } from "react-icons/fi";
// styles
import "./header.scss";

// main page header
const Header = () => {
  return (
    <header className="main-header">
      <div className="main-logo-section">
        <div className="img-container">
          <img src="assets/logo.png" alt="logo" className="img-wrapper" />
        </div>
        <div className="search-bar-container">
          <input className="search-bar" placeholder="Search...." />
          <div className="search-icon">
            <FiSearch />
          </div>
        </div>
      </div>
      <div className="cta-btns-section">
        <button className="btns login-btn">Login</button>
        <button className="btns signup-btn">Create Account</button>
      </div>
    </header>
  );
};

export default Header;

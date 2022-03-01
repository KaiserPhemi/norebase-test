// react libraries
import React from "react";

// third-party libraries
import { FiSearch } from "react-icons/fi";

// components
import MainBtn from "../common/button/MainBtn";

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
        <a href="https://dev.to/enter">
          <MainBtn btnClass="login-btn" btnText="Login" />
        </a>
        <a href="https://dev.to/enter?state=new-user">
          <MainBtn btnClass="signup-btn" btnText="Create Account" />
        </a>
      </div>
    </header>
  );
};

export default Header;

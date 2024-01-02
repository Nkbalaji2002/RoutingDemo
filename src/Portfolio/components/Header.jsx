import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <RouterLink className="navbar-brand" to="/">
          Portfolio
        </RouterLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <RouterLink className="nav-link" to="/">
                Home
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink className="nav-link" to="/about">
                About
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink className="nav-link" to="/portfolio">
                Portfolio
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink className="nav-link" to="/contact">
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

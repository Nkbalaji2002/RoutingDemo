import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="mb-3 bg-dark w-100 p-4 text-light">
        <NavLink className="me-3 list-group-item-action" to="/">
          Home
        </NavLink>
        <NavLink className="me-3 list-group-item-action" to="about">
          About
        </NavLink>
        <NavLink className="me-3 list-group-item-action" to="contact">
          Contact
        </NavLink>
        <NavLink className="me-3 list-group-item-action" to="products">
          Products
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav_page">
      <ul className="nav_links">
        <li className="nav_link">
          <NavLink to="/" className="nav_link_item">
            Homepage
          </NavLink>
        </li>
        <li className="nav_link">
          <NavLink to="/products" className="nav_link_item">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

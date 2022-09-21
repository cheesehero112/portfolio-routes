import * as React from "react";
import { NavLink } from "react-router-dom";
import "../styles/styles.scss";

function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <NavLink
        end
        to="/"
        className={({ isActive }) => {
          return isActive ? "is-active" : "link";
        }}
      >
        Home //
      </NavLink>

      <NavLink
        end
        to="/portfolio"
        className={({ isActive }) => {
          return isActive ? "is-active" : "link";
        }}
      >
        Portfolio //
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => {
          return isActive ? "is-active" : "link";
        }}
      >
        Contact //
      </NavLink>
    </header>
  );
}

export default Header;

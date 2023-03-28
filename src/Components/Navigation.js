import React from "react";
import { NavLink } from "react-router-dom";
import "./_navigation.scss"

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/planning"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Planning</li>
        </NavLink>
        <NavLink
          to="/location"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Adresses</li>
        </NavLink>
        <NavLink
          to="/quiz"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>À vous de jouer!</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to="/hebergement"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Hébergement</li>
        </NavLink>

      </ul>
    </div>
  );
};

export default Navigation;

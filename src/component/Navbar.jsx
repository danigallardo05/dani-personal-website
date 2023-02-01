import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navBar">
        <ul className="navBarList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Let's connect</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

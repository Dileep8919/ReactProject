import { useState } from "react";
import Myntra from "../../assets/Myntra.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-header">
      <img src={Myntra} className="MyntraIcon" />
      <ul className="navbar-links">
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beauty">Beauty</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

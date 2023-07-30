import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { logo } from "../data/data.json";
const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48">
    <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
  </svg>
);
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img id="logoImage" src={logo} alt="note" />
        </Link>
      </div>

      <Link className="navlinks" to="/miphones">
        MI Phones
      </Link>
      <Link className="navlinks" to="/redmiPhones">
        Redmi Phones
      </Link>
      <Link className="navlinks" to="/tv">
        TV
      </Link>
      <Link className="navlinks" to="/laptops">
        Laptops
      </Link>
      <Link className="navlinks" to="/fitness&LifeStyle">
        Fitness & LifeStyle
      </Link>
      <Link className="navlinks" to="/home">
        Home
      </Link>
      <Link className="navlinks" to="/radio">
        Radio
      </Link>
      <Link className="navlinks" to="/accesories">
        Accessories
      </Link>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        {searchIcon}
      </div>
    </div>
  );
};

export default Navbar;

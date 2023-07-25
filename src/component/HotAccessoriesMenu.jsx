import React from "react";
import { Link } from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      <Link className="HotAccessoriesLink" to="/music">
        Audio
      </Link>
      <Link className="HotAccessoriesLink" to="/smartDevice">
        Gear & Devices
      </Link>
      <Link className="HotAccessoriesLink" to="/home">
        Home
      </Link>
      <Link className="HotAccessoriesLink" to="/lifestyle">
        Lifestyle
      </Link>
      <Link className="HotAccessoriesLink" to="/mobileAccessories">
        PowerBank & Charging
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;

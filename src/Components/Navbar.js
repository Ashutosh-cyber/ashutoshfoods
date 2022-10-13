import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../Styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={logo} />
        </Link>

        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/About">About us</Link>
          <Link to="/Contact">Contact us</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/About">About us</Link>
        <Link to="/Contact">Contact us</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

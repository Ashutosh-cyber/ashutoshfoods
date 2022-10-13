import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.jpg";
import "../Styles/Home.css";

function home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> ASHUTOSH FOODS </h1>
        <p> DRY FRUITS ,SPICES AND GRAINS WHOLESALERS </p>
      </div>
    </div>
  );
}

export default home;

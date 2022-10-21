import React from "react";
import Carousel from "react-bootstrap/Carousel";
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

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BannerImage from "../assets/background.jpg";
import "../Styles/Home.css";

function home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> ASHUTOSH FOODS </h1>
        <p> DRY FRUITS ,SPICES AND GRAINS WHOLESALERS </p>
      </div>

      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/06/29/16/58/spices-2454799_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/4663476/pexels-photo-4663476.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/200/300"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default home;

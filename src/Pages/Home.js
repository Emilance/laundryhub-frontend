import React from "react";
import { Button } from "react-bootstrap";
import Banner from "../Components/Banner";
import HomeAbout from "../Components/HomeAbout";
import Team from "../Components/Team";
import Service from "../Components/Service";
import Stats from "../Components/Stats";
import "../Styles/Home.css";
import PricingScreen from "../Components/PricingScreen";
import Testimonial from "../Components/Testimonial";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/HeroSection";

function Home() {
  const history = useNavigate();
  return (
    <div className="home">
      <Hero />
      <HomeAbout />

      <div className="home__service">
        <h2>Services</h2>
        <h4>Our laundryHub offers the following services</h4>
        <div className="home__container">
          <div className="home__content">
            <Service
              image="../images/cloth.jpg"
              name="Cloth washing"
              description="Your clothes are our priority and are washed to our best quality"
              side="left"
           />
            <Service
              image="../images/carpet.jpg"
              name="Carpet washing"
              description="Your carpets are our priority and are washed to our best quality"
              side="left"

          />
            <Service
              image="../images/window.jpg"
              name="Window Cleaning"
              description="Your windows are our priority and are washed to our best quality"
              side="left"

          />
          </div>
          <img src="../images/ourserviceimg.png" alt="" />
          <div className="home__content">
            <Service
              image="../images/cloth.jpg"
              name="Cloth washing and Drying"
              description="Your clothes are our priority and are washed to our best quality"
              side="right"

           />
            <Service
              image="../images/image6.jpg"
              name="Cloth Ironing"
              description="Your clothes are our priority and are washed to our best quality"
              side="right"

            />
          </div>
        </div>
      
      </div>
      
      <Stats />
      <Team />
      <PricingScreen />
      <div className="home__testimonial">
        <h3>What our customers are saying</h3>
        <Testimonial />
      </div>
    </div>
  );
}

export default Home;

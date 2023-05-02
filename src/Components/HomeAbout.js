import React from "react";
import "../Styles/HomeAbout.css";
import { FaShoppingCart, FaPhone, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div className="home__about">
      <h2>How We Work</h2>
      <div className="home__about-container">
        <Link to="/service">       
        <div className="home__about-content">
          <FaShoppingCart size={50} color="#3b7fd8" />
          <h3>Choose Your Package</h3>
          <p>Select from our range of services to suit your needs</p>
        </div>
        </Link>
        <Link to="/contact">    
        <div className="home__about-content">
          <FaPhone size={50} color="#3b7fd8" />
          <h3>Contact Us</h3>
          <p>Get in touch with us by phone or through our app</p>
        </div>
          </Link>
        <Link to="/">    
        <div className="home__about-content">
          <FaSpinner size={50} color="#3b7fd8" />
          <h3>Sit Back and Relax</h3>
          <p>We'll collect your laundry and have it clean in no time</p>
        </div>
          </Link>
      </div>
    </div>
  );
}

export default HomeAbout;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Hero.css';

function Hero() {
  const navigate = useNavigate()
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>Welcome to the LaundryHub</h1>
        <h2>Let us take care of your chores, quickly and properly.</h2>
        <Link to="/service" className="hero__cta">Get Started</Link>
      </div>
    </div>
  );
}

export default Hero;
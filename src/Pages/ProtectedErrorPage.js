
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ProtectedErrorPage.css";

const ProtectedErrorPage = () => {
  return (
    <div className="error-page-container">
        
      <h1 className="fancy-text">Oops! This page is only for logged-in users.</h1>
      <p>Please log in or go back to the home page.</p>
      <div className="error-page-buttons">
        <Link to="/login">
          <button className="error-page-login-button">Log In</button>
        </Link>
        <Link to="/">
          <button className="error-page-home-button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ProtectedErrorPage;
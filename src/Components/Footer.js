import React from "react";
import "../Styles/Footer.css";
import Icons from "./Icons";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useNavigate } from "react-router-dom";

function Footer() {
  const history = useNavigate();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact">
              <p className="footer-contact-info">
                <ContactMailIcon className="footer-icon" />
                support@laundryhub.com
              </p>
              <p className="footer-contact-info">
                <ContactPhoneIcon className="footer-icon" /> +9775592190357
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3 className="footer-title">About Company</h3>
            <div className="footer-about">
              <p className="footer-about-info">
                We are proud to present you with this amazing company willing to
                do services for all people at a cheap level. Order with us and
                enjoy your free time.
              </p>
              <Icons />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3 className="footer-title">Useful Links</h3>
            <div className="footer-links">
              <p className="footer-link" onClick={() => history.push("/about")}>
                About
              </p>
              <p
                className="footer-link"
                onClick={() => history.push("/service")}
              >
                Services
              </p>
              <p
                className="footer-link"
                onClick={() => history.push("/order")}
              >
                Orders
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h3 className="footer-title">Follow Us</h3>
            <div className="footer-follow">
              <a href="/" className="footer-icon">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="/" className="footer-icon">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="/" className="footer-icon">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2023 - LaundryHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "../Styles/Footer.css";
import Icons from "./Icons";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useNavigate } from "react-router-dom";

function Footer() {
  const history = useNavigate();
  return (
    <div className="footer">
      <div className="footer__container">


        <div className="footer__contact">
          <h3>Our contacts</h3>

          <h5>
            We are located in Abu Dhabi,UAE. You can contact us on the following
            areas
          </h5>
          <p>
            <ContactMailIcon />
            support@laundryhub.com
          </p>
          <p>
            <ContactPhoneIcon /> +9775592190357
          </p>
        </div>
        <div className="footer__about">
          <h3>About Company</h3>
          <p>
            We are proud to present you with this amazing company willing to do
            services for all people at a cheap level.Order with us and enjoy
            your free time
          </p>
          <Icons />
        </div>
        <div className="footer__links">
          <h3>Useful links</h3>

          <p onClick={() => history.push("/about")}>About</p>
          <p onClick={() => history.push("/service")}>Services</p>

          <p onClick={() => history.push("/order")}>Orders</p>
        </div>
      </div>

      <p>©2023 - LaundryHub</p>
    </div>
  );
}

export default Footer;

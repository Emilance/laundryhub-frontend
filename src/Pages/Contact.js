import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Icons from "../Components/Icons";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h3 className="contact__title">Contact Us</h3>
      <h5 className="contact__subtitle">
        For more information or assistance, please contact us using the
        following platforms:
      </h5>
      <div className="contact__container">
        <div className="contact__content">
          <div className="content__item">
            <h4>
              <PinDropIcon fontSize="large" />
              Address
            </h4>
            <p>Abu Dhabi, UAE.</p>
          </div>
          <div className="content__item">
            <h4>
              <PhoneIcon fontSize="large" />
              Phone Number
            </h4>
            <p>+9775592190357</p>
          </div>
          <div className="content__item">
            <h4>
              <EmailIcon fontSize="large" />
              Email
            </h4>
            <p>You can email us at</p>
            <a
              href="mailto:support@laundryhub.com"
              className="content__link"
            >
              support@laundryhub.com
            </a>
          </div>
          <div className="content__item">
            <h4>Social Media</h4>
            <Icons />
          </div>
        </div>
        <div className="contact__form">
          <h3 className="form__title">Send a Message</h3>
          <form className="form__content">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form__input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form__input"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="form__input form__textarea"
              required
            ></textarea>
            <Button variant="outline-primary" className="form__button">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {};

export default Contact;

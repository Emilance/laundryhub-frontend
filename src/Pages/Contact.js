import React from "react";
import "../Styles/Contact.css";

import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


import { Button } from 'react-bootstrap';
import Icons from "../Components/Icons";

function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <h5>
        For more information or need assistance Contact us using the following
        platforms
      </h5>
      <div className="contact__container">
        <div className="contact__content">
          <div className="content__items">
            <h4>
              {" "}
              <PinDropIcon />
              Address
            </h4>
            <p>Abu Dhabi,UAE.</p>
            <small></small>
          </div>
          <div className="content__items">
            <h4>
              {" "}
              <PhoneIcon />
              Phone Number
            </h4>
            <p>+9775592190357</p>
          </div>
          <div className="content__items">
            <h4>
              {" "}
              <EmailIcon />
              Email
            </h4>
            <p>You can email Us </p>
            <small>support@laundryhub.com</small>
          </div>
          <div className="content__items">
            <h4>You can also contact Us on Social Media</h4>
            <Icons />
          </div>
        </div>

        <div className="contact__form">
          <h3>Send Message</h3>
          <form action="">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Email" />
            <input
              type="text"
              className="input__message"
              placeholder="Enter Message"
            />
            <Button color="secondary" variant="outlined">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

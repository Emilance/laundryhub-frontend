import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Service.style.css";

function Service() {
  const navigate = useNavigate();
  return (
    <div className="services">
      <h3>We offer the following services:</h3>
      <div className="service__container">
        <div className="services__content">
          <img src="../images/image.jpg" alt="" />
          <div className="services__items">
            <h3>Basic Laundry Service</h3>
            <p>
              This service includes washing, drying, and folding of clothes.
              Perfect for those who have a busy lifestyle and want to get their
              laundry done quickly.
            </p>
            <small>$12.00</small>
          </div>
        </div>
        <div className="services__content">
          <img src="../images/cloth.jpg" alt="" />
          <div className="services__items">
            <h3>Dry Cleaning</h3>
            <p>
              This service involves the cleaning of clothes without the use of
              water. Ideal for delicate fabrics or clothes that require special
              care.
            </p>
            <small>$15.00</small>
          </div>
        </div>
        <div className="services__content">
          <img src="../images/slider3.webp" alt="" />
          <div className="services__items">
            <h3>Ironing Service</h3>
            <p>
              This service includes pressing and ironing of clothes to give them
              a neat and polished look. Great for people who want their clothes
              to look sharp for work or special occasions.
            </p>
            <small>$13.00</small>
          </div>
        </div>
        <div className="services__content">
          <img src="../images/window.jpg" alt="" />
          <div className="services__items">
            <h3>Bedding and Linen Service</h3>
            <p>
              This service is perfect for people who want their bedding and
              linen cleaned regularly. It includes washing, drying, and folding
              of sheets, blankets, comforters, and towels.
            </p>
            <small>$11.00</small>
          </div>
        </div>
        <div className="services__content">
          <img src="../images/carpet.jpg" alt="" />
          <div className="services__items">
            <h3>Pickup and Delivery Service</h3>
            <p>
              This service includes the pickup and delivery of clothes from the
              user's location. Convenient for people who don't have the time or
              means to drop off their laundry at the service center.
            </p>
            <small>$18.00</small>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          navigate("/pricing");
        }}
        color="secondary"
        variant="outlined"
      >
        Go and Book Now
      </Button>
    </div>
  );
}

export default Service;

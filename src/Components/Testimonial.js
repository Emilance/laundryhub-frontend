import React from "react";
import "../Styles/Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Testimonial() {
  return (
    <Carousel
      className="testimonial__carousel"
      autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      interval={5000}
      showThumbs={false}
    >
      <div className="testimonial__item">
        <h3>Gayle Hyslop</h3>
        <h4>ghyslop19@about.com</h4>
        <p>
          LaundryHub has transformed the way I do laundry. It's so convenient to
          have my laundry picked up and delivered right to my doorstep. The
          prices are reasonable, and the quality of service is exceptional. I
          highly recommend LaundryHub to anyone looking to simplify their
          laundry routine.
        </p>
      </div>
      <div className="testimonial__item">
        <h3>Reggie Riepl</h3>
        <h4>rriepl2b@blog.com</h4>
        <p>
          I have been using LaundryHub for several months now, and I am
          extremely satisfied with the service. The team is always prompt and
          professional, and my clothes come back looking and smelling fresh. I
          especially appreciate the option to schedule recurring orders so I
          never have to worry about forgetting to do laundry.
        </p>
      </div>
      <div className="testimonial__item">
        <h3>Leodora Crowche</h3>
        <h4>lcrowche1q@diigo.com</h4>
        <p>
          LaundryHub is a game-changer for anyone with a busy schedule. The
          platform is easy to use, and the customer service is top-notch. I
          never have to worry about laundry again, thanks to LaundryHub!
        </p>
      </div>
    </Carousel>
  );
}

export default Testimonial;

import React, { useEffect, useState } from "react";
import "../Styles/Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getAllRatings } from "../data/endpoints";
import {FaStar}  from "react-icons/fa"

function Testimonial() {
  const [ratingsArray, setRatingsArray] = useState([])
  const fetchRating = async() => {
    try {
      const resp = await getAllRatings()
      setRatingsArray(resp.data)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=> {
       fetchRating()
  },[])

  
  return (
    <>
      {ratingsArray.length > 0 &&
      
      
      
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
          <h3>{ratingsArray[0].user.name}</h3>
          <h4>
          <div className="starRating">
                  {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={ratingValue}>
                 
                  <FaStar
                    className="star"
                    color={ratingValue <=  ratingsArray[0].rating ? "#ffc107" : "#e4e5e9"}
                    size={25}
                  />
                </label>
              );
            })}
                    </div>
          </h4>
          <p>
            {ratingsArray[0].feedback}
          </p>
          </div>
          <div className="testimonial__item">
          <h3>{ratingsArray[1].user.name}</h3>
          <h4>
          <div className="starRating">
                  {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={ratingValue}>
                 
                  <FaStar
                    className="star"
                    color={ratingValue <=  ratingsArray[1].rating ? "#ffc107" : "#e4e5e9"}
                    size={25}
                  />
                </label>
              );
            })}
                    </div>
          </h4>
          <p>
            {ratingsArray[1].feedback}
          </p>
          </div>
          <div className="testimonial__item">
          <h3>{ratingsArray[2].user.name}</h3>
          <h4>
          <div className="starRating">
                  {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={ratingValue}>
                 
                  <FaStar
                    className="star"
                    color={ratingValue <=  ratingsArray[2].rating ? "#ffc107" : "#e4e5e9"}
                    size={25}
                  />
                </label>
              );
            })}
                    </div>
          </h4>
          <p>
            {ratingsArray[2].feedback}
          </p>
          </div>
          
          
     
    </Carousel>
      }
    </>
   
  );
}

export default Testimonial;





export function TestimonialFallback() {
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


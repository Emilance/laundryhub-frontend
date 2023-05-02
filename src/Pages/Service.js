import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Service.style.css";



function Service() {

  const navigate = useNavigate();
  const serviceObj = useSelector(state => state.service.service)
  return (
    <div className="services">
      <h3>We offer the following services:</h3>
      <div className="service__container">
   {serviceObj.map((data, index) => {
     return(
    <Link key={index} to={`/service/${data.id}`} >

        <div  className="services__content">
          <img src={data.image} alt="" />
          <div className="services__items">
            <h3>{data.title}</h3>
            <p>
              {data.description}
            </p>
            <small>${data.price}</small>
          </div>
        </div>
    </Link>
     )
   })}
      


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

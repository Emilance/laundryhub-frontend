import React from "react";
import "../Styles/Service.css";
import Avatar from '@mui/material/Avatar';

function Service({ image, name, description, side }) {
  return (
    <div className={side =="right" ? "service rightService" : "service leftService"}>
      <Avatar className="service__avatar" src={image} alt="" />
      <div className="service__content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Service;

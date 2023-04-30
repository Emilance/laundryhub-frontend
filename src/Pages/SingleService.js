import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Scheduleservice from '../Components/BookingForm';
import Footer from '../Components/Footer';
import '../Styles/Singleservice.css';

const SingleService = () => {
    const {serviceId} = useParams()
    const service = useSelector(state => state.service.service.find(service => service.id == serviceId))    
    return (
      <div>
      <h3 className='headerTest'>Scroll down to schedule</h3>
    <div className="product-container">
      <div className="product-image">
        <img src={service.image} alt="fggff" />
      </div>
      <div className="product-details">
        <h2 className="product-name">{service.title}</h2>
        <p className="product-description">
         {service.description}
        </p>

      </div>
    </div>
        <Scheduleservice/>
        <Footer/>
      </div>
  );
};

export default SingleService;
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '../data/endpoints';
import '../Styles/Booking.css';

const Scheduleservice = () => {
  const navigate = useNavigate();
  const specservice = useSelector(state => state.service.service)    
  const [isLoading, setIsLoading] = useState(false);
  const [booking, setBooking] = useState({service : "",
  date:'', time : "", location: '' });
  

  // useEffect(() => {
  //   // create a new map instance
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8
  //   });
  // }, []);
  
  const {service, date , time, location } = booking

  const handleLocationChange = (event) => {
    setBooking({...booking, location: event.target.value})
  }

  const handleSubmit =async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true)
      const resp = await createBooking(booking)
      if(resp){
        navigate("/myschedules")

      }
    } catch (error) {
      setIsLoading(false)
       console.log(error)
    }


    
  };

  return (
    <div className="booking-schedule-container">
      <h2 className='formTitle'>Book a Service</h2>
      <form className='bookingForm'  onSubmit={handleSubmit}>
        <div className="booking-form-group">
          <label htmlFor="service">Select a Service:</label>
          <select id="service" name="service" value={service} onChange={(event) => setBooking({...booking, service: event.target.value})} required>
            <option value="">-- Select a Service --</option>
            {specservice.map((data, index) =>{
              return (
                <option key={index} value={data.title}>{data.title}</option>
              )
            })}
          </select>
        </div>
        <div className="booking-form-group">
          <label htmlFor="date">Select a Date:</label>
          <input id="date" type="date" name="date" value={date} onChange={(event) => setBooking({...booking, date: event.target.value})} required />
        </div>
        <div className="booking-form-group">
          <label htmlFor="time">Select a Time:</label>
          <input id="time" type="time" name="time" value={time} onChange={(event) => setBooking({...booking, time: event.target.value})} required />
        </div>
        {/* <div className="booking-form-group">
          <label htmlFor="location">Enter your location:</label>
          <input id="location" type="text" name="location" value={location} onChange={handleLocationChange} required />
        </div>
        <div className="booking-form-group">
          <label htmlFor="map">Select your location on the map:</label>
          <div id="map" style={{ height: '400px', width: '100%' }}></div>
        </div> */}
        <button  type="submit"> {isLoading ? <div className="spinner"></div> : "Book Now"}Book Now</button>
      </form>
    </div>
  );
};

export default Scheduleservice;

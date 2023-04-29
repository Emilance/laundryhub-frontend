import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '../data/endpoints';
import '../Styles//Booking.css';

const Scheduleservice = () => {
  const navigate = useNavigate();
  const specservice = useSelector(state => state.service.service)    
  const [booking, setBooking] = useState({service : "",
  date:'', time : "" });
  
  const {service, date , time } = booking
  const handleSubmit =async (event) => {
    event.preventDefault();
    try {
      
      const resp = await createBooking(booking)
      if(resp){
        navigate("/myschedules")

      }
    } catch (error) {
       console.log(error)
    }
    
  };

  return (
    <div className="schedule-container">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="date">Select a Date:</label>
          <input id="date" type="date" name="date" value={date} onChange={(event) => setBooking({...booking, date: event.target.value})} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Select a Time:</label>
          <input id="time" type="time" name="time" value={time} onChange={(event) => setBooking({...booking, time: event.target.value})} required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Scheduleservice;
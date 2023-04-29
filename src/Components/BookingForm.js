import React, { useState } from 'react';
import '../Styles//Booking.css';

const Scheduleservice = () => {
  const [booking, setBooking] = useState({service : "",
  date:'', time : "" });
  
  const {service, date , time } = booking
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(booking);
  };

  return (
    <div className="schedule-container">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="service">Select a Service:</label>
          <select id="service" name="service" value={service} onChange={(event) => setBooking({...booking, service: event.target.value})} required>
            <option value="">-- Select a Service --</option>
            <option value="Laundry">Laundry</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
            <option value="Ironing">Ironing</option>
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
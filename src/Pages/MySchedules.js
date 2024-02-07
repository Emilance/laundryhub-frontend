import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, getMyBooking } from '../data/endpoints';
import { setMyBooking } from '../features/bookingSlice';
import { AiFillDelete, AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import {RiMoneyDollarCircleLine} from "react-icons/ri"
import '../Styles/MySchedule.css';
import { setCurrentOrder } from '../features/currentOrderSlice';
import { useNavigate } from 'react-router-dom';

const MySchedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const bookings = useSelector((state) => state.booking.booking);

  const updateBooking = async () => {
    try {
      const resp = await getMyBooking();
      dispatch(setMyBooking(resp.data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (id) => {
    try {
      const resp = await deleteBooking(id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
 const payForService = (param) =>{
    dispatch(setCurrentOrder({
      service : param.service,
      id :param._id
    }))
    navigate("/payment")
 }

  useEffect(() => {
    updateBooking();
  }, []);

  const renderStatusIcon = (status) => {
    if (status === 'completed') {
      return <AiFillCheckCircle size="20" color="#4caf50" />;
    } else if (status === 'cancelled') {
      return <AiFillCloseCircle size="20" color="#f44336" />;
    } else {
      return <span>{status}</span>;
    }
  };

  return (
    <div className="schedule-container">
      <h2>Your Schedule</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings scheduled.</p>
      ) : (
        <>
        
          <span>Click the dollar Icon to pay</span>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
              <th>Status</th>
              <th> </th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="table-row">
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.service}</td>
                <td>{renderStatusIcon(booking.status)}</td>
                <td>
                  <AiFillDelete onClick={() => handleClick(booking._id)} size="17" className="tableIcon" />
                </td>
                <td>
                  <RiMoneyDollarCircleLine onClick={() => payForService(booking)} size="17" className="tableIcon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      )}
    </div>
  );
};

export default MySchedule;

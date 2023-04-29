import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, getMyBooking } from '../data/endpoints';
import { setMyBooking } from '../features/bookingSlice';
import {AiFillDelete} from 'react-icons/ai'
import '../Styles/MySchedule.css';



const MySchedule = () => {
    const dispatch = useDispatch()
    const bookings = useSelector(state => state.booking.booking)
    const updateBooking = async () =>{
        try {
            const resp = await getMyBooking()
            dispatch(setMyBooking(resp.data))
        } catch (error) {
            console.log(error)
        }
    }
    const handleClick  = async (id) =>{
        try {
          const resp = await deleteBooking(id)
          window.location.reload()
        } catch (error) {
          console.log(error)
        }
    }
    useEffect(()=> {
    updateBooking()
    }, [])
  return (
    <div className="schedule-container">
      <h2>Your Schedule</h2>
      {bookings.length === 0 ? (
        <p>You have no bookings scheduled.</p>
      ) : (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
              <th>Status</th>
              <th> </th>

            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.service}</td>
                <td>{booking.status}</td>
                <td>
                  <AiFillDelete onClick={()=> handleClick(booking._id)} size="17" className="tableIcon"/>
                 </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MySchedule;
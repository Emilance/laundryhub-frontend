import { useEffect, useState } from "react";
import {  deleteBooking, getAllBookings } from "../../data/endpoints";
import { AiFillDelete } from "react-icons/ai"

const BookingDashboard = () => {
    const [data, setData] = useState({})
    const  fetchOrder = async() =>{
        try {
            const resp = await getAllBookings()
             setData(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

     useEffect(() =>{
        fetchOrder()
     },[])
     const deleteHandler = async (id) => {
        try {
          const resp = await deleteBooking(id);
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      };

    return ( 
        <div className="table-container">
        <h2>All bookings</h2>
        <table>
        <thead>
          <tr>
              <th>S/N</th>
            <th>Date</th>
            <th>service</th>
            <th>time</th>
            <th>status</th>
            <th>user</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 && data.map((booking, index) => (
            <tr key={index}>
                <td>{index + 1} </td>
              <td>{booking.date}</td>
              <td>{booking.service}</td>
              <td>{booking.time}</td>
              <td>{booking.status}</td>
              <td>{booking.user && booking.user.name}</td>
              <td>
                  <AiFillDelete onClick={() => deleteHandler(booking._id)} size="17" className="tableIcon" />
            </td>
            </tr>
           ))} 
        </tbody>
      </table>
      </div>
     );
}
 
export default  BookingDashboard;
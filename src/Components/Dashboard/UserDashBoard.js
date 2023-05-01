import { useEffect, useState } from "react";
import {  deleteUser, getAllUsers } from "../../data/endpoints";
import {AiFillDelete } from "react-icons/ai"

const UserDashboard = () => {
    const [data, setData] = useState({})
    const  fetchOrder = async() =>{
        try {
            const resp = await getAllUsers()
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
          const resp = await deleteUser(id);
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      };
      
    return ( 
        <div className="table-container">
        <h2>All Users</h2>
        <table>
        <thead>
          <tr>
              <th>S/N</th>
            <th>name</th>
            <th>email</th>
            <th>Bookings</th>
            <th>Date</th>
            <th>Google login</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 && data.map((user, index) => (
            <tr key={index}>
                <th>{index +1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>bookings</td>
              <td></td>
              <td>{user.isGoogleLogin}</td>
              <td>
                  <AiFillDelete onClick={() => deleteHandler(user._id)} size="17" className="tableIcon" />
            </td>
            </tr>
           ))} 
        </tbody>
      </table>
      </div>
     );
}
 
export default UserDashboard;
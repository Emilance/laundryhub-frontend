import { useEffect, useState } from "react";
import { getAllOrders } from "../../data/endpoints";

const OrderDashboard = () => {
    const [data, setData] = useState({})
    const  fetchOrder = async() =>{
        try {
            const resp = await getAllOrders()
             setData(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

     useEffect(() =>{
        fetchOrder()
     },[])

    return ( 
        <div className="table-container">
        <h2>Recent Orders</h2>
        <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Customer Name</th>
            <th>Service Type</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0  && data.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.user.name}</td>
              <td>{order.service}</td>
              <td>{order.booking.date}</td>
              <td className={order.orderStatus == "active" ? "redColor" : "greenColor"}>{order.orderStatus}</td>
            </tr>
           ))} 
        </tbody>
      </table>
      </div>
     );
}
 
export default OrderDashboard;
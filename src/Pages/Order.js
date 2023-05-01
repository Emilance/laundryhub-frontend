import React, { useEffect, useState } from "react";
import { selectUser } from "../features/userSlice";
import { FaStar } from "react-icons/fa";

import "../Styles/Order.css";
import { getMyOrders } from "../data/endpoints";
import { useSelector } from "react-redux";
import RatingPopUp from "../Components/RatingPopUp";

function Order() {
  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedData, setClickedData] = useState({})
  const service = useSelector(state => state.service.service)    
  const fetchOrder = async() =>{
    const resp = await getMyOrders()
    setOrders(resp.data)
  }


  const toggleModal = (data)=>{
     setIsOpen(!isOpen)
     setClickedData(data)
  }
 
  useEffect(()=> {
    try {
      fetchOrder() 
     
    } catch (error) {
      console.log(error)
    }
  },[])

  // useEffect(() => {
  //   if (service.title && orders.length) {
  //     const updatedOrders = orders.map((order) => {
  //       const matchingService = service.find((s) => s.title === order.service);
  
  //       if (matchingService) {
  //         return { ...order, img: matchingService.image };
  //       }
  //      console.log(matchingService)
  //       return order;
  //     });
  
  //     setOrders(updatedOrders);
  //   }
  // }, [service, orders]);
  return (
    <div className="order">
        <div className="order__container">
          <h3>My Orders</h3>
          <RatingPopUp  
              isOpen= {isOpen}
              closeModal ={toggleModal}
              data = {clickedData}
          />
          <div className="order_card_container">

        {orders &&  orders.map((data, index) => {
          return (

            <div key={index} className="order__content" >
              <img src='/images/image2.jpg' alt="" />
              <div className="order__items">
                <h3>Service : <span>{data.service}</span> </h3>
                <p>Amount : <span>${data.amount}</span> </p>
                <p>Date : <span>233 ee</span> </p>
                <p>Status : <span className="greenColor">{data.orderStatus}</span> </p>
               {data.orderStatus =="active"  &&
               <button className="order_cta"   onClick={()=>toggleModal(data)}>Mark as completed</button>
               }
              {data.orderStatus =="completed"  && 
                  <div className="starRating">
                  {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <label key={ratingValue}>
                 
                  <FaStar
                    className="star"
                    color={ratingValue <= data.rating ? "#ffc107" : "#e4e5e9"}
                    size={25}
                  />
                </label>
              );
            })}
                    </div>
              }
              </div>
            </div>
    
           )
        })} 
          </div>
        </div>
    </div>
  );
}

export default Order;

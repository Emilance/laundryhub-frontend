import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makePayment } from '../data/endpoints';

import '../Styles/PaymentForm.css';

const PaymentForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name:"", addressLine1:"", city: "", postalCode :"",
    state: "", country : ""
  })

  const serviceTitle = useSelector(state => state.currentOrder.currentOrder)
  const service = useSelector(state => state.service.service.find(service => service.title == serviceTitle))    
  if(service) {
    var amount = service.price

  }else {
    amount = 0
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const resp = await makePayment({
        ...paymentDetails, amount , description : service.title,

      })
      console.log(resp)
    } catch (error) {
      setIsLoading(false)
        console.log(error)
    }
    
  };

  return (
    <div className='PaymentFormContainer'>
      {service &&
      
       <h2>You are paying for {service.title} - ${service.price}</h2>
      }
    <form className='PaymentForm' onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"
         value={paymentDetails.name}
         onChange={ e => setPaymentDetails({...paymentDetails, name :e.target.value})}
        required />
      </div>
      <div className="form-row">
        <label htmlFor="line1">Address Line 1</label>
        <input type="text" id="line1"
        value={paymentDetails.addressLine1}
        onChange={ e => setPaymentDetails({...paymentDetails, addressLine1 :e.target.value})}
        required />
      </div>
      <div className="form-row">
        <label htmlFor="city">City</label>
        <input type="text" id="city"
          value={paymentDetails.city}
          onChange={ e => setPaymentDetails({...paymentDetails, city :e.target.value})}
        required />
      </div>
      <div className="form-row">
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" 
            value={paymentDetails.postalCode}
            onChange={ e => setPaymentDetails({...paymentDetails, postalCode :e.target.value})}
        required />
      </div>
      <div className="form-row">
        <label htmlFor="state">State</label>
        <input type="text" id="state" 
            value={paymentDetails.state}
            onChange={ e => setPaymentDetails({...paymentDetails, state :e.target.value})}
        required />
      </div>
      <div className="form-row">
        <label htmlFor="country">Country</label>
        <input type="text" id="country"
          value={paymentDetails.country}
          onChange={ e => setPaymentDetails({...paymentDetails, country :e.target.value})}     
        required />
      </div>
      
      <div className="form-row">
        <button type="submit" disabled={isLoading}>
          {isLoading ? <div className="spinner"></div> : `Pay $${amount}`}
        </button>
      </div>
    </form>
    </div>
  );
};

export default PaymentForm;

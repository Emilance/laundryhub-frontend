import React from 'react';
import '../Styles/PaymentSuccess.css';

const PaymentSuccess = () => {
  const amount = ""
    return (
    <div className="payment-success-container">
      <h1>Payment Successful!</h1>
      <p>You have been charged ${amount}.</p>
      <p>Thank you for your purchase!</p>
      <img src="/images/success.png" alt="success icon" />
    </div>
  );
};

export default PaymentSuccess;
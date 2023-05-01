import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import Order from "./Pages/Order";
import Contact from "./Pages/Contact";
import "./App.css";
import Signup from "./Pages/Signup";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import Footer from "./Components/Footer";
import SingleService from "./Pages/SingleService";
import MySchedule from "./Pages/MySchedules";
import { getToken } from "./utils/auth";
import ProtectedErrorPage from "./Pages/ProtectedErrorPage";
import Header from "./Components/Header";
import PaymentForm from "./Pages/PaymentForm";
import PaymentSuccess from "./Pages/PaymentSuccess";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  const dispatch = useDispatch();
  const [isUserlogin, setUserLogin] = useState(false)
  useEffect(()=>{
    const usertoken = getToken()
    if(usertoken) {
      setUserLogin(true)
    }
  })
 
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Routes>
            <Route path="/" element={[<Home />, <Footer />]} />
            <Route path="/about" element={[<About />, <Footer />]} />
            <Route path="/service" element={[<Service />, <Footer />]} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={isUserlogin ? <Home/> :[<Login />, <Footer/>]} />
            <Route path="/signup" element={[<Signup />, <Footer/>]} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:serviceId" element={isUserlogin ?  <SingleService/> : <ProtectedErrorPage />} />
            <Route path="/payment" element={isUserlogin ?  [<PaymentForm/>, <Footer/>] : <ProtectedErrorPage />} />
            <Route path="/myschedules" element={isUserlogin ?  [<MySchedule />, <Footer/>] : <ProtectedErrorPage />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/admin" element={<AdminDashboard />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

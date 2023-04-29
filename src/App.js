import React, { useEffect } from "react";
import Header from "./Components/Header";
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
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import Footer from "./Components/Footer";
import SingleService from "./Pages/SingleService";
import MySchedule from "./Pages/MySchedules";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            email: authUser.email,
            name: authUser.displayName,
            uid: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:serviceId" element={<SingleService />} />
            <Route path="/myschedules" element={<MySchedule />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

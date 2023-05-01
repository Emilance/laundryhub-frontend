import React, { useState } from "react";
import "../Styles/AdminDashboard.css";


import Sidebar from "../Components/Dashboard/Sidebar";
import OrderDashboard from "../Components/Dashboard/OrderDashboard";
import UserDashboard from "../Components/Dashboard/UserDashBoard";
import BookingDashboard from "../Components/Dashboard/BookingDashboard";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState("orders");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

//   Render the appropriate component based on the current page
  const renderPage = () => {
    switch (currentPage) {
      case "orders":
        return <OrderDashboard />;
      case "users":
        return <UserDashboard />;
      case "bookings":
        return <BookingDashboard />;
      default:
        return <OrderDashboard />;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* <Header /> */}
      <div className="admin-dashboard__main">
        <Sidebar currentPage={currentPage} onPageChange={handlePageChange} />
        {renderPage()}
      </div>
    </div>
  );
};

export default AdminDashboard;

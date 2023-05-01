import React from 'react';
import {  FaUser, FaCog } from 'react-icons/fa';
import {AiOutlineSchedule}  from "react-icons/ai"
import {MdProductionQuantityLimits} from "react-icons/md"
import '../../Styles/AdminDashboard.css';

const Sidebar = ({currentPage, onPageChange}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>Laundry Admin</h1>
      </div>
      <ul className="sidebar-menu">
        <li className={currentPage == "orders" ? "sideBarActiveLink": ""}  onClick={() => onPageChange("orders")}>
          <a href="#">
            <MdProductionQuantityLimits className="sidebar-icon" />
            <span>Orders</span>
          </a>
        </li>
        <li className={currentPage == "users" ? "sideBarActiveLink": ""}   onClick={() => onPageChange("users")}>
          <a href="#">
            <FaUser className="sidebar-icon" />
            <span>Users</span>
          </a>
        </li>
        <li className={currentPage == "bookings" ? "sideBarActiveLink": ""}  onClick={() => onPageChange("bookings")} >
          <a href="#">
            <AiOutlineSchedule  className="sidebar-icon" />
            <span>Bookings</span>
          </a>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;

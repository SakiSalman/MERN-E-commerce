import React from "react";
import './AdminHeader.css'
const AdminHeader = () => {
  return (
    <div>
      <div className="admin-header-wrap shadow-sm">
        <div className="admin-h-logo">
          <img
            src="https://i.pinimg.com/474x/d9/d1/2a/d9d12aac0e13cac391f27654e7567ffd.jpg"
            alt=""
          />
        </div>
        <div className="admin-search">
          <div className="admin-search-wrapper">
            <input type="search" name="" id="" placeholder="Search" />
            <span><i class="bx bx-search"></i></span>
          </div>
        </div>
        <div className="admin-userinfo">
            <div className="admin-notify-wrap">
                <span><i class='bx bxs-bell' ></i></span>
            </div>
            <div className="admin-user">
                <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-13.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;

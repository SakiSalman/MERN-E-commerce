import React from "react";
import "./Admin.css";
import AdminHeader from "../../Components/Admin/AdminHeader";
import { Link, Outlet } from "react-router-dom";
import AdminModal from "../../Components/Admin/Modal/AdminModal";

const Panel = () => {
  return (
    <div>
      <AdminHeader></AdminHeader>

      <div className="admin-pannel-wrap">
        <div className="admin-nav-area">
          <div className="nav-item-wrapper">
            <ul>
              <li>
                <a href="#">
                  <i class="bx bxs-dashboard"></i>
                   <span>
                  Dashboard
                    </span> 
                </a>
              </li>
              <li>
                <Link to="product">
                  <i class="bx bx-shape-circle"></i> <span>
                  Products
                    </span> 
                </Link>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-shape-circle"></i> <span>
                  Orders
                    </span> 
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-shapes"></i> <span>
                  Products
                    </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-game"></i> <span>
                  Category
                    </span> 
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-game"></i> <span>
                  Tags
                    </span> 
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxs-game"></i> <span>
                  Users
                    </span> 
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="admin-content-area  py-4">
            <Outlet>
            </Outlet>
            {/* Modal admin */}

        </div>
        
      </div>
    </div>


  );
};

export default Panel;

import React from "react";
import { hideModal } from "../../../utility/HideModal";

const AdminModal = ({ children, title, setFunc }) => {


    // Modal close handler
    const handleModalClose = () => {
        hideModal(setFunc)
    }
  return (
    <>
      <div className="admin-modal-wrapper">
        <div className="modal-container w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="modal-inner-wrap w-50">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4>{title ? title : 'Add New Item'}</h4>
                <span  className="shadow-sm" onClick={handleModalClose}>X</span>
              </div>
              <div className="card-body">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminModal;

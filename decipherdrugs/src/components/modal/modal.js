import "./modal.css";
import React from "react";

const Modal = props => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="main-header">
          <h3>Broken Link? Need other books or notes? Report here!</h3>
          <button onClick={props.onclose}>
            <img src="./images/close.png" alt="close" />
          </button>
        </div>
        <p>Modal content goes here</p>
      </div>
    </div>
  );
};

export default Modal;

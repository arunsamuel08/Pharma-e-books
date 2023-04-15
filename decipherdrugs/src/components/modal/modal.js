import "./modal.css";
import React from "react";

const Modal = props => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="main-header">
          <h2>Report</h2>
          <button onClick={props.onclose}>
            <img src="./images/close.png" alt="close" />
          </button>
        </div>
        <div className="modal-content">
          <p>Broken Links? Other Feedbacks? Send them here!</p>
          <div className="right-cont">
            <form action="https://formspree.io/f/xwkjwzpj" method="POST">
              <input type="email" name="email" placeholder="Email ID" />
              <textarea name="message" placeholder="Comment"></textarea>
              <button className="button-50" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

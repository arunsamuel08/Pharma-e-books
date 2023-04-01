import "./modal.css";
import React from "react";

const Modal = props => {
  return (
    <div className="modal">
      <div className="modalCont">
        <div className="about">
          <h1>ABOUT ME?</h1>
          <p>
            Hey! I'm Arun and the ones using this app probably already know me.
            I'm an avid Web Developer and bit of a Data Analyst also. I made
            this web-app as a small hobby project and I hope it turns out to be
            useful for y'all!
          </p>

          <p>
            Feel free to contact me if you do have some projects on your mind!
          </p>
          <div className="links">
            <ul>
              <a href="https://arunsamuel08.vercel.app/">Profile</a>
              <a href="https://github.com/arunsamuel08">Github</a>
              <a href="https://www.linkedin.com/in/arunsamuel08/">LinkedIn</a>
              <a href="https://www.instagram.com/arun.samuel08/">Instagram</a>
            </ul>
          </div>
        </div>
        <div className="imagediv">
          <img src="./images/photoarun.png" alt="arunphoto"></img>
        </div>
      </div>
      <div className="closebtn">
        <button onClick={props.onclose}>
          <img src="./images/close.png" alt="closebtn" />
        </button>
      </div>
    </div>
  );
};

export default Modal;

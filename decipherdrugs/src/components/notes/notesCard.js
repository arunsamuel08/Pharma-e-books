import React from "react";
import "./notesCard.css";

const NotesCard = props => {
  return (
    <div className="notecard">
      {" "}
      <div className="notesname">
        <h3>{props.notename}</h3>
      </div>
      <div className="downloadlink2">
        <a href={props.link}>
          <img
            src="./images/download2.png"
            alt="download"
            className="notedownload"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default NotesCard;

import React from "react";
import "./book-card.css";

const BookCard = props => {
  return (
    <div className="main-card">
      <div className="bookName">
        <h3>{props.bookname}</h3>
        <p>
          <b>Subject: </b>
          {props.subject}
        </p>
      </div>
      <div className="downloadlink">
        <a href={props.link}>
          <img src="./images/download2.png" alt="download"></img>
        </a>
      </div>
    </div>
  );
};

export default BookCard;

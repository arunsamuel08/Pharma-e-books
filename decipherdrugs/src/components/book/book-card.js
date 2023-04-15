import { useState } from "react";
import "./book-card.css";

const BookCard = props => {
  const [showNotification, setShowNotification] = useState(false);

  function handleDownloadClick() {
    setShowNotification(true);
    // start the download process here
    // once the download is complete, hide the notification banner
    setTimeout(() => {
      setShowNotification(false);
    }, 5000); // hide the banner after 5 seconds
  }

  return (
    <div className="main-card">
      <div className="bookName">
        <h3>{props.bookname}</h3>
        <p>
          <b>Subject: </b>
          {props.subject}{" "}
          {showNotification && (
            <div className="notification-banner">
              Your download is starting...
            </div>
          )}
        </p>
      </div>
      <div className="downloadlink">
        <a
          href={props.link}
          setShowNotification={setShowNotification}
          onClick={handleDownloadClick}
        >
          <img src="./images/download2.png" alt="download"></img>
        </a>
      </div>
    </div>
  );
};

export default BookCard;

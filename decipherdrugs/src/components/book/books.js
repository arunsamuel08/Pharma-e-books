import "./books.css";
import React from "react";
import BookCard from "./book-card";
import Data from "../../csvjson.json";
import { useState } from "react";

const BookNav = () => {
  const [searchTerm, setsearchTerm] = useState("");
  let filteredData = Data;
  if (searchTerm) {
    filteredData = filteredData.filter(i =>
      i["Name of the Book"].toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else if (searchTerm === "") {
    filteredData = Data;
  }

  return (
    <div className="book-container">
      <div className="search-bar">
        <input
          className="input-box"
          type="text"
          placeholder="Search..."
          onChange={e => setsearchTerm(e.target.value)}
        ></input>
        <img src="./images/search.png" alt="search" />
      </div>
      <div id="books" className="books">
        {filteredData.map(item => (
          <BookCard
            bookname={item["Name of the Book"]}
            link={item["Link"]}
            subject={item["Subject"]}
            key={item["ID"]}
          />
        ))}
      </div>
    </div>
  );
};

export default BookNav;

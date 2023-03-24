import "./App.css";
import { useState } from "react";
import BookCard from "./components/book-card/book-card";
import Data from "./csvjson.json";

function App() {
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
    <div className="App">
      <div className="left-div">
        <img src="./images/books.jpg" alt="bgimage"></img>
        <div className="text-container">
          <div className="main-heading">Decipher Drugs</div>
          <div className="sub-heading">
            Need pharmacy books, notes? We gotchu!
          </div>
          <a href="/">
            <button class="bn54">
              <span class="bn54span">About Us</span>
            </button>
          </a>
        </div>
      </div>
      <div className="right-div">
        <nav>
          <div className="nav-group">
            <a href="#books">BOOKS</a>
            <a href="#books">NOTES</a>
          </div>
        </nav>
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
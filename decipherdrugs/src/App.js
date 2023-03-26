import "./App.css";
import { useState, useEffect } from "react";
import Notes from "./components/notes/notes";
import BookNav from "./components/book/books";

function App() {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setisMobile(window.innerWidth <= 800);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <button className="bn54">
              <span className="bn54span">About Us</span>
            </button>
          </a>
          {isMobile && <BookNav />}
        </div>
      </div>
      <div className="right-div">
        <nav>
          <div className="nav-group">
            <a href="#books">BOOKS</a>
            <a href="#books">NOTES</a>
          </div>
        </nav>
        <BookNav />
        {/* <Notes /> */}
      </div>
    </div>
  );
}

export default App;

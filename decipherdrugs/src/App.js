import "./App.css";
import { useState, useEffect } from "react";
import Notes from "./components/notes/notes";
import BookNav from "./components/book/books";
import Modal from "./components/modal/modal";

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

  const [activeNav, setactiveNav] = useState("books");

  const handleNavClick = nav => {
    setactiveNav(nav);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen); // toggle the state of the modal
  };

  return (
    <div className="App">
      {isModalOpen && <Modal onclose={handleModalToggle} />}
      <div className="left-div">
        <img src="./images/books.jpg" alt="bgimage"></img>
        <div className="text-container">
          <div className="main-heading">Decipher Drugs</div>
          <div className="sub-heading">
            Need pharmacy books, notes? We gotchu!
          </div>

          <button className="bn54" onClick={handleModalToggle}>
            <span className="bn54span">About Me</span>
          </button>

          {isMobile && <BookNav />}
        </div>
      </div>
      <div className="right-div">
        <nav>
          <div className="nav-group">
            <a
              href="#b"
              className={activeNav === "books" ? "active" : ""}
              onClick={() => handleNavClick("books")}
            >
              BOOKS
            </a>
            <a
              href="#n"
              className={activeNav === "notes" ? "active" : ""}
              onClick={() => handleNavClick("notes")}
            >
              NOTES
            </a>
          </div>
        </nav>
        {activeNav === "books" ? <BookNav /> : null}
        {activeNav === "notes" ? <Notes /> : null}
      </div>
    </div>
  );
}

export default App;

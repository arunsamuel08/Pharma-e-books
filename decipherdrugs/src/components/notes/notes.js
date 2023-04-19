import React from "react";
import "./notes.css";
import NotesCard from "./notesCard";

const Notes = () => {
  return (
    <div className="notesContainer">
      <NotesCard notename="Bpharm 1st Semester Notes" link="#" />
      <NotesCard notename="Bpharm 2nd Semester Notes" link="#" />
      <NotesCard notename="Bpharm 3rd Semester Notes" link="#" />
      <NotesCard notename="Bpharm 4th Semester Notes" link="#" />
      <NotesCard notename="Bpharm 5th Semester Notes" link="#" />
      <NotesCard notename="Bpharm 6th Semester Notes" link="#" />
      <NotesCard notename="Bpharm 7th Semester Notes" link="#" />
      <NotesCard notename="Bpharm 8th Semester Notes" link="#" />
    </div>
  );
};

export default Notes;

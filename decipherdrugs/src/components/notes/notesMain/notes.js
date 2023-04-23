import React, { useState } from "react";
import "./notes.css";
import NotesDegree from "../notesDegree/notesDegree";
import BpharmNotes from "../bpharmNotes/bpharmNotes";

const Notes = () => {
  const [showDegree, setshowDegree] = useState(true);

  const handleToggle1 = () => {
    setshowDegree(!showDegree);
  };

  return (
    <div className="notesContainer">
      {showDegree ? (
        <div className="degreeContainer">
          <NotesDegree
            degree="Bachelor of Pharmacy"
            info="Find semester-wise notes of B-Pharm"
            onClick={handleToggle1}
          />
          <NotesDegree
            degree="Diploma in Pharmacy"
            info="Find year wise notes of D-Pharm"
          />
        </div>
      ) : (
        <div className="semesterContainer">
          <BpharmNotes />
        </div>
      )}
    </div>
  );
};

export default Notes;

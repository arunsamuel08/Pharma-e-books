import NotesCard from "../notesCard/notesCard";
import NotesDegree from "../notesDegree/notesDegree";
import "./bpharmNotes.css";
import NotesData from "./notesjson.json";
import { useState } from "react";

const BpharmNotes = () => {
  const [openNotes, setopenNotes] = useState(true);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handletoggle2 = semester => {
    setSelectedSemester(semester);
    setopenNotes(false);
  };

  const filteredNotesData = NotesData.filter(
    item => selectedSemester === null || item.Semester === selectedSemester
  );

  console.log(filteredNotesData);
  return (
    <div className="bpharmcontainer">
      {openNotes ? (
        <div className="sem-container">
          <NotesDegree
            degree="Semester 1"
            info="Selected Notes of Semester 1"
            onClick={() => handletoggle2(1)}
          />
          <NotesDegree
            degree="Semester 2"
            info="Selected Notes of Semester 2"
            onClick={() => handletoggle2(2)}
          />
          <NotesDegree
            degree="Semester 3"
            info="Selected Notes of Semester 3"
            onClick={() => handletoggle2(3)}
          />
          <NotesDegree
            degree="Semester 4"
            info="Selected Notes of Semester 4"
            onClick={() => handletoggle2(4)}
          />
          <NotesDegree
            degree="Semester 5"
            info="Selected Notes of Semester 5"
            onClick={() => handletoggle2(5)}
          />
          <NotesDegree
            degree="Semester 6"
            info="Selected Notes of Semester 6"
            onClick={() => handletoggle2(6)}
          />
          <NotesDegree
            degree="Semester 7"
            info="Selected Notes of Semester 7"
            onClick={() => handletoggle2(7)}
          />
          <NotesDegree
            degree="Semester 8"
            info="Selected Notes of Semester 8"
            onClick={() => handletoggle2(8)}
          />
        </div>
      ) : (
        <div className="semspecific-cont">
          {filteredNotesData.map(item => (
            <NotesCard key={item.id} notename={item.Name} link={item.Link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BpharmNotes;

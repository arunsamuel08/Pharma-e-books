import NotesDegree from "../notesDegree/notesDegree";
import "./bpharmNotes.css";

const BpharmNotes = () => {
  return (
    <div className="bpharmcontainer">
      <NotesDegree degree="Semester 1" info="Selected Notes of Semester 1" />
      <NotesDegree degree="Semester 2" info="Selected Notes of Semester 2" />
      <NotesDegree degree="Semester 3" info="Selected Notes of Semester 3" />
      <NotesDegree degree="Semester 4" info="Selected Notes of Semester 4" />
      <NotesDegree degree="Semester 5" info="Selected Notes of Semester 5" />
      <NotesDegree degree="Semester 6" info="Selected Notes of Semester 6" />
      <NotesDegree degree="Semester 7" info="Selected Notes of Semester 7" />
      <NotesDegree degree="Semester 8" info="Selected Notes of Semester 8" />
    </div>
  );
};

export default BpharmNotes;

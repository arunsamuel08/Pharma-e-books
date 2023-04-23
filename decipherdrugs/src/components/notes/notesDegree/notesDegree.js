import "./notesDegree.css";

const NotesDegree = props => {
  return (
    <div className="degree-cont">
      <div className="degreeinfo">
        <h2>{props.degree}</h2>
        <p>{props.info}</p>
      </div>
      <div className="taketobutton">
        <button onClick={props.onClick}>
          <img src="./images/right-arrow.png" alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default NotesDegree;

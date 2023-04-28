import "./backButton.css";

const BackButton = props => {
  return (
    <button class="button-five" onClick={props.backclick}>
      <i class="fa-solid fa-backward"></i>
      BACK
    </button>
  );
};

export default BackButton;

import "./style.css";

const ResetButton = ({ onHandleClick }) => {
  return (
    <button className="reset-button" onClick={onHandleClick}>
      Refresh
    </button>
  );
};

export default ResetButton;

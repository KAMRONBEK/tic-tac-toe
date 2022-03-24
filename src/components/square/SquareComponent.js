import { useEffect } from "react";
import CircleComponent from "../circleMark";
import CrossComponent from "../crossMark";
import "./style.css";

const Square = ({ value, handleClick, highlight }) => {
  return (
    <button
      className={highlight ? "square active" : "square"}
      onClick={handleClick}
    >
      {value == "x" ? (
        <CrossComponent />
      ) : value == "o" ? (
        <CircleComponent />
      ) : undefined}
    </button>
  );
};

export default Square;

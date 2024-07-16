import Css from "./Options.module.css";

const Options = ({ setFeedback, resetFeedback, totalFeedback}) => {

  return (
    <div className={Css.buttonList}>
      <button onClick={() => {setFeedback("good")}}>Good</button>
      <button onClick={() => {setFeedback("neutral")}}>Neutral</button>
      <button onClick={() => {setFeedback("bad")}}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;


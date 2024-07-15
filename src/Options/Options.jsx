import Css from "./Options.module.css";

const Options = ({ setFeedback }) => {
  const updateFeedback = (feedbackType) => {
setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }
  return (
    <div className={Css.buttonList}>
      <button onClick={() => {updateFeedback("good")}}>Good</button>
      <button onClick={() => {updateFeedback("neutral")}}>Neutral</button>
      <button onClick={() => {updateFeedback("bad")}}>Bad</button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
};

export default Options;

const Feedback = ({ feedback: { good, neutral, bad }, totalFeedback, positive }) => {
  if (totalFeedback === 0) {
    return null;
  }
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positive}</p>
    </div>
  );
};

export default Feedback;

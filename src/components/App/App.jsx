import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
    localStorage.setItem("positive", positive);
  }, [feedback, positive]);

  return (
    <div>
      <Description />
      <Options setFeedback={setFeedback} />
      <Feedback
        feedback={feedback}
        totalFeedback={totalFeedback}
        positive={positive}
      />
      <Notification hasFeedback={totalFeedback > 0} />
    </div>
  );
}

export default App;

import { useState } from "react";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import style from "./style.module.css";

function FeedbackWidget  ()  {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  function handleFeedback  (type)  {
    setState({ ...state, [type]: state[type] + 1 });
  };

  const feedbackOptions = ["good", "neutral", "bad"];

  return (
    <div className={style.feedbackWidget}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {state.good || state.neutral || state.bad ? (
          <Statistics good={state.good} neutral={state.neutral} bad={state.bad} />
        ) : (
          <Notification message="No feedback given yet" />
        )}
      </Section>
    </div>
  );
};

export default FeedbackWidget;
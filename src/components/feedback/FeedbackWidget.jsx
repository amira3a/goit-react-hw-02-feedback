import { useState } from "react";
import style from "./style.module.css"; // import the CSS file

function Section  ({ title, children }) {
  return (
    <div className={style.feedbackWidget}>
      <h2 className={style.h2}>{title}</h2>
      {children}
    </div>
  );
};

function Statistics  ({ good, neutral, bad })  {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  function countPositiveFeedbackPercentage  ()  {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};

function FeedbackOptions ({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

function Notification  ({ message })  {
  return <p>{message}</p>;
};

function FeedbackWidget  ()  {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  function handleFeedback  (type)  {
    setState({ ...state, [type]: state[type] + 1 });
  };

  const feedbackOptions = ["good", "neutral", "bad"];

  return (
    <div className="feedback-widget">
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
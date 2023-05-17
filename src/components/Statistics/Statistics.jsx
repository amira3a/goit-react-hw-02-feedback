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

    export default Statistics;
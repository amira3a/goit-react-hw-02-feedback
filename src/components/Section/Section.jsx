import style from "../FeedbackWidget/style.module.css";

function Section({ title, children }) {
  return (
    <div className={style.feedbackWidget}>
      <h2 className={style.h2}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
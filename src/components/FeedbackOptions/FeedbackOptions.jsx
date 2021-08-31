import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.wrap}>
      {options.map((el) => (
        <button key={el} className={s.btn} name={el} onClick={onLeaveFeedback}>
          {el}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

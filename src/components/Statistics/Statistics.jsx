import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";
import s from "./Statistics.module.css";
import { BackgroundColor } from "jest-matcher-utils/node_modules/chalk";
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Statistics</h2>
      {total ? (
        <div className={s.stats}>
          <p className={s.label}>
            Good:
            <span>{good}</span>
          </p>
          <p className={s.label}>
            Neutral:
            <span>{neutral}</span>
          </p>
          <p className={s.label}>
            Bad:
            <span>{bad}</span>
          </p>
          <p className={s.label}>
            Total:
            <span>{total}</span>
          </p>
          <p className={s.label}>
            Positive feedback:
            <span>{positivePercentage}%</span>
          </p>
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;

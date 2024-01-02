// Questions.js
import React from "react";
import Question from "./Question";

const Questions = ({ quizData, currentQuestion, handleAnswerOptionClick }) => (
  <div className="questions">
    <Question
      questionData={quizData[currentQuestion]}
      handleAnswerOptionClick={handleAnswerOptionClick}
    />
  </div>
);

export default Questions;

// Question.js
import React from "react";

const Question = ({ questionData, handleAnswerOptionClick }) => {
  // Ensure questionData and its answers property are defined and an array
  if (
    !questionData ||
    !questionData.answers ||
    !Array.isArray(questionData.answers)
  ) {
    return <p>Options not found or in an incorrect format.</p>;
  }

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: questionData.question }} />
      <div className="options">
        {questionData.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(answer.isCorrect)}
          >
            {answer.answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

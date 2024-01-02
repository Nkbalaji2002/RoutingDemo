// QuestionContainer.js
import React, { useState } from "react";
import Questions from "./components/Questions";
import Result from "./components/Result";
const QuizApp = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="question-container">
      {showScore ? (
        <Result score={score} />
      ) : (
        <Questions
          quizData={questions}
          currentQuestion={currentQuestion}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

export default QuizApp;

// src/components/Question.jsx
import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  const handleClick = (option) => {
    setSelectedOptionId(option.id);
    onAnswer(option.is_correct);
  };

  return (
    <div className="question-card">
      <h3>{question.description}</h3>
      <div className="options-container">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleClick(option)}
            className={`option-button ${selectedOptionId === option.id ? 'selected' : ''}`}
          >
            {option.description}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;

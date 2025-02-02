import React from 'react'

const Results = ({ score, totalQuestions }) => {
  const maxScore = totalQuestions * 10 // Each correct answer gives 10 points
  const performance = score >= maxScore * 0.7 ? 'Excellent' : 'Good Effort'

  return (
    <div className="results-container">
      <h2>Quiz Completed!</h2>
      <p>
        Your Total Score: {score} / {maxScore}
      </p>
      <p>{performance}</p>
      <button onClick={() => window.location.reload()} className="restart-button">
        Restart Quiz
      </button>
    </div>
  )
}

export default Results

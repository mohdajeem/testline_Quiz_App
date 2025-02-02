import React, { useState } from 'react'
import Question from './Question'
import Results from './Results'

const Quiz = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  // Handle answer selection and update score
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 10) // Award 10 points per correct answer
    }
    const nextIndex = currentQuestionIndex + 1
    if (nextIndex < quizData.questions.length) {
      setCurrentQuestionIndex(nextIndex)
    } else {
      setQuizCompleted(true)
    }
  }

  return (
    <div className="quiz-container">
      <h2>{quizData.title}</h2>
      {!quizCompleted ? (
        <>
          <p>
            Question {currentQuestionIndex + 1} of {quizData.questions.length}
          </p>
          <Question
            question={quizData.questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <Results score={score} totalQuestions={quizData.questions.length} />
      )}
    </div>
  )
}

export default Quiz

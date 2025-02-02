import React, { useEffect, useState } from 'react'
import { fetchQuizData } from './services/quizService'
import Quiz from './components/Quiz'

const App = () => {
  const [quizData, setQuizData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch quiz data when the component mounts
  useEffect(() => {
    const getData = async () => {
      const data = await fetchQuizData()
      setQuizData(data)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <div className="app-container">
      <h1>Interview Round 1: Quiz Flow with Gamification</h1>
      {loading ? (
        <p>Loading quiz data...</p>
      ) : (
        <Quiz quizData={quizData} />
      )}
    </div>
  )
}

export default App

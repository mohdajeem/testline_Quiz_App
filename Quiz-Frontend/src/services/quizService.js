import tempQuizData from '../data/tempData'

const API_ENDPOINT = 'http://localhost:5000/api/quiz'

export const fetchQuizData = async () => {
  try {
    const response = await fetch(API_ENDPOINT)
    if (!response.ok) {
      throw new Error('API response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching quiz data:', error)
    // Fallback to temporary data if API fails
    return tempQuizData
  }
}

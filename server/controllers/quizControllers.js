// backend/controllers/quizController.js
const Quiz = require('../models/Quiz');

// GET /api/quiz
const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ id: 60 }); // example: find quiz by id
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getQuiz };

export const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const calculateScore = (questions, answers) => {
    return questions.reduce((acc, question) => {
        const userAnswer = answers.find(a => a.questionId === question.id);
        if (userAnswer?.isCorrect) {
        return acc + (question.points || 10);
        }
        return acc;
    }, 0);
};
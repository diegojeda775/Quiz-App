/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the flag dish of Peru?',
      answers: [
        'Papa a la Huancaina',
        'Lomo Saltado',
        'Ceviche',
        'Arroz Chaufa'
      ],
      correctAnswer: 'Ceviche'
    },
    {
      question: 'What is the year when Peru gained its independance?',
      answers: [
        '1970',
        '1821',
        '1776',
        '1918'
      ],
      correctAnswer: '1821'
    },
    {
      question: 'Which of the 7 wonders of the world is located in Peru?',
      answers: [
        'Christ the Redeemer',
        'Taj Mahal',
        'Machu Picchu',
        'Chichen Itza'
      ],
      correctAnswer: 'Machu Picchu'
    },
    {
      question: 'How many different kinds of potatoes can be found in Peru?',
      answers: [
        'under 100',
        'over 100',
        'over 1000',
        'over 3000'
      ],
      correctAnswer: 'over 3000'
    },
    {
      question: 'Which pet is considered food in Peru?',
      answers: [
        'Ginea Pigs',
        'Cats',
        'Dogs',
        'Horses'
      ],
      correctAnswer: 'Ginea Pigs'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


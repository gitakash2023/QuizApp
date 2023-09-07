const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultDisplay = document.getElementById("result");
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Which gas is responsible for the green color of leaves?",
    options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Chlorophyll"],
    answer: "Chlorophyll",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Go", "Gd", "Ag"],
    answer: "Au",
  },
  {
    question: "Which famous painting features a woman with a mysterious smile?",
    options: ["Starry Night", "Mona Lisa", "The Scream", "American Gothic"],
    answer: "Mona Lisa",
  },
  {
    question: "Which planet is known as the Morning Star or Evening Star?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: "Venus",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the national flower of Japan?",
    options: ["Rose", "Cherry Blossom", "Tulip", "Lily"],
    answer: "Cherry Blossom",
  },
];
let currentQuestion = 0;
let score = 0;

const loadQuestion = () => {
  const currentQuizData = quizData[currentQuestion];
  questionContainer.textContent = currentQuizData.question;
  optionsContainer.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.innerHTML = option;
    optionElement.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(optionElement);
  });
};

const checkAnswer = (selectedOption) => {
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

const showResult = () => {
  quizContainer.style.display = "none";
  resultDisplay.textContent = `Your score: ${score} out of ${quizData.length}`;
};

submitButton.addEventListener("click", loadQuestion);

loadQuestion();

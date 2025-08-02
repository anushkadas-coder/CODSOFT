const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: 1
  },
  {
    question: "HTML stands for?",
    options: ["Hyper Text Makeup Language", "Hyperlink Markup Language", "Hyper Text Markup Language", "Hyper Tool Mark Language"],
    answer: 2
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "jQuery", "CSS", "XML"],
    answer: 2
  }
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQ];
  document.getElementById("question").innerText = q.question;
  const btns = document.querySelectorAll(".option-btn");
  btns.forEach((btn, i) => {
    btn.innerText = q.options[i];
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQ].answer) {
    score++;
  }
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score}/${questions.length}</p>`;
  }
  document.getElementById("score").innerText = `Score: ${score}`;
}

loadQuestion();

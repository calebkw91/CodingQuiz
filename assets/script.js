let scoreSpan = document.querySelector("#score");
let timeSpan = document.querySelector("#time-remaining");
let quizQuestion = document.querySelector("#quiz-question");
let answerEl = document.querySelector("#quiz-answers");
let startBtn = document.querySelector("#start-quiz");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");

let quiz = 
[{
    question: "This is question 1?",
    answer1: "This is answer 1.",
    answer2: "This is answer 2.",
    answer3: "This is answer 3.",
    answer4: "This is answer 4.",
    correctAnswer: "2",
},
{
    question: "This is question 2?",
    answer1: "This is answer 1.",
    answer2: "This is answer 2.",
    answer3: "This is answer 3.",
    answer4: "This is answer 4.",
    correctAnswer: "3",
}]

function startQuiz()
{
    updateQuizQuestion(0);
}

function quizTimer()
{

}

function updateQuizQuestion(index)
{
    quizQuestion.textContent = "";
    answerEl.textContent = "";

    quizQuestion.textContent = quiz[index].question;

    btn1.textContent = quiz[index].answer1;
    btn2.textContent = quiz[index].answer2;
    btn3.textContent = quiz[index].answer3;
    btn4.textContent = quiz[index].answer4;

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");

    answerEl.appendChild(btn1);
    answerEl.appendChild(br1);
    answerEl.appendChild(btn2);
    answerEl.appendChild(br2);
    answerEl.appendChild(btn3);
    answerEl.appendChild(br3);
    answerEl.appendChild(btn4);
}

function checkAnswer1() 
{

}

function checkAnswer2() 
{

}

function checkAnswer3() 
{

}

function checkAnswer4() 
{

}

startBtn.addEventListener("click", startQuiz);
btn1.addEventListener("click", checkAnswer1);
btn1.addEventListener("click", checkAnswer2);
btn1.addEventListener("click", checkAnswer3);
btn1.addEventListener("click", checkAnswer4);
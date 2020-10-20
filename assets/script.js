let scoreSpan = document.querySelector("#score");
let timeSpan = document.querySelector("#time-remaining");
let quizQuestion = document.querySelector("#quiz-question");
let answerEl = document.querySelector("#quiz-answers");
let startBtn = document.querySelector("#start-quiz");
let endGameForm = document.querySelector("#end-game-form");
let formEl = document.querySelector("#formEl");

let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");

let submit = document.createElement("button");
submit.setAttribute("id", "submit");
submit.setAttribute("type", "submit");

let playerName = document.createElement("input");
playerName.setAttribute("type", "text");
playerName.setAttribute("placeholder", "Name");


let questionNum = 0;
let score = 0;
let totalQuestions = 0;
let quizTime;
let quizTimeRemaining = 0;
let highScoreIndex;

let highScores = 
[{
    score: 0,
    name: ""
},
{
    score: 0,
    name: ""
},
{
    score: 0,
    name: ""
},
{
    score: 0,
    name: ""
},
{
    score: 0,
    name: ""
}]

let quiz = 
[{
    question: "This is question 1?",
    answer1: "This is answer 1.",
    answer2: "This is answer 2.",
    answer3: "This is answer 3.",
    answer4: "This is answer 4.",
    correctAnswer: "2"
},
{
    question: "This is question 2?",
    answer1: "This is answer 1.",
    answer2: "This is answer 2.",
    answer3: "This is answer 3.",
    answer4: "This is answer 4.",
    correctAnswer: "3"
}]

function startQuiz()
{
    quizTimeRemaining = 60;
    quizTimer();
    updateQuizUI();

    timeSpan.textContent = "Time: " + quizTimeRemaining;
}

function quizTimer()
{
    quizTime = setInterval(function()
    {
        quizTimeRemaining--;

        if (quizTimeRemaining === 0)
        {
            checkGameEnd();
        }

        timeSpan.textContent = "Time: " + quizTimeRemaining;

    }, 1000);
}

function updateQuizUI()
{
    quizQuestion.textContent = "";
    answerEl.textContent = "";
    scoreSpan.textContent = "Score: " + score;

    quizQuestion.textContent = quiz[questionNum].question;

    btn1.textContent = quiz[questionNum].answer1;
    btn2.textContent = quiz[questionNum].answer2;
    btn3.textContent = quiz[questionNum].answer3;
    btn4.textContent = quiz[questionNum].answer4;

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
    if (quiz[questionNum].correctAnswer === "1")
    {
        correctAnswer();
    }
    else
    {
        incorrectAnswer();
    }
}

function checkAnswer2() 
{
    if (quiz[questionNum].correctAnswer === "2")
    {
        correctAnswer();
    }
    else
    {
        incorrectAnswer();
    }
}

function checkAnswer3() 
{
    if (quiz[questionNum].correctAnswer === "3")
    {
        correctAnswer();
    }
    else
    {
        incorrectAnswer();
    }
}

function checkAnswer4() 
{
    if (quiz[questionNum].correctAnswer === "4")
    {
        correctAnswer();
    }
    else
    {
        incorrectAnswer();
    }
}

function correctAnswer()
{
    score++;
    questionNum++;
    totalQuestions++;
    checkGameEnd();
}

function incorrectAnswer()
{
    questionNum++;
    quizTimeRemaining = quizTimeRemaining - 5;
    totalQuestions++;
    checkGameEnd();
}

function checkGameEnd()
{
    if (totalQuestions === quiz.length || quizTimeRemaining === 0)
    {
        clearInterval(quizTime);
        quizQuestion.textContent = "The quiz has ended.";
        answerEl.textContent = "Your total score is " + score + ".";
        scoreSpan.textContent = "Score: " + score;
        submit.textContent = "Submit";

        let br = document.createElement("br");

        highScoreIndex = displayHighScoreForm();

        console.log(highScoreIndex);

        if (highScoreIndex < 5)
        {
            endGameForm.appendChild(playerName);
            endGameForm.appendChild(br);
            endGameForm.appendChild(submit);
        }
    }
    else
    {
        updateQuizUI();
    }
}

function displayHighScoreForm() {

    let index = 5;

    if(localStorage.getItem("highScores") === null)
    {
        index = 0;
    }
    else
    {
        highScores = JSON.parse(localStorage.getItem("highScores"));

        for (let i=0; i<highScores.length; i++)
        {
            if (score > highScores[i].score)
            {
                index = i;
            }
        }
    }

    return index;
}

formEl.addEventListener("submit", function(event) 
{
    highScores[highScoreIndex].score = score;
    highScores[highScoreIndex].name = playerName.value;

    localStorage.setItem("highScores", JSON.stringify(highScores));
})

startBtn.addEventListener("click", startQuiz);
btn1.addEventListener("click", checkAnswer1);
btn2.addEventListener("click", checkAnswer2);
btn3.addEventListener("click", checkAnswer3);
btn4.addEventListener("click", checkAnswer4);
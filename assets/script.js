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
    name: "Player 1"
},
{
    score: 0,
    name: "Player 2"
},
{
    score: 0,
    name: "Player 3"
},
{
    score: 0,
    name: "Player 4"
},
{
    score: 0,
    name: "Player 5"
}]

let quiz = 
[{
    question: "Commonly used data types do not include:",
    answer1: "Strings",
    answer2: "Booleans",
    answer3: "Alerts",
    answer4: "Numbers",
    correctAnswer: "3"
},{
    question: "The condition in an if/else statement is enclosed within:",
    answer1: "Quotes",
    answer2: "Curly brackets",
    answer3: "Parantheses",
    answer4: "Square brackets",
    correctAnswer: "3"
},{
    question: "What is Michael Scotts greatest fear?",
    answer1: "Women",
    answer2: "Snakes",
    answer3: "Has no fears",
    answer4: "Both 2 and 3",
    correctAnswer: "4"
},{
    question: "Arrays in JavaScript can be used to store:",
    answer1: "Numbers and strings",
    answer2: "Other arrays",
    answer3: "Booleans",
    answer4: "All of the above",
    correctAnswer: "4"
},{
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answer1: "Commas",
    answer2: "Curly brackets",
    answer3: "Quotes",
    answer4: "Parantheses",
    correctAnswer: "3"
},{
    question: "What kind of bear is best?",
    answer1: "Grizzly bear",
    answer2: "Polar bear",
    answer3: "Black bear",
    answer4: "Brown bear",
    correctAnswer: "3"
},{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "Javascript",
    answer2: "Terminal/bash",
    answer3: "For loops",
    answer4: "console.log()",
    correctAnswer: "4"
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
    score = score + 5;
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
        score = score + quizTimeRemaining;
        clearInterval(quizTime);
        quizQuestion.textContent = "The quiz has ended.";
        answerEl.textContent = "Your total score is " + score + ".";
        scoreSpan.textContent = "Score: " + score;
        submit.textContent = "Submit";

        let br = document.createElement("br");

        highScoreIndex = displayHighScoreForm();

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
        index = 4;
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
    event.preventDefault();

    for (let i=0; i<=highScoreIndex; i++)
    {
        if (i < highScoreIndex)
        {
            highScores[i].score = highScores[i + 1].score;
            highScores[i].name = highScores[i + 1].name;
        }

        else if (i === highScoreIndex)
        {
            highScores[i].score = score;
            highScores[i].name = playerName.value;
        }

        console.log(JSON.stringify(highScores));
    }

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href = "high-scores.html";
})

startBtn.addEventListener("click", startQuiz);
btn1.addEventListener("click", checkAnswer1);
btn2.addEventListener("click", checkAnswer2);
btn3.addEventListener("click", checkAnswer3);
btn4.addEventListener("click", checkAnswer4);
let highScoreListEl = document.querySelector("#high-score-list");

let highScores;

checkForStoredScores();
updateHighScoresUI();

function checkForStoredScores()
{
    if(localStorage.getItem("highScores") === null)
    {
        highScores = 
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
    }
    else
    {
        highScores = JSON.parse(localStorage.getItem("highScores"));

    }
}

function updateHighScoresUI()
{
    highScoreListEl.childNodes[1].childNodes[1].textContent = highScores[4].name;
    highScoreListEl.childNodes[1].childNodes[3].textContent = highScores[4].score;

    highScoreListEl.childNodes[3].childNodes[1].textContent = highScores[3].name;
    highScoreListEl.childNodes[3].childNodes[3].textContent = highScores[3].score;

    highScoreListEl.childNodes[5].childNodes[1].textContent = highScores[2].name;
    highScoreListEl.childNodes[5].childNodes[3].textContent = highScores[2].score;

    highScoreListEl.childNodes[7].childNodes[1].textContent = highScores[1].name;
    highScoreListEl.childNodes[7].childNodes[3].textContent = highScores[1].score;

    highScoreListEl.childNodes[9].childNodes[1].textContent = highScores[0].name;
    highScoreListEl.childNodes[9].childNodes[3].textContent = highScores[0].score;
}
let usersScoreElement = document.getElementById('users-score');
let usersHighScore = localStorage.getItem('usersScore');
let highscoreDisplay = document.getElementById('highscore-display');
let storedHighscore = localStorage.getItem('userHighscore');
let highscoreArea = document.getElementById('highscore-area');
let saveScoreArea = document.getElementById('save-score-area');

/**
 * Sets highscore using localstorage
 */
function displayScore() { 
    if (usersHighScore) {
        usersScoreElement.innerHTML = usersHighScore;
    } else {
        usersScoreElement.innerHTML = 0;
    }  
}

/**
 * saves score to highscore list
 */
function saveUsersScore() {
    let userName = document.getElementById('username').value;
    if (userName && usersHighScore){
        let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

        let userData = {
            name: userName,
            score: usersHighScore
        };

        highScores.push(userData);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        displayHighScore();
        highscoreArea.classList.remove('hidden');
        saveScoreArea.classList.add('hidden');

    }else {
        alert('Please enter a username!');
    }
}

/**
 * displays highscore list
 */
function displayHighScore() {
    let storedHighScores = localStorage.getItem('highScores');
    if (storedHighScores) {
        let highScoresArray = JSON.parse(storedHighScores);
        highScoresArray.sort((a,b) => ( b.score - a.score ));
        highscoreDisplay.innerHTML = '';
        highscoreDisplay.innerHTML = highScoresArray
            .map(userData => `<p>Name: ${userData.name} - Score: ${userData.score}</p>`)
            .join('');
    } else {
        highscoreDisplay.innerHTML = 'No highscores saved yet.';
    }
}

displayScore();
displayHighScore();
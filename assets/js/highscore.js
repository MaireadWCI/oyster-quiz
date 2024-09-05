let usersScoreElement = document.getElementById('users-score');
let usersHighScore = localStorage.getItem('usersScore');
let highscoreDisplay = document.getElementById('highscore-display');
let storedHighscore = localStorage.getItem('userHighscore');

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
        let userData = {
            name: userName,
            score: usersHighScore
        };

        localStorage.setItem('userHighscore', JSON.stringify(userData));
    }else {
        alert('Please enter a username!');
    }
}

/**
 * displays highscore list
 */
function displayHighScore() {
    if (storedHighscore) {
        const highscoreData = JSON.parse(storedHighscore);
        highscoreDisplay.innerHTML = `Name: ${highscoreData.name}, Score: ${highscoreData.score}`;
    } else {
        highscoreDisplay.innerHTML = 'No highscore saved yet.';
    }
}

displayScore()
displayHighScore()







displayScore();
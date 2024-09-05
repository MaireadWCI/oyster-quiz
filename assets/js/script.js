let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');
let scores = document.getElementById("score");
let result = document.getElementById('result');
let rulesArea = document.getElementById('rules-area');
let quizArea = document.getElementById('quiz-area');
let resultArea = document.getElementById('result-area');
let correctAnswers = document.getElementById('correct-answer');
let correctAnswersArea = document.getElementById('correct-answers-area');
let questionCount = document.getElementById('counter');
let timer = document.getElementById('count');

let counter = 0;
let score = 0;
let interval;
let startTime;


/**
 * Starts quiz.    
 */
function startQuiz() {
    quizArea.classList.remove('hidden');
    rulesArea.classList.add('hidden');
    displayQuestion();
    startTimer();
    questionCounter();
}

/**
 * Displays question and answers.   
 */
function displayQuestion() {
    question.textContent = oysterQuestions[counter].question;
    answers.forEach(function (button, answer) {
        button.textContent = oysterQuestions[counter].answers[answer];
    });
    showScore();
    startTime = Date.now();
}

/**
 * Loads next question.
 */
function nextQuestion() {
    counter++;
    if (counter < oysterQuestions.length) {
        displayQuestion();
        clearInterval(interval);
        startTimer();
        questionCounter();
    } else {
        displayResult();
    }
}

/**
 * Shows score to the user.
 */
function showScore() {
    scores.innerHTML = score;
}  

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", incrementScore);
}
/**
 * Increments score if user chooses correct answer.
 * Checks how long user took to answer question
 * adds bonus points for quicker answer.    
 */
function incrementScore() {
    let chosenAnswer = this.innerText;
    let timeTaken = (Date.now() - startTime) / 1000;
    let baseScore = 10;
    let timeBonus = 15 - Math.round(timeTaken);
    if (oysterQuestions[counter].correctAnswer === chosenAnswer) {
        score += baseScore + timeBonus;
    }
    localStorage.setItem("usersScore", score);
    clearInterval(interval);
    nextQuestion();
}

/**
 * Restarts quiz once player has finished, sets user
 * score to zero and resets the counter. 
 */
function restartQuiz() {
    resultArea.classList.add('hidden');
    quizArea.classList.remove('hidden');
    correctAnswersArea.classList.add('hidden');
    score = 0;
    counter = 0;
    displayQuestion();
    startTimer();
    questionCounter();
}

/**
 * Displays result to user. 
 */
function displayResult() {
    resultArea.classList.remove('hidden');
    quizArea.classList.add('hidden');
    result.innerHTML = score;
    clearInterval(interval);
}

/**
 * Displays the questions with the correct answer 
 * to the user.  
 */
function displayCorrectAnswers() {
    resultArea.classList.add('hidden');
    correctAnswersArea.classList.remove('hidden');
    let correct = oysterQuestions.map((question) => {
        return `
            <p><strong>${question.count}:</strong> ${question.question}</p>
            <p class='correct-answer'>Correct Answer: ${question.correctAnswer}</p>
        `;
    }).join('')

    correctAnswers.innerHTML = correct;
}

/**
 * Sets a 15 second coundown timer for each question. 
 */
function startTimer () {
    clearInterval(interval);
    var count = 15;
    interval = setInterval(function(){
        timer.innerHTML=count;
        
        if (count <= 5) {
            timer.classList.add('red');
        }else{
            timer.classList.remove('red');
        }
        
        count--;

        if (count === 0){
            clearInterval(interval);
            nextQuestion();
        }
    }, 1000);
}

/**
 * Displays which question the user is on
 */
function questionCounter() {
    questionCount.innerHTML = oysterQuestions[counter].count;
}

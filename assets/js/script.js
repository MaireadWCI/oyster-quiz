let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');
let scores = document.getElementById("score");
let result = document.getElementById('result');
let rulesArea = document.getElementById('rules-area');
let quizArea = document.getElementById('quiz-area');
let resultArea = document.getElementById('result-area');
let correctAnswers = document.getElementById('correct-answer');
let correctAnswersArea = document.getElementById('correct-answers-area');

let counter = 0;
let score = 0;

/**
 * Starts quiz.    
 */
function startQuiz() {
    quizArea.classList.remove('hidden');
    rulesArea.classList.add('hidden');
    displayQuestion();
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
}

/**
 * Loads next question.
 */
function nextQuestion() {
    counter++;
    if (counter < oysterQuestions.length) {
        displayQuestion();
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
 */
function incrementScore() {
    let chosenAnswer = this.innerText;
    if (oysterQuestions[counter].correctAnswer === chosenAnswer) {
        score++;
    }
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
   
}

/**
 * Displays result to user. 
 */
function displayResult() {
    resultArea.classList.remove('hidden');
    quizArea.classList.add('hidden');
    result.innerHTML = score;
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



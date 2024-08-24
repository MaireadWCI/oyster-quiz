let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');
let scores = document.getElementById("score");


let counter = 0;
let score = 0;

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


displayQuestion();

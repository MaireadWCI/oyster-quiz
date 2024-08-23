let question = document.getElementById('question');
let answers = document.querySelectorAll('.answers');


let questionCounter = 0;

/**
 * Displays question and answers.   
 */
function displayQuestion() {
    question.textContent = oysterQuestions[questionCounter].question;
    answers.forEach(function (button, answer) {
        button.textContent = oysterQuestions[questionCounter].answers[answer];
    });
}

/**
 * Loads next question.
 */
function nextQuestion() {
    questionCounter++;
    if (questionCounter < oysterQuestions.length) {
        displayQuestion();
    }
}

displayQuestion();
nextQuestion();
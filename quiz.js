const quizzes = {
    python: [
        { question: "What is a correct syntax to output 'Hello World' in Python?", options: ["echo 'Hello World'", "print('Hello World')", "p('Hello World')", "printf('Hello World')"], answer: "print('Hello World')" },
        { question: "Which of the following is a mutable type?", options: ["str", "tuple", "list", "int"], answer: "list" },
    ],
    java: [
        { question: "Which data type is used to create a variable that should store text?", options: ["myString", "String", "Txt", "string"], answer: "String" },
        { question: "Which method can be used to find the length of a string in Java?", options: [".length()", ".getSize()", ".getLength()", ".size()"], answer: ".length()" },
    ],
    c: [
        { question: "Which of the following is a correct comment in C?", options: ["// this is a comment", "# this is a comment", "-- this is a comment", "/* this is a comment */"], answer: "/* this is a comment */" },
        { question: "What is the correct syntax for a main function in C?", options: ["int main()", "void main()", "main()", "int main(void)"], answer: "int main()" },
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(topic) {
    currentQuiz = quizzes[topic];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-box').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];
    document.getElementById('quiz-question').innerText = questionData.question;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const questionData = currentQuiz[currentQuestionIndex];
    if (selectedOption === questionData.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-question').innerText = `Quiz Complete! Your score: ${score}/${currentQuiz.length}`;
    document.getElementById('quiz-options').innerHTML = '';
    document.getElementById('next-question').style.display = 'none';
}

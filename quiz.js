const quiz = [
    {
        title: "Quiz Application Using Javascript",
        question: "Javascript is an ___ language.",
        option_a: "Object-oriented",
        option_b: "Objects-based",
        option_c: "Procedural",
        option_d: "None of the above",
        answer: "Object-Oriented"
    },
    {
        title: "Quiz Application Using Javascript",
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        option_a: "<script href='app.js'>",
        option_b: "<script name='app.js'>",
        option_c: "<script src='app.js'>",
        option_d: "<script file='app.js'>",
        answer: "<script src='app.js'>"
    },
    {
        title: "Quiz Application Using Javascript",
        question: "Which function of an Array object calls a function for each element in the array?",
        option_a: " forEach()",
        option_b: "every()",
        option_c: "forEvery()",
        option_d: "each()",
        answer: "forEach()"
    },
    {
        title: "Quiz Application Using Javascript",
        question: "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
        option_a: "if i = 5",
        option_b: "if i == 5 then",
        option_c: "if (i == 5)",
        option_d: "if i = 5 then",
        answer: "if (i == 5)"
    },
    {
        title: "Quiz Application Using Javascript",
        question: "How do you create a function in JavaScript?",
        option_a: "function = myFunction()",
        option_b: "function:myFunction()",
        option_c: "function myFunction()",
        option_d: "create myFunction()",
        answer: "function myFunction()"
    },
    {
        title: "Quiz Application Using Javascript",
        question: "What is the output of this code? console.log(typeof null); ",
        option_a: "'null'",
        option_b: "'object'",
        option_c: "'undefined'",
        option_d: "'number'",
        answer: "'object'"
    },
    {
        title: "Quiz Application Using Javascript",
        question: "Which method is used to add an element at the end of an array?",
        option_a: "array.push(element)",
        option_b: "array.pop(element)",
        option_c: "array.unshift(element)",
        option_d: "array.shift(element)",
        answer: "array.push(element)"
    },
    {
        titel: "Quiz Application Using Javascript",
        question: "How can a JavaScript variable be declared conditionally?",
        option_a: " var x if (condition)",
        option_b: "if (condition) var x",
        option_c: "var x = (condition) ? value1 : value2",
        option_d: "condition(var x)",
        answer: "var x = (condition) ? value1 : value2"
    },
    {
        titel: "Quiz Application Using Javascript",
        question: "What does the forEach method do in JavaScript?",
        option_a: " It loops through an array and returns a new array.",
        option_b: "It executes a function once for each array element.",
        option_c: " It checks each element in an array to see if it meets a condition.",
        option_d: "It applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
        answer: "It executes a function once for each array element."
    },
];

const questionTag = document.querySelector(".question-tag");

console.log("questionTag");
console.log(questionTag.textContent);

const question = document.querySelector(".question");

console.log(question);
console.log(question.textContent);

const option_a = document.querySelector("#text-option-a");
console.log(option_a);
console.log(option_a.textContent);

const option_b = document.querySelector("#text-option-b");
console.log(option_b);
console.log(option_b.textContent);

const option_c = document.querySelector("#text-option-c");
console.log(option_c);
console.log(option_c.textContent);

const option_d = document.querySelector("#text-option-d");
console.log(option_d);
console.log(option_d.textContent);

const answer = document.querySelector(".answer");
// console.log(answer);
// console.log(answer.textContent);
const submit = document.querySelector(".submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].title);
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].option_a);
console.log(quiz[currentQuestion].option_b);
console.log(quiz[currentQuestion].option_c);
console.log(quiz[currentQuestion].option_d);

questionTag.textContent = quiz[currentQuestion].title;
question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].option_a;
option_b.textContent = quiz[currentQuestion].option_b;
option_c.textContent = quiz[currentQuestion].option_c;
option_d.textContent = quiz[currentQuestion].option_d;

submit.addEventListener("click", () => {
    let checkedAns = document.querySelector('input[type="radio"]:checked');
    console.log(checkedAns);

    if (checkedAns == null) {
        alert("plc");
    } else {
        if (checkedAns.nextElementSibling.textContent == quiz[currentQuestion].answer) {
            score++;
        }
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        questionTag.textContent = quiz[currentQuestion].title;
        question.textContent = quiz[currentQuestion].question;
        option_a.textContent = quiz[currentQuestion].option_a;
        option_b.textContent = quiz[currentQuestion].option_b;
        option_c.textContent = quiz[currentQuestion].option_c;
        option_d.textContent = quiz[currentQuestion].option_d;
    }else{
        alert("your score" + score + "out of" +quiz.length );
        location.reload()
    }
})
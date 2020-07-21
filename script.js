const resultsContainer = $("#results");
const questionCount = 0;
const selections = [];
var correctCount = 0;
var questionIndex = 0;
var timer = undefined;

function nextQuestion(jsQuestions) {
    questionIndex++;
    if(questionIndex >= jsQuestions.length) {
        endQuiz();
        return;
    }
    const question = jsQuestions[questionIndex];
    const questionText = $("#question")[0];
    const choiceA = $("#choice-a");
    const choiceB = $("#choice-b");
    const choiceC = $("#choice-c");
    const choiceD = $("#choice-d");

    questionText.innerHTML = ""; 
    questionText.appendChild(document.createTextNode(question.question));

    choiceA.off("click").click(function() {
        if(question.answer==="a") {
            correctCount++;
        }
        nextQuestion(jsQuestions);
    });
    choiceA[0].innerHTML = ""; 
    choiceA[0].appendChild(document.createTextNode(question.choices.a));

    choiceB.off("click").click(function() {
        if(question.answer==="a") {
            correctCount++;
        }
        nextQuestion(jsQuestions);
    });
    choiceB[0].innerHTML = ""; 
    choiceB[0].appendChild(document.createTextNode(question.choices.b));

    choiceC.off("click").click(function() {
        if(question.answer==="a") {
            correctCount++;
        }
        nextQuestion(jsQuestions);
    });

    choiceC[0].innerHTML = ""; 
    choiceC[0].appendChild(document.createTextNode(question.choices.c));
   
    choiceD.off("click").click(function() {
        if(question.answer==="c") {
            correctCount++;
        }
        nextQuestion(jsQuestions);
    });
   
    choiceD[0].innerHTML = ""; 
    choiceD[0].appendChild(document.createTextNode(question.choices.d));

    
}

function endQuiz() {
    if(timer) {
        clearTimeout(timer);
    }
    $("#quiz-container")[0].hidden=true;
    const result = $("#results")[0];
    result.hidden=undefined;
    result.innerHTML = ""; 
    result.appendChild(document.createTextNode("Your score is " + correctCount));
}

function startQuiz(jsQuestions) {
    var correctCount = 0;
    var questionIndex = -1;
    $("#quiz-container")[0].hidden=undefined;
    const time = 60;
    var timer = setTimeout(function() {
        endQuiz();
    }, time*1000);
    const timeText = $("#timer")[0];
    timeText.innerHTML = ""; 
    timeText.appendChild(document.createTextNode(time));
    for(let i = time - 1; i > 0; i--) {
        setTimeout(function() {
            timeText.innerHTML = ""; 
            timeText.appendChild(document.createTextNode(time-i));
        }, i*1000);
    }
    nextQuestion(jsQuestions);
}

$(document).ready(function(){
    const jsQuestions = [
        {
            question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
            choices: {
                a: "a: The User's machine running a Web browser",
                b: "b: The Web server",
                c: "c: A central machine deep within Netscape's corporate offices",
                d: "d: None of the above"
            },
            answer: "a"
        },
    
        {
            question: "What are variables used for in JavaScript Programs?",
            choices: {
                a: "a: Storing numbers, dates, or other values",
                b: "b: Varying randomly",
                c: "c: Causing high-school algebra flashbacks",
                d: "d: None of the above"
            },
            answer: "a"
        },
    
        {
            question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
            choices: {
                a: "a: Client-side",
                b: "b: Server-side",
                c: "c: Local",
                d: "d: Native"
            },
            answer: "a"
        },
        
        {
            question: "What should appear at the very end of your JavaScript?",
            choices: {
                a: "a: The </script>",
                b: "b: The <script>",
                c: "c: The END statement",
                d: "d: None of the above"
            },
            answer: "a"
        },
    
        {
            question: "Inside which HTML element do we put the JavaScript?",
            choices: {
                a: "a: <js>",
                b: "b: <scripting>",
                c: "c: <script>",
                d: "d: <javascript>"
            },
            answer: "c"
        },
    ];
    const startButton = $("#start");
    startButton.click(function() {
        startQuiz(jsQuestions);
    });
  });
    
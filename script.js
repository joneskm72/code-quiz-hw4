var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var submitButton = $("#submit");
var startButton = $("start");
var nextButton = $("#next");
var prevButton = $("#previous");
var questionCount = 0;
var selections = [];

var jsQuestions = [
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        choices: {
            a: "The User's machine running a Web browser",
            b: "The Web server",
            c: "A central machine deep within Netscape's corporate offices",
            d: "None of the above"
        },
        answer: "a"
    },

    {
        question: "What are variables used for in JavaScript Programs?",
        choices: {
            a: "Storing numbers, dates, or other values",
            b: "Varying randomly",
            c: "Causing high-school algebra flashbacks",
            d: "None of the above"
        },
        answer: "a"
    },

    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        choices: {
            a: "Client-side",
            b: "Server-side",
            c: "Local",
            d: "Native"
        },
        answer: "a"
    },
    
    {
        question: "What should appear at the very end of your JavaScript?",
        choices: {
            a: "The </script>",
            b: "The <script>",
            c: "The END statement",
            d: "None of the above"
        },
        answer: "a"
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: {
            a: "<js>",
            b: "<scripting>",
            c: "<script>",
            d: "<javascript>"
        },
        answer: "c"
    },
]

    
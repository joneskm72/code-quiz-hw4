var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var submitButton = $("#submit");
var nextButton = $("#next");
var prevButton = $("#previous");
var questionCount = 0;
var selections = [];

var jsQuestions = [
    {
    question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answers: {
        a: "The User's machine running a Web browser",
        b: "The Web server",
        c: "A central machine deep within Netscape's corporate offices",
        d: "None of the above"
        },
    Answer: "a"
    },

    {
    question: "What are variables used for in JavaScript Programs?",
    answers: {
        a: "Storing numbers, dates, or other values",
        b: "Varying randomly",
        c: "Causing high-school algebra flashbacks",
        d: "None of the above"
        },
    Answer: "a"
    },

    {
    question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    answers: {
        a: "Client-side",
        b: "Server-side",
        c: "Local",
        d: "Native"
        },
    Answer: "a"
    },
    
    {
    question: "What should appear at the very end of your JavaScript?",
    answers: {
        a: "The </script>",
        b: "The <script>",
        c: "The END statement",
        d: "None of the above"
        },
    Answer: "a"
    },

    {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<javascript>"
        },
    Answer: "c"
    },
]

    
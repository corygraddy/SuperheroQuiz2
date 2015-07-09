/**
 * Created by corygraddy on 7/9/15.
 */


// to start just inject a question into the page using js

// create a p element
var para = document.createElement("p");

// have to create a node
var node = document.createTextNode("This is new.");

// attach the element to the node
para.appendChild(node);

// find an existing element
var element = document.getElementById("questions_area");

// append the node to the existing element
element.appendChild(para);

// so how do i create an element that has a paragraph and radio buttons?

// create a paragraph and three radio buttons via a function
// that takes text as a parameter...that text could be held in an array

var questionsArray = [
        {question: "this is question one" ,     Ans1: "answer 1.1" ,    Ans2: "answer 1.2",     Ans3: "answer 1.3"},
        {question: "this is question two",      Ans1: "answer 2.1",     Ans2: "answer 2.2",     Ans3: "answer 2.3"},
        {question: "this is question three",    Ans1: "answer 3.1",     Ans2: "answer 3.2",     Ans3: "answer 3.3"},
        {question: "this is question four",     Ans1: "answer 4.1",     Ans2: "answer 4.2",     Ans3: "answer 4.3"},
        {question: "this is question five",     Ans1: "answer 5.1",     Ans2: "answer 5.2",     Ans3: "answer 5.3"},
        {question: "this is question six",      Ans1: "answer 6.1",     Ans2: "answer 6.2",     Ans3: "answer 6.3"},
        {question: "this is question seven",    Ans1: "answer 7.1",     Ans2: "answer 7.2",     Ans3: "answer 7.3"},
        {question: "this is question eight",    Ans1: "answer 8.1",     Ans2: "answer 8.2",     Ans3: "answer 8.3"},
        {question: "this is question nine",     Ans1: "answer 9.1",     Ans2: "answer 9.2",     Ans3: "answer 9.3"},
        {question: "this is question ten",      Ans1: "answer 10.1",    Ans2: "answer 10.2",    Ans3: "answer 10.3"},
];

//append all of the questions to the form

for(var i = 0; i < questionsArray.length; i++){

    var p = document.createElement(p);
    var node = document.createTextNode(questionsArray[0,0]);

}










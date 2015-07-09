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
        {question: "this is question one" ,     ans1: "answer 1.1" ,    ans2: "answer 1.2",     ans3: "answer 1.3"},
        {question: "this is question two",      ans1: "answer 2.1",     ans2: "answer 2.2",     ans3: "answer 2.3"},
        {question: "this is question three",    ans1: "answer 3.1",     ans2: "answer 3.2",     ans3: "answer 3.3"},
        {question: "this is question four",     ans1: "answer 4.1",     ans2: "answer 4.2",     ans3: "answer 4.3"},
        {question: "this is question five",     ans1: "answer 5.1",     ans2: "answer 5.2",     ans3: "answer 5.3"},
        {question: "this is question six",      ans1: "answer 6.1",     ans2: "answer 6.2",     ans3: "answer 6.3"},
        {question: "this is question seven",    ans1: "answer 7.1",     ans2: "answer 7.2",     ans3: "answer 7.3"},
        {question: "this is question eight",    ans1: "answer 8.1",     ans2: "answer 8.2",     ans3: "answer 8.3"},
        {question: "this is question nine",     ans1: "answer 9.1",     ans2: "answer 9.2",     ans3: "answer 9.3"},
        {question: "this is question ten",      ans1: "answer 10.1",    ans2: "answer 10.2",    ans3: "answer 10.3"},
];

//append all of the questions to the form

for(var i = 0; i < questionsArray.length; i++){
    // holds the question at the current index
    var question = questionsArray[i].question;
    // holds the first answer at the current index
    var ans1 = questionsArray[i].ans1;
    // holds the second answer at the current index
    var ans2 = questionsArray[i].ans2;
    // holds the third answer at the current index
    var ans3 = questionsArray[i].ans3;
    // retrieves the form element from the html document
    var qForm = document.getElementById("questions_area");

    // add form
    var frm = document.createElement("form");
    // set form action to empty string
    frm.setAttribute("action", "");
    // append form to the div
    qForm.appendChild(frm);

    //add question

    // create a paragraph element
    var para = document.createElement("p");
    // create a text node
    var questionNode = document.createTextNode(question);
    // append the paragraph element to the text node
    para.appendChild(questionNode);
    // append the node to the document
    frm.appendChild(para);

    // create an input element 1st question--------------------
    var radioInput1 = document.createElement('input');
    // set the input element attribute type to radio
    radioInput1.setAttribute('type', 'radio');
    // set the input element attribute name to ans1
    radioInput1.setAttribute('name', "answer" + i);
    // create a text node for ans1
    var answerNode1 = document.createTextNode(ans1);
    // append the text node for ans1 to
    radioInput1.appendChild(answerNode1);
    frm.appendChild(radioInput1);

    // create a label input
    var label1 = document.createElement('label');
    // set id attribute
    label1.setAttribute("id", "ansLabel1");
    // create the label node
    var labelNode1 = document.createTextNode(ans1);
    // append the label to the text node
    label1.appendChild(labelNode1);
    // append the label node to the document
    frm.appendChild(label1);

    // create an input element 2nd question ------------------
    var radioInput2 = document.createElement('input');
    // set the input element attribute type to radio
    radioInput2.setAttribute('type', 'radio');
    // set the input element attribute name to ans2
    radioInput2.setAttribute('name', "answer" + i);
    // create a text node for ans1
    var answerNode2 = document.createTextNode(ans2);
    // append the text node for ans1 to
    radioInput2.appendChild(answerNode2);
    frm.appendChild(radioInput2);

    // create a label input
    var label2 = document.createElement('label');
    // set id attribute
    label2.setAttribute("id", "ansLabel2");
    // create the label node
    var labelNode2 = document.createTextNode(ans2);
    // append the label to the text node
    label2.appendChild(labelNode2);
    // append the label node to the document
    frm.appendChild(label2);

    // create an input element 3rd question ----------------
    var radioInput3 = document.createElement('input');
    // set the input element attribute type to radio
    radioInput3.setAttribute('type', 'radio');
    // set the input element attribute name to ans3
    radioInput3.setAttribute('name', "answer" + i);
    // create a text node for ans1
    var answerNode3 = document.createTextNode(ans3);
    // append the text node for ans1 to
    radioInput3.appendChild(answerNode3);
    frm.appendChild(radioInput3);

    // create a label input
    var label3 = document.createElement('label');
    // set id attribute
    label3.setAttribute("id", "ansLabel1");
    // create the label node
    var labelNode3 = document.createTextNode(ans3);
    // append the label to the text node
    label3.appendChild(labelNode3);
    // append the label node to the document
    frm.appendChild(label3);
}


// I'm able to add all questions dynamically to the page.
// I need to nest the radio button in the label as opposed to
// it coming after the button.
// I don't know if I need to add a new form for each question
// or have them all in one form.
// Right now I have a new form for each question.
// The next step is shuffling the JSON array to deliver a
// random order of questions.
// Then I need to display only the quantity of questions
// supplied by the user.






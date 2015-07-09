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
var element = document.getElementById("div1");

// append the node to the existing element
element.appendChild(para);

// so how do i create an element that has a paragraph and radio buttons?

// create a paragraph and three radio buttons via a function
// that takes text as a parameter...that text could be held in an array
var newElement = document.createElement("li");

var newText = document.createTextNode("op in the Chart");

newElement.appendChild(newText);

var target = document.getElementById("list");

var oldElement = target.children[1];

// console.log(oldElement);

target.replaceChild(newElement,oldElement);
var newElement = document.createElement("h4");

var newText = document.createTextNode("This is just Text");

newElement.appendChild(newText);

// document.getElementById("text").appendChild(newElement);

var target = document.getElementById("text");

target.insertBefore(newElement,target.childNodes[0]);

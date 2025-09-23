var newElement = document.createElement("h4");

var newText = document.createTextNode("This is just Text");

newElement.appendChild(newText);

document.getElementById("text").appendChild(newElement);

console.log(newElement);

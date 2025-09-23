var newElement = document.createElement("h4");

var newText = document.createTextNode("This is just Text");

var newComment = document.createComment("This is just Comment");

newElement.appendChild(newText);

document.getElementById("text").appendChild(newElement);
document.getElementById("text").appendChild(newComment);

console.log(newElement); 

// var a = document.createElement("h2");

// var b = document.createTextNode("This Is Just Text");

// a.appendChild(b);

var target = document.getElementById("text");

var newElement = "<h2> This Is Heading </h2>";

target.insertAdjacentHTML("beforebegin",newElement);
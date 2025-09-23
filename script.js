var a = document.createElement("h2");

var b = document.createTextNode("This Is Just Text");

a.appendChild(b);

var target = document.getElementById("text");

target.insertAdjacentElement("beforebegin",a);
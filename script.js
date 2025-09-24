var target = document.getElementById("list-1").children[1];

var copyElement = target.cloneNode(true);

document.getElementById("list-2").appendChild(copyElement);

console.log(copyElement);
var element;
document.getElementById("header").innerHTML = "<h1>WoW</h1>";

document.getElementById("header").setAttribute("style", "border:10px dotted yellow");

element=document.getElementById("header").getAttribute("class") ;


console.log(element);
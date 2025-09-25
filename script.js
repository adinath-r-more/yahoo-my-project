function abc(element) {
    element.style.background = "red";
}

function xyz(element) {
    element.style.background = "";
}
function aaa(element) {
    var x = element.value;
    document.getElementById("text").innerHTML = x;
}
function bbb(element) {
    var x = element.value;
    document.getElementById("text").innerHTML = x;
} 
function ccc(element) {
   console.log("You Selected Some Text.");
}

function submitFunction(){
    var x =document.getElementById("fname").value;
    alert("Hello" + x);
}


var target = document.querySelector('#input');
var box = document.querySelector('#box');

target.addEventListener('copy', function(){
    console.clear();
    console.log("You Copy Text.");
    target.style.background = "pink";
});

target.addEventListener('cut', function(){
    console.clear();
    console.log("You Cut Text.");
    target.style.background = "orange";
});

target.addEventListener('paste', function(){
    console.clear();
    console.log("You Pasted Text.");
    target.style.background = "lightblue";
});

box.addEventListener('copy', function(){
    box.style.background = "orange"
    });
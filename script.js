

var target = document.querySelector('#input');

target.addEventListener('copy', function(){
    console.clear();
    console.log("You Copy Text.");
});

target.addEventListener('cut', function(){
    console.clear();
    console.log("You Cut Text.");
});

target.addEventListener('paste', function(){
    console.clear();
    console.log("You Pasted Text.");
});
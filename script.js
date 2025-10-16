var target = document.querySelector('#box');

target.addEventListener('mousedown', function(e){
    console.clear();

    var text = "You Passed Button :" + e.button;
    console.log(text);
  
});
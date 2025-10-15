var target = document.querySelector('#box');

target.addEventListener('mouseover', function(e){
    console.clear();
    var x = e.offsetX;
    var y = e.offsetY;

    console.log('offset X :' + x);
    console.log('offset Y :' + y);
});
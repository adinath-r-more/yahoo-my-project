var target = document.querySelector('#box');

target.addEventListener('click', function(e){
    console.clear();

    var k = e.shiftKey;

    console.log(k);
});
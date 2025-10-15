var target = document.querySelector('#box');

target.addEventListener('click', function(e){
    console.clear();

    var k = e.ctrlKey;

    console.log(k);
});
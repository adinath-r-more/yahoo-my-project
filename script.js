var target = document.querySelector('#box');

target.addEventListener('mousedown', function(e){
    console.clear();

    var text = e.button;
    var color;
    switch (text){
        case 0:
        color = "green";
        break;

        case 1:
        color = "orange";
        break;

        case 2:
        color = "blue";
        break;

        default:
        color = "pink";
        break;
    }
    target.style.background = color;
    // console.log(text);
  
});
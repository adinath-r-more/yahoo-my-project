var left = 0;
var up = 0;

document.querySelector("body").addEventListener('keydown', function(e){
    console.clear();


    switch (e.key){
        case "ArrowRight":
        left = left + 5;
        break;

        // case "ArrowLeft":
        // left = left - 5;
        // break;

        // case "ArrowDown":
        // up = up + 5;
        // break;

        //  case "ArrowUp":
        // up = up - 5;
        // break;

        default:
        console.log("Other Key Pressed.");
        break;
    }
    
    console.log("Left :" + left);
    console.log("Up :" + up);

    var target = document.querySelector("#box");

    target.style.marginLeft = left + "px";
    target.style.marginTop = up + "px";
  
});
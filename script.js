var id = setTimeout(function(){
     var target = document.getElementById("text");
    target.style.width = "500px";
} , 6000);


function StopAnimation(){
    clearTimeout(id);
}
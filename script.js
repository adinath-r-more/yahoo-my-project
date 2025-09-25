var id = setTimeout(abc , 6000);

function abc(){
    var target = document.getElementById("text");
    target.style.width = "500px";
}

function StopAnimation(){
    clearTimeout(id);
}
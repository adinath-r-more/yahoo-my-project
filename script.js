var a = 0;
var id = setInterval(Anim, 50);

function Anim(){
    a = a + 10;
    if(a == 1500){
        clearInterval(id);

    }else{
     var target = document.getElementById("text");
        target.style.width = a + 'px';
    }


}
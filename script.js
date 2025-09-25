var a = 0;
setInterval(Anim, 500);

function Anim(){
    a = a + 10;

 var target = document.getElementById("text");
 target.style.marginLeft = a + 'px';
}
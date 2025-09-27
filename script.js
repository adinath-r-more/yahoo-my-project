var mywindow;
function openWindow(){
    mywindow =  window.open("width=500px,height=200px, left=100px, top=100px");
    mywindow.document.write("<p>This is My Window</p>");
}
function moveWindow(){
   mywindow.moveBy(500,500);
   mywindow.focus();
}


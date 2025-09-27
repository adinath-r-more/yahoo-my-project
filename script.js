var mywindow;
function openWindow(){
    mywindow =  window.open("width=500px,height=200px");
    mywindow.document.write("<p>This is My Window</p>");
}
function moveWindow(){
   mywindow.moveTo(100,100);
   mywindow.focus();
}


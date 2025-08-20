var ages =[10,23,19,30];
document.writeln(ages + "<br><br>");

var b = ages.filter (checkAdult);
    document.writeln(b+ "<br><br>");

    function checkAdult (age){
        return age >= 20;
    }
        
  

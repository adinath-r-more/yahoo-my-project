var ages =[10,13,18,25];
document.writeln(ages + "<br><br>");

var b = ages.some (checkAdult);
    document.writeln(b+ "<br><br>");

    function checkAdult (age){
        return age >= 10;
    }
        
  

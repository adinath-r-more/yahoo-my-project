var ages =[100,130,180,250];
document.writeln(ages + "<br><br>");

var b = ages.find (checkAdult);
    document.writeln(b+ "<br><br>");

    function checkAdult (age){
        return age >= 170;
    }
        
  

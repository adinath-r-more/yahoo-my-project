var obj = {
    firstName : "Adi",
    lastName : "More",
    age : 25,
    email : "hello@123.net"
}

for (var key in obj){
    document.writeln(key + " : "+ obj[key]+ "<br>");
}
var target = document.querySelector("#Box");

target.addEventListener('mousemove', function (abc) {
    console.clear();
    var x = abc.x;
    var y = abc.y;

    console.log("Client :" + x);
    console.log("Client :" + y);
})
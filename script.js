

document.querySelector('#box').addEventListener('mousemove', function (abc) {
    console.clear();
    var x = abc.ScreenX;
    var y = abc.ScreenY;

    console.log("Screen x :" + x);
    console.log("Screen y :" + y);
});
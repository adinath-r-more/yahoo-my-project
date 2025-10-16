var target = document.querySelector('#box');

target.addEventListener('click', function(e){
    console.clear();

    var k;
    switch (true){
        case e.metaKey:
            k= "Meta Key";
            break;

            // case e.altKey:
            // k= "alt Key";
            // break;

            // case e.ctrlKey:
            // k= "ctrl Key";
            // break;

            // case e.shiftKey:
            // k= "Shift Key";
            // break;

            default:
                k = "No Key Pressed";
                break;
    }

    console.log(k);

    
});
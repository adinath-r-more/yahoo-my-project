const target = document.querySelector("#Box");

target.addEventListener('scroll',() => {
    console.clear();
    console.log("scrollTop : " + target.scrollTop);
    
});
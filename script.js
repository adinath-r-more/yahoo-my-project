const target = document.querySelector("#Box");

target.addEventListener('scroll',() => {
    console.clear();
    console.log("scrollLeft : " + target.scrollLeft);
    // console.log("scrollTop : " + target.scrollTop);
    
});
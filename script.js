var target = document.querySelector("#box");

// window.addEventListener('offline', function(){
//     target.innerHTML = "Your Offline.";
//     target.style.background = "pink";
// });

window.addEventListener('online', function(){
    target.innerHTML = "Your Online.";
    target.style.background = "lightblue";
});

function off(){
     target.innerHTML = "Your Offline.";
    target.style.background = "pink";
}

if(navigator.onLine){
    console.log("Online");
}else{
    console.log("Offline");
}
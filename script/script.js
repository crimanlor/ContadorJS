let counter = 0;
let message = "¡Ei! STOP, estás clickando demasiadas veces"

function countClicks() {
    document.getElementById("counting").innerHTML = ++counter;
    if(counter > 10){
        document.getElementById("warning").innerHTML = message;
    }
}

function subtractClicks() {
    document.getElementById("counting").innerHTML = --counter;
    if(counter > 10){
        document.getElementById("warning").innerHTML = message;
    }
}
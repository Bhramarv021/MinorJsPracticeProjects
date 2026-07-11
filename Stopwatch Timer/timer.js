const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalRef;

function displayTime () {
    // currentTime.innerText = hours + " : " + minutes + " : " +seconds;
    currentTime.innerText = `${hours>9 ? hours : `0${hours}`} : ${minutes>9 ? minutes : '0'+minutes} : ${seconds>9 ? seconds : '0'+seconds}`;
}

function handleClickEvent(event){
    const eventName = event.target.name;
    if (eventName === "start"){
        intervalRef = setInterval(()=> {
            seconds++;
            if (seconds > 59) {
                seconds = 0;
                minutes++;
            }
            if (minutes > 59) {
                minutes = 0;
                seconds = 0;
                hours++;
            }
            if (hours > 23) {
                hours = 0;
                minutes = 0;
                seconds = 0;
            }
            displayTime();
        },100)
    }
    if (eventName === "stop") {
        clearInterval(intervalRef);
    }
    if (eventName === "reset") {
        clearInterval(intervalRef);
        seconds = minutes = hours = 0;
        displayTime();
    }
}

buttonParent.addEventListener("click", handleClickEvent);
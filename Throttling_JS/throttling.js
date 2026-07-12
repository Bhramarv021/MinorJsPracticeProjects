const paraContainer = document.querySelector(".container");

function handleScrollThrottle (event) {
    console.log("scroll");
}

function handleThrottling (cb, delay) {
    let isWaiting = false;
    return function (...args) {
        console.log("handleThrottling called: ",isWaiting);
        if (isWaiting) return;
        cb(...args);
        isWaiting = true;
        setTimeout(()=>{
            isWaiting = false;
        }, delay);
    }

}

const callThrottle = handleThrottling(handleScrollThrottle, 10000);

paraContainer.addEventListener("scroll", callThrottle);
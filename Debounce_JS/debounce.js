const input = document.querySelector('input');

function handleInput (event) {
    
    console.log(event.target.value)
}

function debounce (cb, delay) {
    console.log(cb, delay);
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

const callDebounce = debounce(handleInput, 500);

input.addEventListener("keyup", callDebounce);

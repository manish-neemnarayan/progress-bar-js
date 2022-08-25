const bar = document.querySelector(".progress-done");

let counter = 0;

setTimeout (() => {
    bar.style.width = "680px";
    bar.style.opacity = 1;
}, 600)

setInterval(() => {
    if(counter < 80) {
        counter++
        bar.innerText = counter + "%";
    }
    
}, 21);
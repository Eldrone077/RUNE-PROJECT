let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let value = document.getElementById("qty-display");

let count = 2;

function updateDisplay(){
    value.textContent = count;

}

increase.addEventListener("click" , function() {
    count++;
    updateDisplay();
    // increase.classList.add()
    // decrease.classList.remove()


});

decrease.addEventListener("click" , function() {
    if(count > 0){
        count--;
        updateDisplay();
    }
});
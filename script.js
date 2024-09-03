let count = 0;
let numDisplay = document.querySelector('.display');
let plusBtn = document.querySelector('.plus-btn');
let minusBtn = document.querySelector('.minus-btn');
let resetBtn = document.querySelector('.reset-btn');

function updateDisplay() {
    numDisplay.textContent = count;
}

plusBtn.onclick = () => {
    count++;
    updateDisplay();
}

minusBtn.onclick = () => {
    if (count > 0) {
        count--;
    }
    updateDisplay();
}

resetBtn.onclick = () => {
    count = 0;
    updateDisplay();
}


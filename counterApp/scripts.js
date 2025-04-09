// If counter is zero, the decrease button will get disabled in this script.

let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

function updateCountDisplay () {
    countDisplay.textContent = count;

    // color change
    if (count > 0) {
        countDisplay.style.color = 'green';
    } else {
        countDisplay.style.color = 'black';
    }

    decreaseBtn.disabled = count === 0;
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateCountDisplay();
});

decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCountDisplay();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCountDisplay();
});
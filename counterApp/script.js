let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

function updateCountDisplay () {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = 'green';
    } else if (count === 0) {
        countDisplay.style.color = 'black';
    }
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateCountDisplay();
});

decreaseBtn.addEventListener('click', () => {
    if (count === 0) {
        alert("Count cannot go below zero!");
        return;
    }

    count--;
    updateCountDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCountDisplay();
});


// Count will not go below zero a alert will appear in this script.

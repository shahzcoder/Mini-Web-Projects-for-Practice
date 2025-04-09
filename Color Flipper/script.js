const btn = document.getElementById(`flip-btn`);
const bgcolor = document.getElementById(`color-code`);

const colors = ['black','red','green','blue'];

btn.addEventListener(`click`, () => {

    const randomIndex = Math.floor(Math.random() * colors.length);
    selectedColor = colors[randomIndex];
    
    document.body.style.backgroundColor = selectedColor;
    bgcolor.textContent = selectedColor;
})
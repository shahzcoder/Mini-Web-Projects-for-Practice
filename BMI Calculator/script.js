const weightInput = document.getElementById(`weight`);
const heightInput = document.getElementById(`height`);
const submitBtn = document.getElementById(`mySubmit`);
const BMIresult = document.getElementById(`result`);


submitBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    const Weight = parseFloat(weightInput.value);
    const Height = parseFloat(heightInput.value);

    const BMI = Weight / (Height * Height);
    BMIresult.textContent = `Your Body Mass Index is ${BMI.toFixed(2)}`;
})




const billInput = document.getElementById(`bill`);
const tipInput = document.getElementById(`tip`);
const totalBill = document.getElementById(`totalAmount`);
const submitBtn = document.getElementById(`Mysubmit`);

submitBtn.addEventListener(`click`, () => {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        totalBill.textContent = `Please Enter the valid numbers`;
        return;
    }

    const totalPyament = (tipPercent / 100 ) * bill + bill;
    
    totalBill.textContent = `Total Amount is ${totalPyament}`;
})
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page from refreshing 
    validateInputs(); // call function to validate
});

function validateInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (nameValue === '') {
        setError(nameInput, 'Name is required');
    } else {
        setSuccess(nameInput);
    }

    if (emailValue === '') {
        setError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Enter a valid email');
    } else {
        setSuccess(emailInput);
    }

    if (passwordValue === '') {
        setError(passwordInput, 'Password is required');
    } else if (passwordValue.length < 6) {
        setError(passwordInput, 'Password must be at least 6 characters');
    } else {
        setSuccess(passwordInput)
    }
}

function setError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    formGroup.className = 'form-group error';
    small.innerText = message;
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
} 

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Input fields
const nameInputElement = document.querySelector('.js-name');
const emailInputElement = document.querySelector('.js-email');
const passwordInputElement = document.querySelector('.js-password');
const confirmPasswordElement = document.querySelector('.js-confirm-password');
const checkboxElement = document.querySelector('.js-checkbox');

// Error paragraphs
const nameErrorElement = document.querySelector('.name-error');
const emailErrorElement = document.querySelector('.email-error');
const passwordErrorElement = document.querySelector('.password-error');
const confirmPasswordErrorElement = document.querySelector('.confirm-password-error');
const checkboxErrorElement = document.querySelector('.js-checkbox-error');

const registerButtonElement = document.querySelector('.js-register-now-button');

registerButtonElement.addEventListener('click', () => {
    if (nameInputElement.value === '') {
        nameErrorElement.classList.remove('hidden');
    }
    if (emailInputElement.value === '') {
        emailErrorElement.classList.remove('hidden');
    }
    if (passwordInputElement.value === '') {
        passwordErrorElement.classList.remove('hidden');
    }
    if (passwordInputElement.value !== confirmPasswordElement.value) {
        confirmPasswordErrorElement.classList.remove('hidden');
    }
    if (!checkboxElement.checked) {
        checkboxErrorElement.classList.remove('hidden');
    }

    if (nameInputElement.value) {
        nameErrorElement.classList.add('hidden');
    }
    if (emailInputElement.value) {
        emailErrorElement.classList.add('hidden');
    }
    if (passwordInputElement.value) {
        passwordErrorElement.classList.add('hidden');
    }
    if (passwordInputElement.value === confirmPasswordElement.value) {
        confirmPasswordErrorElement.classList.add('hidden');
    }
    if (checkboxElement.checked) {
        checkboxErrorElement.classList.add('hidden');
    }
})
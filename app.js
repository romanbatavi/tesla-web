const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// MODAL ITEMS
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

// CLICK EVENT
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
})

//FORM VALIDATION
const form = document.getElementById('form');
const akuname = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

// SHOW ERROR MESSAGE
function showError (input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//SHOW VALID MESSAGE
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid'
}

//CHECK REQUIRED FIELDS
function checkRequired (inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    })
}

//GET FIELDNAME
function getFieldName

// EVENT LISTENER
form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkRequired([akuname, email, password, passwordConfirm])
})
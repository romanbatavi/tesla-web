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
const namee = document.getElementById('namee');
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

//CHECK INPUT LENGTH
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at less ${max} characters`)
    } else {
        showValid(input);
    }
}

//CHECK PASSWORD MATCH
function passwrdMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showValid(input2, 'Password do not Match')
    }
}

//GET FIELDNAME
function getFieldName(input) {
    return input.namee.charAt(0).toUpperCase () + input.namee.slice(1);
}

// EVENT LISTENER
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([namee, email, password, passwordConfirm])
    checkLength(namee, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwrdMatch(passwordConfirm, passwordConfirm);
})

let galleryImages = document.querySelectorAll('.services-cell');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

galleryImages.forEach(function(image, index) {
    image.onclick = function() {
        getLatestOpenedImg = index + 1;

        let container = document.body;
        let newImgWindow = document.createElement('div');
        container.appendChild(newImgWindow);
        newImgWindow.setAttribute('class', 'img-window');
        newImgWindow.setAttribute('onclick', 'closeImg');
    }
})
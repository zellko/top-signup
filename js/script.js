const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#passwordConfirm");
const pwCheckList = document.querySelectorAll("li");

function checkPassword() {
    // Check if password length is valid
    (passwordInput.value.length >= 6) ? pwCheckList[0].classList.add("valid"): pwCheckList[0].classList.remove("valid");
    // Check if password contain at least a number
    (passwordInput.value.match(/\d/)) ? pwCheckList[1].classList.add("valid"): pwCheckList[1].classList.remove("valid");
    // Check if password contain at least one uppercase
    (passwordInput.value.match(/[A-Z]/)) ? pwCheckList[2].classList.add("valid"): pwCheckList[2].classList.remove("valid");

    checkMatchingPassword();

};


function checkMatchingPassword() {

    //console.log(passwordInput.value, passwordConfirmInput.value);

    // Check if both password and confirm password fields matches
    if (passwordInput.value === passwordConfirmInput.value) {
        passwordConfirmInput.setCustomValidity('');
        pwCheckList[3].classList.add("valid");
        return;
    };

    passwordConfirmInput.setCustomValidity("Passwords Don't Match");
    pwCheckList[3].classList.remove("valid");

};

passwordInput.addEventListener("keyup", checkPassword);
passwordConfirmInput.addEventListener("keyup", checkMatchingPassword);
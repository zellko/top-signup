const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#passwordConfirm");
const pwCheckList = document.querySelectorAll("li");


console.log(passwordInput);

function checkPassword(e) {
    console.log("____");
    console.log(e);
    console.log(this.value);
    console.log(pwCheckList);
    const passwordInputValue = this.value;

    // Check if password length is valid
    (passwordInputValue.length >= 6) ? pwCheckList[0].classList.add("valid"): pwCheckList[0].classList.remove("valid");
    // Check if password contain at least a number
    (passwordInputValue.match(/\d/)) ? pwCheckList[1].classList.add("valid"): pwCheckList[1].classList.remove("valid");
    // Check if password contain at least one uppercase
    (passwordInputValue.match(/[A-Z]/)) ? pwCheckList[2].classList.add("valid"): pwCheckList[2].classList.remove("valid");

};

passwordInput.addEventListener("keyup", checkPassword);
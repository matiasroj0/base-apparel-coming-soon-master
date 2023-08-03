const emailInput = document.querySelector(".email-input");
const submitBtn = document.querySelector(".email-submit-btn");
const emailError = document.querySelector(".email-error");
const errorIcon = document.querySelector(".error-icon");
const success = document.querySelector(".success");
const successEmail = document.querySelector(".success-email");

submitBtn.addEventListener("click", ()=> {
    if(!ValidateEmail()) {
        emailError.classList.remove("hidden");
        emailInput.classList.add("email-input-error");
        errorIcon.classList.remove("hidden");
        success.classList.add("hidden");
    }
    else {
        emailError.classList.add("hidden");
        emailInput.classList.remove("email-error");
        emailInput.classList.remove("email-input-error");
        errorIcon.classList.add("hidden");
        success.classList.remove("hidden");
    }
})

function ValidateEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)){
        emailInput.focus();
        return true;
    }
    else {
        emailInput.focus();
        return false;
    }
}



const form = document.querySelector("form");
// Inputs by id
const inputs = document.querySelectorAll(
    "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
);
// Button to submit the form
const submitInput = form[form.length - 1];

// function to change menu zindex
function setZIndexSignup() {
    document.querySelector(".main-navbar").style.zIndex = 1;
}

/**
* function to test the validity of firstname, lastname, email, birthdate, quantity
* @param {*} value - input value
* @param {number} i - Number for the element location
* @returns - true to validate the form
*/
const inputChecker = (value, i) => {
    const Container = document.querySelectorAll('.formData')[i];
    const errorDisplay = document.querySelectorAll('.formData > span')[i];
    let isValid = false;

    if (i == 0 || i == 1 || i == 3 || i == 4) {
        if (value.length < 2 && i == 0 || value.length < 2 && i == 1) {
            Container.classList.add("error");
            if (i == 0) { errorDisplay.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."; }
            if (i == 1) { errorDisplay.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; }
        } else if (!value && i == 3 || !value && i == 4) {
            Container.classList.add("error");
            if (i == 3) { errorDisplay.textContent = "Veuillez entrer une date de naissance."; }
            if (i == 4) { errorDisplay.textContent = "Veuillez entrer un chiffre."; }
        } else {
            errorDisplay.textContent = "";
            isValid = true;
        }
    }
    if (i == 2) {
        if (!value.match(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,9}/mg)) {
            Container.classList.add("error");
            errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
        } else {
            errorDisplay.textContent = "";
            isValid = true;
        }
    }
    return isValid;
}

/**
 * function radioButton
 * @returns - true to validate the form
 */
const rbChecker = () => {
    const check = document.querySelectorAll(".formData")[5];
    const errorDisplay = document.querySelectorAll(".formData > p")[0];
    const radios = document.querySelectorAll('input[name = "location"]');

    isValid = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isValid = true;
            errorDisplay.textContent = "";
            break;
        }
        else {
            check.classList.add("error");
            errorDisplay.textContent = "Veuillez sélectionner une ville.";
        }
    }
    return isValid;
}

/**
 * function checkbox 
 * @returns
 */
const checkboxChecker = () => {
    const check = document.querySelectorAll(".formData")[6];
    const errorDisplay = document.querySelectorAll(".formData > p")[1];
    const checkbox1 = document.querySelector("#checkbox1");
    let isValid = false;

    if (!checkbox1.checked) {
        check.classList.add("error");
        errorDisplay.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    } else {
        errorDisplay.textContent = "";
        isValid = true;
    }
    return isValid;
}

/**
 * Check the inputs before submitting the form
 * @param {*} e - object event
 */
function submit(e) {
    e.preventDefault();

    const firstname = document.getElementById('first').value;
    const lastname = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const quantity = document.getElementById('quantity').value;

    inputChecker(firstname, 0), inputChecker(lastname, 1), inputChecker(email, 2), inputChecker(birthdate, 3), inputChecker(quantity, 4), rbChecker(), checkboxChecker();

    /**
     * if valid, switch to confirmation modal,
     * else stay on the registration modal and preventing the display of the confirmation modal 
     */
    if ((!inputChecker(firstname, 0) || !inputChecker(lastname, 1) || !inputChecker(email, 2) || !inputChecker(birthdate, 3) || !inputChecker(quantity, 4) || !rbChecker() || !checkboxChecker())) {
        document.querySelector(".modal-body").style.display = "block";
        document.querySelector(".formConfirmation").style.display = "none";
    }
    else {
        document.querySelector(".modal-body").style.display = "none";
        document.querySelector(".formConfirmation").style.display = "block";

        closeBtn.classList.add("cleanForm");
        const xcleanModal = document.querySelector(".cleanForm");
        xcleanModal.addEventListener("click", (e) => setCleanModal(e));
    }

}

submitInput.addEventListener("click", (e) => submit(e));
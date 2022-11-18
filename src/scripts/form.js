const form = document.querySelector("form");

// Button to submit the form
const submitInput = form[form.length - 1];


/**
* function to test the validity of birthdate
* @param {*} value - input value
* @returns - true to validate the form
*/
const checkBirthdate = (inputDate) => {
    // Today Date intialize
    let isValid = false;
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2)
    const yearMin = year - 100;
    const yearMax = year - 16;

    // Input form
    const inputDay = inputDate.slice(-2);
    const inputMonth = inputDate.slice(5, -3);
    const inputYear = inputDate.slice(0, -6);

    // Age requirement 
    if ((inputYear > (yearMin - 1) && inputYear < (yearMax + 1)) && (inputMonth > 0 && inputMonth < 13) && (inputDay > 0 && inputDay < (new Date(inputYear, inputMonth, 0).getDate()) + 1)) {
        if (inputYear > (yearMin) && inputYear < (yearMax)) {
            isValid = true;
        }
        else if ((inputYear == yearMin && inputMonth > month) || (inputYear == yearMax && inputMonth < month)) {
            isValid = true;
        }
        else if ((inputYear == yearMin && inputMonth == month && inputDay > day - 1) || (inputYear == yearMax && inputMonth == month && inputDay < day + 1)) {
            isValid = true;
        }
    }
    return isValid;
}

/**
* function to test the validity of firstname, lastname, email, birthdate, quantity
* @param {*} value - input value
* @param {number} i - Number for the element location
* @returns - true to validate the form
*/
const inputChecker = (value, i) => {
    const container = document.querySelectorAll('.formData')[i];
    const errorDisplay = document.querySelectorAll('.formData > span')[i];
    let isValid = false;

    if (i == 0 || i == 1 || i == 3 || i == 4) {
        if ((i == 0 || i == 1) && (value.length < 2 || !value.match(/^[A-Za-z\é\è\ê\-]+$/gm))) {
            container.classList.add("error");
            if (i == 0) { errorDisplay.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."; }
            if (i == 1) { errorDisplay.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; }
        } else if ((!value && (i == 3 || i == 4)) || (i == 4 && value < 0) || (i == 3 && !checkBirthdate(value))) {
            container.classList.add("error");
            if (i == 3) { errorDisplay.textContent = "Veuillez entrer une date de naissance entre 16 et 100 ans."; }
            if (i == 4) { errorDisplay.textContent = "Veuillez entrer un nombre positif."; }
        } else {
            errorDisplay.textContent = "";
            isValid = true;
        }
    }
    if (i == 2) {
        if (!value.match(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,9}/mg)) {
            container.classList.add("error");
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

    const inputFirstCheck = inputChecker(firstname, 0);
    const inputLastCheck = inputChecker(lastname, 1);
    const inputEmailCheck = inputChecker(email, 2); 
    const inputBirthdateCheck = inputChecker(birthdate, 3);
    const inputQuantityCheck = inputChecker(quantity, 4);
    const inputRBCheck = rbChecker();
    const inputCheckboxCheck = checkboxChecker();

    /**
     * if valid, switch to confirmation modal,
     * else stay on the registration modal and preventing the display of the confirmation modal 
     */
    if ((inputFirstCheck && inputLastCheck && inputEmailCheck && inputBirthdateCheck && inputQuantityCheck && inputRBCheck && inputCheckboxCheck)) {
        document.querySelector(".modal-body").style.display = "none";
        document.querySelector(".formConfirmation").style.display = "block";
        document.querySelector(".formConfirmation > span").innerHTML = "Merci pour <br> votre inscription"

        closeBtn.classList.add("cleanForm");
        const xcleanModal = document.querySelector(".cleanForm");
        xcleanModal.addEventListener("click", (e) => setCleanModal(e));
    }

}

submitInput.addEventListener("click", (e) => submit(e));
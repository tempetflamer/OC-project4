
const form = document.querySelector("form");



// Inputs by id
const inputs = document.querySelectorAll(
    "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
);

// Button to submit the form
const submitInput = form[form.length - 1];

/**
 * exemple of regular expression
 * "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
 * ^([A-Za-z]|[0-9])+$ 
 * [a-z0-9]+@[a-z]+\.[a-z]{2,3} 
 * /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
 * /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i //celui d'un autre étudiant - ca veut dire quoi le i
 * /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 */ 

/**
* function firstname, lastname, email, birthdate, quantity
* @param {*} value - input value
* @param {number} i - Number for the element location
* @returns - true to validate the form
*/
const inputChecker = (value, i) => {
    const Container = document.querySelectorAll('.formData')[i];
    console.log(Container);
    const errorDisplay = document.querySelectorAll('.formData > span')[i];
    console.log(errorDisplay);
    let isValid = false;

    if (i == 0 || i == 1 || i == 3 || i == 4) {
        if (value.length < 2) {
            Container.classList.add("error");
            if (i == 0) { errorDisplay.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."; }
            if (i == 1) { errorDisplay.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; }
            if (i == 3) { errorDisplay.textContent = "Veuillez entrer une date de naissance."; }
            if (i == 4) { errorDisplay.textContent = "Veuillez entrer un chiffre."; }
        } else {
            errorDisplay.textContent = "";
            isValid = true;
        }
    }
    if (i == 2) {
        if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            emailContainer.classList.add("error");
            errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
        } else {
            errorDisplay.textContent = "";
            isValid = true;
        }
    }
    return isValid;
};


/**
 * function radioButton
 * @returns - true to validate the form
 */
const rbChecker = () => {
    const check = document.querySelectorAll(".formData")[5];
    const errorDisplay = document.querySelectorAll(".formData > p")[0];
    console.log(errorDisplay);
    const radios = document.querySelectorAll('input[name = "location"]');
    console.log(radios);

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
    console.log('rbcheckerButton', isValid);
    return isValid;
};


/**
 * function checkbox 
 * @returns
 */
const checkboxChecker = () => {
    const check = document.querySelectorAll(".formData")[6];
    const errorDisplay = document.querySelectorAll(".formData > p")[1];
    console.log(errorDisplay);
    const checkbox1 = document.querySelector("#checkbox1");
    let isValid = false;

    if (!checkbox1.checked) {
        check.classList.add("error");
        errorDisplay.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    } else {
        errorDisplay.textContent = "";
        isValid = true;
    }
    console.log('checkbox', isValid);
    return isValid;
};

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
    console.log('firstname checker', firstname, 'lastname checker', lastname, 'email checker', email, 'birthdate checker', birthdate, 'quantity checker', quantity);

    console.log(inputChecker(firstname, 0), inputChecker(lastname, 1), emailChecker(email, 2), birthdateChecker(birthdate, 3), quantityChecker(quantity, 4));

    rbChecker();
    checkboxChecker();
    console.log('rbchecker', rbChecker());
    console.log('checkbox', checkboxChecker());

    /**
     * if valid, switch to confirmation modal,
     * else stay on the registration modal and preventing the display of the confirmation modal 
     */
    if ((!firstChecker(firstname) || !lastChecker(lastname) || !emailChecker(email) || !birthdateChecker(birthdate) || !quantityChecker(quantity) || !rbChecker() || !checkboxChecker())) {
        console.log("error");
        document.querySelector(".modal-body").style.display = "block";
        document.querySelector(".formConfirmation").style.display = "none";
    }
    else {
        document.querySelector(".modal-body").style.display = "none";
        document.querySelector(".formConfirmation").style.display = "block";
    }

};

const quantityContainer = document.querySelectorAll('.formData')[4]
console.log(quantityContainer.values);

submitInput.addEventListener("click", (e) => submit(e));




//faudra rajouté un reset des champ une fois le formulaire validé - ou en tout cas faire les tests
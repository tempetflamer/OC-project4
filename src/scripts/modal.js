function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
//const formData = document.querySelectorAll(".formData");

const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanModalValid = document.querySelector(".formConfirmation > span");
const btnConfirmSubmit = document.querySelector(".btn-confirmation-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

// Open confirmation modal
 function launchModalConfirmation() {
  modalConfirmation.style.display = "block";
  spanModalValid.innerHTML = "Merci pour <br> votre inscription";
}

btnSubmit.addEventListener("click", launchModalConfirmation);

// Close confirmation modal
function closeModalConfirmation() {
  modalbg.style.display = "none";
  window.location.reload();
}

btnConfirmSubmit.addEventListener("click", closeModalConfirmation);
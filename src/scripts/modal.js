// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanModalValid = document.querySelector(".formConfirmation > span");
const btnConfirmSubmit = document.querySelector(".btn-confirmation-submit");
const xcloseModal = document.querySelector(".close");
var signupInput = document.querySelectorAll(".btn-signup")[1];


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

// Reset modal
function setXCloseModal() {
  document.querySelector(".modal-body").style.display = "block";
  document.querySelector(".formConfirmation").style.display = "none";

  document.getElementById('first').value = '';
  document.getElementById('last').value = '';
  document.getElementById('email').value = '';
  document.getElementById('birthdate').value = '';
  document.getElementById('quantity').value = '';

  for (let i = 0; i < 7; i++) {
      document.querySelectorAll(".formData")[i].classList.remove("error");
  }

  for (let i = 1; i < 7; i++) {
      document.getElementById('location' + i).checked = false;
  }

  document.querySelector(".main-navbar").style.zIndex = 2;
  closeBtn.classList.remove("cleanForm");
};

signupInput.addEventListener("click", (e) => setZIndexSignup(e));
btnConfirmSubmit.addEventListener("click", closeModalConfirmation);
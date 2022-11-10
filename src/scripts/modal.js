// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanModalValid = document.querySelector(".formConfirmation > span");
const btnConfirmSubmit = document.querySelector(".btn-confirmation-submit");
var btnSignup = document.querySelectorAll(".btn-signup")[1];


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// function to format min and max in birthdate
function birthdate(){
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2)
  const yearMin = year - 100;
  const yearMax = year - 16;

  document.getElementById('birthdate').min =yearMin+'-'+month+'-'+day;
  document.getElementById('birthdate').max =yearMax+'-'+month+'-'+day;
}


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function initModal() {
  // Change Zindex menu
  document.querySelector(".main-navbar").style.zIndex = 1;
  birthdate();
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
  document.querySelector(".main-navbar").style.zIndex = 2;
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
function setCleanModal() {
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

btnSignup.addEventListener("click", (e) => initModal(e));
btnConfirmSubmit.addEventListener("click", closeModalConfirmation);
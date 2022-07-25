const $ = (el) => document.querySelector(el);

const inputs = document.querySelectorAll(".content__form__input input");
const submitBtn = $(".content__form__button");
const email = $("#emailAddress");

submitBtn.addEventListener("click", claimTrial);

function claimTrial() {
  clearMessages();
  verifyInput();
}

function verifyInput() {
  inputs.forEach((el) => {
    if (el.value.trim() !== "") return;

    assignMessage(el);
    showMessage(el);
  });
    if(!validateEmail(email.value)){
        assignMessageEmail(email);
        showMessage(email);
    }
}

function clearMessages() {
  inputs.forEach((el) => {
    el.parentElement.parentElement.children[1].style.visibility = "hidden";
  });
}

function assignMessage(element) {
  element.value = "";
  element.parentNode.parentElement.children[1].textContent = `${element.placeholder} cannot be empty`;
}

function assignMessageEmail(element) {
    element.value = "";
    element.parentNode.parentElement.children[1].textContent = `Looks like this is not a email`;
  }

function showMessage(element) {
  element.parentElement.parentElement.children[1].style.visibility = "visible";
}

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true;
  return false;
}

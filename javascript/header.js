// toggle visibility of search form in header

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");
let searchCloseBtn = document.getElementById("search-close");

// toggle the search input field visibility
searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");

  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");
});

searchCloseBtn.addEventListener("click", function () {
  searchForm.classList.remove("active");
});

// ---------------

// shopping cart box toggle visibility:
let shoppingCart = document.querySelector(".shopping-cart");
let cartBtn = document.querySelector("#cart-btn");
let closeCartBtn = document.getElementById("head-cart-close");

// toggle the shopping cart box visibility
cartBtn.addEventListener("click", function () {
  shoppingCart.classList.toggle("active");

  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");
});

closeCartBtn.addEventListener("click", () => {
  shoppingCart.classList.remove("active");
});

// ---------------

// login form box toggle visibility:
let loginForm = document.querySelector(".login-form");
let loginBtn = document.querySelector("#login-btn");
let loginCloseBtn = document.getElementById("head-login-close");

// toggle the shopping cart box visibility
loginBtn.addEventListener("click", function () {
  loginForm.classList.toggle("active");

  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");
});

loginCloseBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

// ---------------

// menu button box
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
let navCloseBtn = document.getElementById("head-nav-close");

// toggle the menu navigation visibility
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");

  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");
});

navCloseBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
});

window.addEventListener("scroll", function () {
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
});

// ------------------

// script for a filterable list for searching through bakery products starts

// got input element from search field
let filterInput = document.getElementById("filterInput");

// added event listener to search field typing
filterInput.addEventListener("keyup", filterNames);

// created function called filterNames to run every time user starts typing in search field
function filterNames() {
  // got value of whatever bakery product user types in the search field
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  // console.log(filterValue);

  // got the complete unordered list
  let ul = document.getElementById("names");

  // got individual bakery items i.e. list items - got li from ul
  let li = ul.querySelectorAll("li.collection-item");

  // loop through all the collection items li
  for (let i = 0; i < li.length; i++) {
    // access all a tags within li items and store in variable
    let a = li[i].getElementsByTagName("a")[0];

    // if matched

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// script for a filterable list for searching through bakery products ends

// ------------------

// script for weight and baking temperature conversion feature for baking purposes - feature is in navigation menu

// 1. got input elements

let gmsRef = document.getElementById("gms");
let ozRef = document.getElementById("oz");
let tspRef = document.getElementById("tsp");
let tbspRef = document.getElementById("tbsp");
let cupRef = document.getElementById("cups");
let mlRef = document.getElementById("ml");

let degCRef = document.getElementById("degC");
let degFRef = document.getElementById("degF");

// 2. create function to convert from one unit to other values

let convertFromGrams = () => {
  let gms = gmsRef.value;
  // using toFixed method to limit decimals to 2 digits only
  ozRef.value = (gms * 0.035274).toFixed(2);
  tbspRef.value = (gms / 17.07).toFixed(2);
  tspRef.value = (gms / 5.69).toFixed(2);
  cupRef.value = (gms / 200).toFixed(2);
  mlRef.value = (gms * 1).toFixed(1);
};

let convertFromOz = () => {
  let oz = ozRef.value;
  gmsRef.value = (oz * 28.3495).toFixed(2);
  cupRef.value = (oz / 8).toFixed(2);
  tbspRef.value = (oz * 2).toFixed(1);
  tspRef.value = (oz * 6).toFixed(1);
  mlRef.value = (oz * 30).toFixed(1);
};

let convertFromTbsp = () => {
  let tbsp = tbspRef.value;
  tspRef.value = (tbsp * 3).toFixed(1);
  gmsRef.value = (tbsp * 17.07).toFixed(2);
  cupRef.value = (tbsp / 16).toFixed(1);
  ozRef.value = (tbsp / 2).toFixed(2);
  mlRef.value = (tbsp * 15).toFixed(1);
};

let convertFromTsp = () => {
  let tsp = tspRef.value;
  tbspRef.value = (tsp / 3).toFixed(1);
  gmsRef.value = (tsp * 5.69).toFixed(2);
  cupRef.value = (tsp / 48).toFixed(2);
  ozRef.value = (tsp / 6).toFixed(2);
  mlRef.value = (tsp * 5).toFixed(1);
};

let convertFromCups = () => {
  let cups = cupRef.value;
  tbspRef.value = (cups * 16).toFixed(1);
  tspRef.value = (cups * 48).toFixed(1);
  gmsRef.value = (cups * 200).toFixed(1);
  ozRef.value = (cups * 8).toFixed(1);
  mlRef.value = (cups * 240).toFixed(1);
};

let convertFromMl = () => {
  let ml = mlRef.value;
  cupRef.value = (ml / 240).toFixed(3);
  tspRef.value = (ml / 5).toFixed(2);
  tbspRef.value = (ml / 15).toFixed(2);
  gmsRef.value = (ml * 1).toFixed(1);
  ozRef.value = (ml / 30).toFixed(2);
};

// convert baking temperatures
let convertFromDegC = () => {
  let degC = degCRef.value;
  degFRef.value = (degC * (9 / 5) + 32).toFixed(1);
};

let convertFromDegF = () => {
  let degF = degFRef.value;
  degCRef.value = ((degF - 32) * (5 / 9)).toFixed(1);
};

// adding event listeners to all input values and adding load listener to window to begin converting from 1 cup as soon as window loads

gmsRef.addEventListener("input", convertFromGrams);
ozRef.addEventListener("input", convertFromOz);
cupRef.addEventListener("input", convertFromCups);
tbspRef.addEventListener("input", convertFromTbsp);
tspRef.addEventListener("input", convertFromTsp);
mlRef.addEventListener("input", convertFromMl);

degCRef.addEventListener("input", convertFromDegC);
degFRef.addEventListener("input", convertFromDegF);

window.addEventListener("load", convertFromCups);
window.addEventListener("load", convertFromDegC);

// end of script for conversion feature for baking purposes

// script for toggling visibility of unit convertor as a modal box on screen
let unitBtn = document.getElementById("unitBtn");
let convertorForm = document.querySelector(".convertor-form");
let closeConvertor = document.getElementById("close-convertor");

unitBtn.addEventListener("click", function () {
  convertorForm.classList.toggle("active");

  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
  groceryList.classList.remove("active");
});

closeConvertor.addEventListener("click", function () {
  convertorForm.classList.remove("active");
});

// script for unit convertor feature ends

// ---------

// script for shopping list feature - found under unity convertor feature within the navigation menu

// adding onclick function to push button

document.querySelector("#push").onclick = function () {
  // created if statement  to check for length of input and then allowing user to add item instead telling him to add something in the input field

  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Please enter a item!");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class = "task">
    <span id = "taskName">
        ${document.querySelector("#newTask input").value}
    </span>
    <button class = "delete">
        <i class="fas fa-trash-alt"></i>
    </button>
</div>`;

    //   to delete an item from the shopping list
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    //   crossing off a bought item from the shopping list
    let tasks = document.querySelectorAll(".task");

    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
  }
  // clear out your input field after adding a grocery item to the list
  document.querySelector("#newTask input").value = "";
};

// scrip to toggle visibility of grocery list feature

let groceryBtn = document.getElementById("groceryBtn");
let groceryList = document.querySelector(".groceryList");

groceryBtn.addEventListener("click", function () {
  groceryList.classList.toggle("active");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
  convertorForm.classList.remove("active");
});

// close grocery list on clicking the close button
let closeGroceryBtn = document.getElementById("close-grocery");
closeGroceryBtn.addEventListener("click", function () {
  groceryList.classList.remove("active");
});

// script for shopping list feature ends here

// -----------------------------------

// script for common input validation on different pages starts

// define all necessary regex variables
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
// Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character.

let phoneNumberRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
// Match a phone number with "-" and/or country code.

let creditCardNumRegex =
  /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;

let userNameRegex = /^[a-z0-9_-]{3,15}$/;

let cvvRegex = /^[0-9]{3,4}$/;

// define all form validation functions to be used across the site
function emailValidityCheck(inputEmail, outputMsg) {
  if (inputEmail.value == "") {
    outputMsg.innerHTML = "Please enter your E-mail";
    inputEmail.style.border = "0.05rem dotted #9b2226";
    outputMsg.style.color = "#9b2226";
  } else if (inputEmail.value.match(emailRegex)) {
    inputEmail.style.border = "0.2rem solid #005f73";
    outputMsg.innerHTML = "Great! This is valid E-mail";
    outputMsg.style.color = "#005f73";
  } else {
    outputMsg.innerHTML = "Invalid. Please enter a valid E-mail ID";
    inputEmail.style.border = "0.2rem solid #9b2226";
    outputMsg.style.color = "#9b2226";
  }
}

function passwordValidityCheck(inputPsw, outputPsw) {
  if (inputPsw.value == "") {
    outputPsw.innerHTML = "Please enter your password";
    inputPsw.style.border = "0.05rem dotted #9b2226";
  } else if (inputPsw.value.match(passwordRegex)) {
    inputPsw.style.border = "0.2rem solid #005f73";
    outputPsw.innerHTML = "Your password is correct";
    outputPsw.style.color = "#005f73";
  } else {
    outputPsw.innerHTML = "Incorrect Password. Please Try Again";
    inputPsw.style.border = "0.2rem solid #9b2226";
    outputPsw.style.color = "#9b2226";
  }
}

function phoneNumValidityCheck(inputNum, outputNumMsg) {
  if (inputNum.value == "") {
    outputNumMsg.innerHTML = "Please enter your phone number";
    inputNum.style.border = "0.05rem dotted #9b2226";
  } else if (inputNum.value.match(phoneNumberRegex)) {
    inputNum.style.border = "0.2rem solid #005f73";
    outputNumMsg.innerHTML = "Yay! Valid Phone Number";
    outputNumMsg.style.color = "#005f73";
  } else {
    outputNumMsg.innerHTML = "Invalid Phone Number. Please Try Again";
    inputNum.style.border = "0.2rem solid #9b2226";
    outputNumMsg.style.color = "#9b2226";
  }
}

function usernameValidityCheck(inputUsername, outputUsernameMsg) {
  if (inputUsername.value == "") {
    outputUsernameMsg.innerHTML = "Please enter a username";
    inputUsername.style.border = "0.05rem dotted #9b2226";
  } else if (inputUsername.value.match(userNameRegex)) {
    inputUsername.style.border = "0.2rem solid #005f73";
    outputUsernameMsg.innerHTML = "Yay! Valid username";
    outputUsernameMsg.style.color = "#005f73";
  } else {
    outputUsernameMsg.innerHTML = "Invalid user name. Please Try Again";
    inputUsername.style.border = "0.2rem solid #9b2226";
    outputUsernameMsg.style.color = "#9b2226";
  }
}

function cardNumValidityCheck(inputCardNum, outputCardNumMsg) {
  if (inputCardNum.value == "") {
    outputCardNumMsg.innerHTML = "Please enter your card number";
    inputCardNum.style.border = "0.05rem dotted #9b2226";
  } else if (inputCardNum.value.match(creditCardNumRegex)) {
    inputCardNum.style.border = "0.2rem solid #005f73";
    outputCardNumMsg.innerHTML = " This is a valid card number";
    outputCardNumMsg.style.color = "#005f73";
  } else {
    outputCardNumMsg.innerHTML =
      "Invalid card number. Please Try Again or with a different card";
    inputCardNum.style.border = "0.2rem solid #9b2226";
    outputCardNumMsg.style.color = "#9b2226";
  }
}

function cvvNumValidityCheck(inputCvvNum, outputCvvNumMsg) {
  if (inputCvvNum.value == "") {
    outputCvvNumMsg.innerHTML = "Please enter your CVV";
    inputCvvNum.style.border = "0.05rem dotted #9b2226";
  } else if (inputCvvNum.value.match(cvvRegex)) {
    inputCvvNum.style.border = "0.2rem solid #005f73";
    outputCvvNumMsg.innerHTML = " This is a valid cvv number";
    outputCvvNumMsg.style.color = "#005f73";
  } else {
    outputCvvNumMsg.innerHTML =
      "Invalid cvv. Please Try Again. It's the 3 digit number behind your card";
    inputCvvNum.style.border = "0.2rem solid #9b2226";
    outputCvvNumMsg.style.color = "#9b2226";
  }
}

// input validation for login form on the header navigation panel
let headerInputEmail = document.getElementById("header-login-email");
let headerOutputEmail = document.getElementById("email-output");

let headerInputPsw = document.getElementById("header-login-psw");
let headerOutputPsw = document.getElementById("header-psw-output");

// input validation of subscription form at the bottom of home page
let subscribeEmailInput = document.getElementById("subscribe-email-input");
let subscribeEmailOutputMsg = document.getElementById("subscribe-output-msg");

// input validation of phone number field on about page within the contact form
let contactPhoneNum = document.getElementById("contact-phone-Num");
let contactPhoneMsg = document.getElementById("contact-phone-Msg");

// input validation of email and phone number on shop page under the custom order form
let orderEmailInput = document.getElementById("order-email-input");
let orderEmailMsg = document.getElementById("order-email-msg");

let orderPhoneInput = document.getElementById("order-phone-input");
let orderPhoneMsg = document.getElementById("order-phone-msg");

// input validation for login form on cart page
let usernameInputLogin = document.getElementById("username-input-login");
let usernameOutputMsg = document.getElementById("username-output-msg");

let loginEmailAddressInput = document.getElementById("email-address");
let loginEmailAddressOutputMsg = document.getElementById(
  "email-address-output-msg"
);

let cartLoginPswInput = document.getElementById("password-cart-login");
let cartLoginPswOutputMsg = document.getElementById("password-cart-login-msg");

// input validation for signup form on cart page
let signupUsernameInput = document.getElementById("signup-username-input");
let signupUsernameOutputMsg = document.getElementById("signup-username-output");

let signupEmailInput = document.getElementById("email-address-signUp");
let signupEmailOutputMsg = document.getElementById("signup-email-msg");

let createPasswordInput = document.getElementById("create-password");
let createPasswordOutputMsg = document.getElementById("signup-password-msg");

// function to match two password fields
let rePasswordInput = document.getElementById("re-password");
let rePasswordMatchMsg = document.getElementById("password-match");

function matchPassword() {
  if (rePasswordInput.value == createPasswordInput.value) {
    rePasswordMatchMsg.innerHTML = "Passwords Match!";
    rePasswordInput.style.border = "0.2rem solid #005f73";
    rePasswordMatchMsg.style.color = "#005f73";
  } else {
    rePasswordMatchMsg.innerHTML =
      "Passwords don't match. Type Again. This is to check if you'll be able to remember your password.";
    rePasswordMatchMsg.style.color = "#9b2226";
    rePasswordInput.style.border = "0.2rem solid #9b2226";
  }
}

// input validation of payment form on cart page
let creditCardNumInput = document.getElementById("cardNumber");
let cardNumOutputMsg = document.getElementById("card-num-msg");

let cvvInputNum = document.getElementById("cvv");
let cvvOutputMsg = document.getElementById("cvv-output-msg");

// ---------------------------------------------------------------------

// on submit event listener added to forms to display thankyou message when users submit a form
let homeSubscribeEmail = document.querySelector(".subscribeNews");

let headerLoginForm = document.querySelector(".login-form");

function submitForm(formContainer) {
  formContainer.innerHTML = "Thankyou for your time!";
}

function alertOnSubmit() {
  alert("The form is submitted. Thankyou!");
}

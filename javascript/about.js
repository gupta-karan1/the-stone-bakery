// about page - tabs display feature under the 'We Support' section

// 1. get the header of tabs
let tabs = document.querySelectorAll(".tabs h3 ");

// 2. get individual card the tab
let tabContents = document.querySelectorAll(".tab-content article");
// check if article tag works or else use class name of singleTab

// loop through each tab with its index number using forEach method and add an event listener within it

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // function to remove active class of content box
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    // function to remove active class of tab button on top
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // take index number of individual tab button and tab content box and add active class to each
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

// about page - tabs display feature under the 'We Support' section -- Ends Here

// --------------------------------

// about page - FAQs toggle feature under the 'frequently asked questions' section -- Starts

// 1. get toggle button
// using getElementsByClassName to extract the html elements in an array
let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("contents");
let icon = document.getElementsByClassName("icon");

// console to check
// console.log(toggles, contentDiv, icon);

// create a for loop
// use scrollHeight property instead of classList toggle
for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    // console out the height of the content box
    // console.log(contentDiv[i].style.height, contentDiv[i].scrollHeight);

    // create if statement to check if heights are unequal then make them equal to expand the content box
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";

      // change styles after expanding the content box
      toggles[i].style.color = "#005F73";
      icon[i].classList.remove("fa-plus");
      icon[i].classList.add("fa-minus");
    }

    // create an else statement to minimize the content box
    else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#000";
      icon[i].classList.add("fa-plus");
      icon[i].classList.remove("fa-minus");
    }

    // create another for loop to toggle between the different content boxes such that others minimize in size when one is opened
    for (let j = 0; j < contentDiv.length; j++) {
      // create an if statement to check equality between i and j
      if (j !== i) {
        // copy paste the else statement of previous for loop
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#000";
        icon[j].classList.add("fa-plus");
        icon[j].classList.remove("fa-minus");
      }
    }
  });
}

// about page - FAQs toggle feature under the 'frequently asked questions' section -- Ends Here

// --------------------------------

// about page - contact form - email input validation starts

// 1. get elements from contact form and store in variables
let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let tickIcon = document.getElementById("tickIcon");

//2. store email regex pattern in a variable to match with input
let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// 3. create function that runs when user inputs in the email field
function validityChecker(emailId, errorMsg, tickIcon) {
  tickIcon.style.display = "inline-block";

  // if statement to check if value of email matches the regex pattern using match method
  if (emailId.value.match(mailRegex)) {
    // tick icons appears on right
    tickIcon.innerHTML = ' <i class="fas fa-check-circle"></i> ';
    tickIcon.style.color = "#005f73";
    errorMsg.style.display = "none";
    emailId.style.border = "0.2rem solid #005f73";
  }
  // if user puts nothing in input field, remove the tick
  else if (emailId.value == "") {
    tickIcon.style.display = "none";
    emailId.style.border = "0.05rem solid #9b2226";
    errorMsg.style.display = "none";
  }
  // if user writes in invalid email format
  else {
    // exclamation mark appears
    tickIcon.innerHTML = ' <i class="fas fa-exclamation-circle"></i> ';
    tickIcon.style.color = "#9b2226";
    errorMsg.style.display = "inline-block";
    emailId.style.border = "0.2rem solid #9b2226";
  }
}

// End of email input validation within the contact form

// Reuse the above function to check email input validity in the newsletter subscribe section at the bottom of about page

// 1. get elements from contact form and store in variables
let emailIdSub = document.getElementById("email-id-subscribe");
let errorMsgSub = document.getElementById("error-msg-subscribe");
let tickIconSub = document.getElementById("tickIcon-subscribe");

// -------------------------------------

let basket = JSON.parse(localStorage.getItem("data")) || [];

// console.log(basket);

// display the total items on the red dot above the cart icon in the header
let calculation = () => {
  let cartIcon = document.getElementById("headerItemCount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

let headerCartValues = () => {
  let totalBillValue = document.getElementById("headerCartPrice");
  let totalItemQuantity = document.getElementById("headerCartQuantity");

  let updateHeaderPrice = () => {
    if (basket.length !== 0) {
      let bill = basket
        .map((x) => {
          // destructure the x
          let { item, id } = x;
          // using the id, look for the price from product arrays
          let search =
            bakeryProducts.find((y) => y.id === id) ||
            bakingIngredients.find((y) => y.id === id) ||
            bakingUtensils.find((y) => y.id === id) ||
            bakingGuidebooks.find((y) => y.id === id) ||
            [];

          return item * search.price;
        })
        .reduce((i, j) => i + j, 0)
        .toFixed(2);
      totalBillValue.innerHTML = `$${bill}`;
    } else return;
  };

  updateHeaderPrice();

  let updateHeaderQuantity = () => {
    if (basket.length !== 0) {
      let products = basket
        .map((x) => {
          // destructure the x
          let { item, id } = x;
          // using the id, look for the price from product arrays
          let search =
            bakeryProducts.find((y) => y.id === id) ||
            bakingIngredients.find((y) => y.id === id) ||
            bakingUtensils.find((y) => y.id === id) ||
            bakingGuidebooks.find((y) => y.id === id) ||
            [];

          return item;
        })
        .reduce((i, j) => i + j, 0)
        .toFixed(0);
      totalItemQuantity.innerHTML = `${products}`;
    } else return;
  };

  updateHeaderQuantity();
};

headerCartValues();

// ----------------------

// get the html elements of label and shopping cart section where the bought items will be displayed

let label = document.getElementById("label");
let boughtItems = document.getElementById("shopping-cart");

// retrieve stored items from local storage to be displayed on the cart page
let basket = JSON.parse(localStorage.getItem("data")) || [];

// console.log(basket);

// display the total items on the red dot above the cart icon in the header
let calculation = () => {
  let cartIcon = document.getElementById("headerItemCount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

// create a function to feed items into the bought items section

let generateCartItems = () => {
  // two cases within this function, one where some data will be there in the basket and the other where no data will be there in the basket

  if (basket.length !== 0) {
    // console.log("basket is not empty");

    return (boughtItems.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search =
          bakeryProducts.find((y) => y.id === id) ||
          bakingIngredients.find((y) => y.id === id) ||
          bakingUtensils.find((y) => y.id === id) ||
          bakingGuidebooks.find((y) => y.id === id) ||
          [];

        //   destructure
        let { img, title, price } = search;
        return `
          <article id="product-id-${id}" class="card">
          <i onclick="removeItem(${id})" class="fas fa-times" id="deleteItem"></i>
            <img src=${img} alt=${title} />
            <h2>${title}</h2>
            <article class="content">
                <p class="price">price: <span id="priceValue">$${price}</span></p>
            </article>

            <h4>Quantity:</h4>

            <article class="counterIcons">
                <i onclick="decrement(${
                  search.id
                })" class="fas fa-minus-circle"></i>
                <p id="${id}" class="quantity">${item}</p>
                <i onclick="increment(${
                  search.id
                })" class="fas fa-plus-circle"></i>
            </article>

            <h2 class="totalEach">Total: $ ${(item * search.price).toFixed(
              2
            )} </h2>
        </article>
          `;
      })
      .join(""));
  } else {
    // console.log("basket is empty");
    boughtItems.innerHTML = ``;
    label.innerHTML = `
      <h2>Hi, your shopping cart is empty!</h2>
      <h4> Add items from shop to checkout</h4>
      <img src="img/cart-emptyCart.png" alt="empty cart">
      <h3>Let's get you to the bakery shop where you can buy all our awesome products!</h3>
      <a href="shop.html"><button type="button" class="secondaryBtn">Visit Shop</button></a>
      <h4>Happy Shopping!</h4>
      `;
  }
};

generateCartItems();

// creating increment and decrement functions for plus and minus buttons and to add items to the cart:

// every time a user clicks on plus button, increment function will run
let increment = (id) => {
  let selectedItem = id;

  // currently if we click on plus button of an item more than once, it will push it multiple times, which makes the array very long. We use a find method to add item only if it's not already added to the array before

  let search = basket.find((x) => x.id === selectedItem.id);

  // the above function matches the id of a parameter x with the id of the selected Item

  // create an if else statement to check if item already exists

  if (search === undefined) {
    // if item doesn't exist in cart, then push it in the array
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    // else increase the item number of products
    search.item += 1;
  }

  // console.log(basket);
  // update item quantity in cart page with plus click
  generateCartItems();

  // update function should run after this to update the number of items
  update(selectedItem.id);

  // store the data in local storage to be used to display on the cart page
  // local storage items remain even after the browser is refreshed
  // convert basket array into JSON format
  localStorage.setItem("data", JSON.stringify(basket));
};

// every time a user clicks on minus button, decrement function will run
let decrement = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  let search = basket.find((x) => x.id === selectedItem.id);
  // if the item number goes below 0, the function will not be executed, using return statement
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    // else increase the item number of products
    search.item -= 1;
  }
  // console.log(basket);

  // update function should run after this to update the number of items
  update(selectedItem.id);

  // the object should be removed from the local storage after the item quantity is reduced to 0
  // remove all the objects with the item equal to 0 and store only those not equal to 0
  basket = basket.filter((x) => x.item !== 0);

  // remove the card from cart when the user reaches a 0 quantity
  generateCartItems();

  localStorage.setItem("data", JSON.stringify(basket));
};

// item quantity will update with the update function when user clicks on plus or minus button
let update = (id) => {
  let search = basket.find((x) => x.id === id);

  // get the item number from search object above
  // console.log(search.item);

  // update the above item number in the html
  document.getElementById(id).innerHTML = search.item;

  // run the calculation function to display total items at the top of the cart icon on the header
  calculation();

  totalAmount();
  updateHeaderPrice();
  updateHeaderQuantity();
};

//  remove item function so that whenever a user clicks on the cross icon at the top right of every card, the card gets removed
let removeItem = (id) => {
  let selectedItem = id;
  //   console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  // remove the card from html
  generateCartItems();
  totalAmount();
  calculation();
  updateHeaderPrice();
  updateHeaderQuantity();
  localStorage.setItem("data", JSON.stringify(basket));
};

// clear cart when user clicks on clear cart button
let clearCart = () => {
  basket = [];
  updateHeaderPrice();
  updateHeaderQuantity();
  generateCartItems();
  calculation();

  localStorage.setItem("data", JSON.stringify(basket));
};

// total amount function which displays the total bill for the customer
// will have two cases, one where some data is there and other when no data is there
let totalAmount = () => {
  if (basket.length !== 0) {
    // basket is not empty
    let amount = basket
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
    // console.log(amount);
    label.innerHTML = `
      <h2>Your Total Bill is: $${amount}</h2>
      <button class="secondaryBtn checkout">Checkout</button>
      <button class="tertiaryBtn removeAll" onclick ="clearCart()">Clear Cart</button>
      `;
  }
  // basket is empty then stop the function
  else return;
};

// invoke the above function
totalAmount();

// update values in the header cart modal box

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
  } else return (totalBillValue.innerHTML = 0);
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
  } else return (totalItemQuantity.innerHTML = 0);
};

updateHeaderQuantity();

// ----------------

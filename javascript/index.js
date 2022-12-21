// swiper js for slider for testimonial cards on home page

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
// swiper js for slider for brand number cards

var swiper = new Swiper(".numBox-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// swiper js for slider for brand logos cards

var swiper = new Swiper(".brandBox-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 5,
    },
  },
});

// ---------------------------

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

// ------------------------------------------------------

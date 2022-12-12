// importing module
console.log('Inporting module');

// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// addToCart('bread', 5);
//console.log(price, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('veggies', 8);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';

add('pizza', 2);

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

// TOP LEVEL AWAIT

// async function x() {
//     //await ....
// }

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

// not very clean
// lastPost.then(last => console.clear(last));

const lastPost = await getLastPost();
console.log(lastPost);

// Module pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (prod, quantity) {
    cart.push({ prod, quantity });
    console.log(`${quantity} ${prod} was added to cart`);
  };
  const orderStock = function (prod, quantity) {
    console.log(`${quantity} ${prod} ordered from supplier `);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4); // addToCart function can still access cart because it's scope is the same as this function's scope (the function's birth place scope), so function can still manipulate it
console.log(ShoppingCart2);

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 5,
    },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);

console.log(stateClone);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateDeepClone);

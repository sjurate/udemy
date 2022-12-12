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

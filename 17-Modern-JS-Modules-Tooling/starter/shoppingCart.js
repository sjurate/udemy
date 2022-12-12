// exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

//named export
export const addToCart = function (prod, quantity) {
  cart.push({ prod, quantity });
  console.log(`${quantity} ${prod} was added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;
// named export
export { totalPrice, totalQuantity };

// default export
export default function (prod, quantity) {
  cart.push({ prod, quantity });
  console.log(`${quantity} ${prod} was added to cart`);
}

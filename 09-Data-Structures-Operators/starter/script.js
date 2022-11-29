'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  // new way of writing methods in objects
  // used to be: order: function() {...function logic}

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// DECONSTRUCTING, SPREAD, REST

// Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

///////////////////////////////////////
// Destructuring Objects
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/

///////////////////////////////////////
// The Spread Operator (...)

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`);

// // Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// SHORT CIRCUITING
// Use ANY data type, return ANY data type

// If firts value is truthy, JS doesn't even look at the second value, RETURNS FIRST ONE TRUTHY VALUE
// Stops at the first truthy value. If there are no truthy values, stops at last falsy

console.log(true || 0);
//returns true
console.log('', 'Jonas');
// returns 'Jonas'
console.log(undefined, null);
//returns null

//exapmple

restaurant.numGuest = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuest : 10;

const guestsCorrect = restaurant.numGuest ?? 10;

// Trumpiau nei ternary operator !!!
// To assign default value

const guests2 = restaurant.numGuest || 10;

console.log('------AND------');

// If the first value is falsy, JS doesn't even look at the second value, RETURNS FIRST ONE FALSY VALUE
// Stops at the first falsy value. If there are no falsy values, stops at last truthy

console.log(0 && 'Jonas');
//returns 0

console.log(7 && 'Jonas');
//return 'Jonas'

//example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

//Trumpiau nei IF

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// NULLISH COALESCING OPERATOR
//only considers nullish values (null, undefined), doesn't care about falsy values

// restaurant.numGuest = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuest : 10; // <= returns 10

// const guestsCorrect = restaurant.numGuest ?? 10; // <= returns 0

// // Trumpiau nei ternary operator !!!
// // To assign default value

// const guests2 = restaurant.numGuest || 10; // <= returns 10

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'Piazza',
  owner: 'Giovanni Rossi',
};

//good
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//better
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//correct (only sets default if numGuests is null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

//rest1.owner = rest1.owner && 'ANONYMOUS';
//rest2.owner = rest2.owner && 'ANONYMOUS';

//asigns new value to the property, if it already exists

rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);

//CODING CHALLENGE

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];

//OR [players1, players1] = game.players;

const [goalKeeper1, fieldPlayers1] = players1;
const [goalKeeper2, fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'subst1', 'subst2', 'subst3'];

const { team1, x: draws, team2 } = game.odds;

console.log(team1, draws, team2);

const printGoal = function (...scored) {
  console.log(...scored);
  console.log(scored.length);
};

printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');

printGoal(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, item] of menu.entries()) {
  console.log(`${i + 1}: ${item}`);
}

// Optional chaning

//on properties
console.log(
  restaurant.openingHours.mon?.open ?? "On Mondays restaurant isn't open"
);

console.log(
  restaurant.openingHours[weekdays[5]]?.open ??
    "On Saturdays restaurant isn't open"
);

//on methods

console.log(restaurant.order?.(2, 1) ?? "Method doesn't exist");

console.log(restaurant.orderRisotto?.(2, 1) ?? "Method doesn't exist");

//on arrays

const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

// Object KEYS

const properties = Object.keys(openingHours);
let openStr = `we are open ${properties.length} days a week:`;

console.log(openStr);
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

// Object VALUES

const values = Object.values(openingHours);

// Entire object
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  //console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

const rest = new Map();
rest.set('name', 'Classico Italiano');

rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open');

console.log(rest);

console.log(rest.get(1));

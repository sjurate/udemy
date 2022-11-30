'use strict';

const bookings = [];
const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // setting default value
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

createBooking('LH12', 3, 800);

const flight = 'LH123';
const jonas = {
  name: 'Jonas Schmendmant',
  passport: 246681561684,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  //   if (passenger.passport === 246681561684) {
  //     alert('Check in');
  //   } else {
  //     alert('Wrong passport');
  //   }
};

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);

// Passing a primitive value to a function, is the same as making copy of it
// Passing object to a function is the same as "making copy" of an object - the address in the memory heap is the same, so when we change "copy", we change original too
// JS does not have pass by reference

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// In JS functions are treated AS VALUES
// In JS functions are OBJECTS

// So functions can even be returned
// So functions can be passed into another function as AN ARGUMENT - such passed funciton is a CALLBACK FUNCTION

// Function that accepts other funcitons as an argument

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`original str: ${str}`);
  console.log(`transformed str: ${fn(str)}`);
  console.log(`transfomed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

// function returning function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Steven');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

/// AIRLINES

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on a  ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book('4578', 'Jurate');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// doesn't work
//book(23, 'Sarah Marshal');

// CALL method - FIRST PARAM - object, calling the function, NEXT PARAM - parameters of the callback function

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

lufthansa.book(123, 'Me');
console.log(lufthansa);

// APPLY method

const flightData = [236, 'Regina Regatoni'];
book.apply(eurowings, flightData);

book.call(lufthansa, ...flightData);

// BIND method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(789, 'Jack');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Gabriel');

// With event listeners

lufthansa.planes = 300;
lufthansa.buy = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buy.bind(lufthansa));

// Partial application - presetting arguments

const addTax = (rate, value) => value + value * rate;

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

//console.log(addVAT(100));

const countTax = function (rate) {
  return function (value) {
    const sum = value + value * rate;
    console.log(sum);
    return sum;
  };
};

const countTaxVAT = countTax(0.23);

countTaxVAT(100);

// CHALLANGE

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    //register the answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
    this.displayResulsts();
    this.displayResulsts('string');
  },
  displayResulsts(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll resulsts are ${this.answers.join(', ')}`);
    }
  },
};

//poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// [5, 2, 3]
// [1, 5, 3, 9, 6]

poll.displayResulsts.call({ answers: [5, 2, 3] });

//IIFE - to write functions that onky needs to run once
// For incapsulating data!

// (function() {
// const private = privacy;
//     console.log('function logic...');
// })();

//******************************************* */
// ------------- CLOSURES ------------------- */
// ****************************************** */
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();

// A returned function always has acces to execution context of the higher order function in which it was born. Even if the mother function is already gone.

//example 1

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();
//console.dir(f);

//example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // setTimeout needs 2 params - 1st is the function, 2nd is the time in miliseconds till that function is called

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passangers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

//
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'skyblue';
  });
})();

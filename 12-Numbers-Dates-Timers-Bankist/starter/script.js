'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-11-29T23:36:17.929Z',
    '2022-12-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'lt-LT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, curr) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: curr,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWYS LOGGED IN

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Experimenting with an API DATE
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long', // short or narrow ...
// };

// // authomatically
// const locale = navigator.language;

// console.log(locale);
// labelDate.textContent = new Intl.DateTimeFormat('lt-LT', options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // CREATE CURRENT DATE and time
    // day/month/year

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long', // short or narrow ...
    };

    // authomatically
    const locale = currentAccount.locale;

    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// instead of Number(blabla) we can write +blabla
// still converts to number

// ----- PARSE

// gets rid of everything after the number
//stops after .
console.log(typeof parseInt('30px', 10)); // -> 30
//won't work
console.log(Number.parseInt('e23', 10)); // -> 30

// doesn't stop after .
console.log(Number.parseFloat('2.5rem')); // -> 2.5

// ----- NAN
// check if value is literaly NaN
console.log(Number.isNaN('20'));

// ----- isFINITE - the best way to check if value is really a number
console.log(Number.isFinite(20)); // -> true
console.log(Number.isFinite(+'23')); // -> false
console.log(Number.isFinite(23 / 0)); // -> false

// MATH

// sqrt
console.log(Math.sqrt(25));

// min max
console.log(Math.max(5, 18, 6, 45));
console.log(Math.min(5, 18, 6, 45));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// rand
console.log(Math.trunc(Math.random() * 6) + 1);

// rand between min & max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// ROUNDING integers

console.log(Math.trunc(23.4589));

// round - rounds to the nearest integer -> 24
console.log(Math.round(23.6789));

// ceil - rounds to the higher integer -> 24
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

// floor - rounds to the lower integer - 23
// with negative numbers works opposite
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// Rounding decimals

// to fixed - returns STRING
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3)); // ->  2.700
console.log((2.345).toFixed(2)); // -> 2.35
console.log(+(2.345).toFixed(2)); // -> 2.35 (number)

// REMAINDER operator ------------------
// grazina liekana po padalinimo
// naudinga, kai reikia pasirinkti KAS KELINTA

console.log(5 % 2); // -> 1
console.log(8 % 3); // -> 2

// even numbers - those that divided by 2 don't have liekana - lyginiai.
// number % 2 = 0
console.log(6 % 2); // --> 0 , vadinasi even

// odd numbers: number % 2 != 0 (nelygu nuliui)
console.log(7 % 2); // --> 1 , vadinasi odd

const isEven = n => n % 2 === 0;

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
    if (i % 3 === 0) {
      row.style.backgroundColor = 'skyblue';
    }
  });
});

// NUMERIC SEPARATORS
// 287,460,000,000;
// JS ignores _ , reads it as a number without breaks
const diameter = 287_460_000_000;
console.log();

const priceCents = 345_99;
console.log(priceCents);

const transferFee = 15_00; // ===
const transferFee2 = 1_500;

const PI = 3.14_15;

// BIGINT
// to display biger INT than max_safe_integer we need to write 'n' at the end or BigInt(number)

console.log(454661311654684741315616864n);
console.log(BigInt(231651515641));
console.log(156468479415651688n * 10000000n);

// won't work!
// can't mix types
//console.log(2641684151n * 1564);

// Math() operations won't work on BigInt

// ------------------- DATES ------------------
// ********************************************

// Create a date
// const now = new Date();

// console.log(now);
// console.log(new Date('Dec 02 2022 10:49:51'));
// console.log(new Date('December 24, 2015'));

// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 1000));

// number in milisecons is called TIMESTAMP (countis since 1970 Jan 01)

// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate()); // day of the month
// console.log(future.getDay()); // day of the week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

console.log(new Date(2142249785000));

// current TIMESTAMP
console.log(Date.now());

//future.setFullYear(2040); // will change a year to 2040 in that date

// CALCULATING DATES -----------------------
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(+future);

const calcDaysPassed = (date1, date2) => {
  return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
};

const days1 = calcDaysPassed(
  new Date(2037, 3, 14, 10, 8),
  new Date(2037, 3, 24)
);

console.log(days1);

const numb = 2364847.23;

const options = {
  style: 'currency',
  currency: 'EUR', // need to be defined here if we choose style currency
  unit: 'celsius',
  // useGrouping: false,
};

// en-US
console.log('US:', new Intl.NumberFormat('en-Us', options).format(numb));
console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(numb));
console.log('LT:', new Intl.NumberFormat('lt-LT', options).format(numb));

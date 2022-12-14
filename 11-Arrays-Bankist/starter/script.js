'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? [...movements].sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;
    // accepts 2 params: 1st - where we want to insert HTML (4 options: afterbegin, beforebegin, afterend, beforeend), 2nd- HTML that we want to insert
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} Eur`;
};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumIn.textContent = `${incomes} Eur`;
  labelSumOut.textContent = `${Math.abs(out)} Eur`;
  labelSumInterest.textContent = `${interest} Eur`;
};

//calcDisplaySummary(account1.movements);

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(n => n.slice(0, 1))
      .join('')
      .toUpperCase();
  });
};

createUserNames(accounts);
console.log(accounts);

// PIPELINE
// You can chain next method to an operation if the one before returns a new array

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * 1.1;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// EVENT HANDLERS

let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //prevent form from submitting
  event.preventDefault();
  console.log('login');
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value.toUpperCase()
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome msg
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // get rid of focus on input field
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value.toUpperCase()
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    amount < currentAccount.balance &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value.toUpperCase() === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);

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
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SLICE
// doesn't change original arr
// first - start param, second- end param. Returns new array, doesn't change original

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2, 4));
console.log(arr.slice(1, -2));

// SPLICE
// changes original arr. Removes from it the extracted elements
// first - start param, second - the count(kiekis) of elements we want to remove

arr.splice(-1);
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];

// REVERSE
// changes original arr!

let arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());

// CONCAT
// param - array that we want to add

const letters = arr.concat(arr2);
console.log(letters);

// JOIN

console.log(letters.join('-'));

// AT
// works with strings too

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

//getting the last elements
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
//new way
console.log(arr3.at(-1));

// FOREACH

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdraw ${Math.abs(movement)}`);
//   }
// }

console.log(`----FOREACH------`);

//foreacg requires callback function
// has 3 params - item, index, whole array
// continue and break doesn't work with foreach method

// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
//   }
// });

// remembering Set
const arr4 = ['blue', 'red', 'green', 'blue', 'yellow', 'pink', 'red'];

const arr5 = [...new Set(arr4)];
console.log(arr5);

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy ????")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far ????

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK ????
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const nocatsJulia = [...dogsJulia].slice(1, 3);
  const allDogs = [...nocatsJulia, ...dogsKate];
  allDogs.forEach(function (dog, i) {
    if (dog < 3) {
      console.log(`Dog number ${i + 1} is a puppy (${dog} years old)`);
    } else {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const calcAverageDogHumanYear = function (arr) {
  const humanAges = arr.map(a => (a <= 2 ? a * 2 : a * 4 + 16));
  console.log(humanAges);
  const excludesAges = humanAges.filter(a => a > 18);
  console.log(excludesAges);
  const avgAge =
    excludesAges.reduce((acc, a, i, arr) => acc + a, 0) / excludesAges.length;
  // excludesAges.reduce((acc, a, i, arr) => acc + a / arr.length, 0);
  console.log(avgAge);
  return avgAge;
};

// chaining the same func

const calcAverageDogHumanYear2 = arr =>
  arr
    .map(a => (a <= 2 ? a * 2 : a * 4 + 16))
    .filter(a => a > 18)
    .reduce((acc, a, i, arr) => acc + a / arr.length, 0);

calcAverageDogHumanYear([5, 2, 4, 1, 15, 8, 3]);

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) ????
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them ????
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
console.log('-----------');
console.log(dogs.forEach(el => (el.recommendedFood = el.weight ** 0.75 * 28)));
console.log(dogs);

// 2

const sarahDog = dogs.find(el => el.owners.includes('Sarah'));

console.log(sarahDog);
if (sarahDog.recommendedFood > sarahDog.curFood) {
  console.log(`Sarah's dog is eating too little`);
} else if (sarahDog.recommendedFood < sarahDog.curFood) {
  console.log(`Sarah's dog is eating too much`);
}

//3

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .map(el => el.owners)
  .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .map(el => el.owners)
  .flat();

console.log(ownersEatTooLittle);

//4

const stringTooMuch = function (arr) {
  // const names = arr.map(el => `${el}\`s and`);
  // const n = names[names.length - 1].slice(0, -4);
  // const first = names.fill(n, 2).join(' ');
  // const second = ` dogs eat too much!`;
  // return first + second;
  return `${arr.join(' and ')}'s dogs eat too much`;
};

console.log(stringTooMuch(ownersEatTooMuch));

//5

console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));

//6

console.log(
  dogs.some(
    dog =>
      dog.curFood < dog.recommendedFood * 1.1 &&
      dog.curFood > dog.recommendedFood * 0.9
  )
);

//7

const dogsOkey = dogs.filter(
  dog =>
    dog.curFood < dog.recommendedFood * 1.1 &&
    dog.curFood > dog.recommendedFood * 0.9
);

console.log('Dogs eating okey amount of food');
console.log(dogsOkey);

//8

const sortedDog = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(sortedDog);
// GOOD LUCK ????

// ***********************************************

// MAP method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const newMovements = movements.map(function (n) {
  return n * eurToUsd;
});
const newMovements2 = movements.map((m, i, arr) => m * eurToUsd);

console.log(newMovements2);
console.log(newMovements2);

const deposits = movements.filter(function (mov) {
  return mov > 0;
  // filter(mov => mov < 0)
});

// INCLUDES
// returns true if there is at least one element that EQUALS param
console.log(movements.includes(-130));

// SOME
// returns true if there is at least one element in the array inline with CONDITION. If there is none- returns false

const anydeposits = movements.some(mov => mov > 0);
console.log(anydeposits);

// EVERY
// returns true if all elements in the array are inline with CONDITION. If at least one doesn't - returns false

console.log(movements.every(mov => mov > 0));

// separate callback

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//FIND method
// will return FIRST element in the array when the condition is TRUE

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.userName === 'JD');

console.log(account);

// accumulator => snowball
// first param - function, second - acc value (ex 0)
// const balance = movements.reduce((acc, cur, i, arr) => (acc += cur), 0);

// console.log(balance);

// Maximum value

// const max = movements.reduce((acc, mov) => {
// if (acc > mov) {
//   return acc;
// } else {
//   return mov;
// }
// }, movements[0])

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);

// FLAT method

// dismantles arrays in the main array, leaving separate values in main array
// goes one level deep by default
// if more levels are needed - accepts param - example 2 - goes 2 levels

const arr6 = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr6.flat());

const arr7 = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// ===

const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);

// FLAT MAP
// maps and then flats array
// only goes one level

const overallBalance3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance3);

// ----------  SORTING  ---------------
// Changes original array!!!!!!!!!!!!!!
// by default - sorts alphabetically

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());

// return < 0 (-1), A, B (keep order) - negative
// return > 0 (1), B, A (switch order) - positive

// ascending
// movements.sort((curr, next) => {
//   if (curr > next) {
//     return 1;
//   } else if (curr < next) {
//     return -1;
//   }
// });
movements.sort((curr, next) => curr - next);

// descending
// movements.sort((curr, next) => {
//   if (curr > next) {
//     return -1;
//   } else if (curr < next) {
//     return 1;
//   }
// });
movements.sort((curr, next) => next - curr);

console.log(movements);

// FILL method

const arr8 = [1, 2, 3, 4, 5];

console.log([1, 2, 3, 4, 5]);
console.log(new Array(1, 2, 3, 4, 5));

const x = new Array(7);
console.log(x);
// 3 params - firts with WHAT to fill, 2nd - where to start, 3rd - where to end
x.fill(1, 3, 5);
console.log(x);

// pakeis jau esamas reiksmes
arr8.fill(23, 2, 5);
console.log(arr8);

// ARRAY.FROM

const y = Array.from({ length: 7 }, () => 1);
const z = Array.from({ length: 7 }, (_, i) => i + 1);

console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('Eur', ''))
  );
  // const m = movementsUI.map(el => Number(el.textContent.replace('Eur', '')));
  console.log(movementsUI);
});

//1.
const bankDepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(n => n > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

//2.

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

//3.
// sums = {deposits: 0, withdrawals: 0} - initial value of accumulator (of initial snowball)

const { depositss, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.depositss += cur) : (sums.withdrawals += cur);
      // sums[cur > 0 ? 'depositss' : 'withdrawals'] += cur
      return sums;
    },
    { depositss: 0, withdrawals: 0 }
  );

console.log(depositss, withdrawals);

//4.

// this is a nice title -> This Is a Nice Title

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? capitalize(word)
//     )
//     .join(' ');
//   return capitalize(titleCase);
// };

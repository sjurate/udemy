'use strict';

// OOP principles:
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// CONSTRUCTOR FUNCTIONS
// we call() it with the word NEW

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside constructor function because it creates a new method for each of the instance - so it can be thousands of isntances with newly created same function
  //   this.calAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);

console.log(jonas);

// 1. New empty object {} is created
// 2. Object is linked to prototype
// 3. Function is called, this = newly created object
// 4. Function automatically returns new object {} (this)

const matilda = new Person('Matildas', 1990);
const jack = new Person('Jack', 1985);
const june = new Person('June');
console.log(june); // -> birthYear = undefined

// to check if an object is an instance of constructor fucntion
console.log(jonas instanceof Person);

// PROTOTYPES

console.log(Person.prototype);

Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calAge();
matilda.calAge();

// to check prototype methods than jonas can use
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// Object.prototype
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 7, 6, 7, 5, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// To create a new method for an array
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.log(x => x + 1);

// Coding challange

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed = this.speed - 10;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);

car1.accelerate();
car1.break();
console.log(car1);

// ES6 CLASSES

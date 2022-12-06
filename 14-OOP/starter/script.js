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

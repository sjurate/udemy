'use strict';

// OOP principles:
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// CONSTRUCTOR FUNCTION ---------------------
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

// to create STATIC method
// but it won't be inherited by instances

Person.hey = function () {
  console.log('Hey there !!!!!!!!!!!!!');
};

Person.hey();

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

// ES6 CLASSES ----------------------------------

// class expression
// const PersonCl = class {
// }

// CLASS declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property of newly created object and will be inherited by instances
  calAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  //   set fullName(name) {
  //     console.log(name);
  //     if (name.includes(' ')) this._fullName = name;
  //     else alert(`${name} is not a full name`);
  //   }

  //   get fullName() {
  //     return this._fullName;
  //   }

  // creating static method (won't be inherited by instances )
  static hey() {
    console.log('Hey there !!!!!!!!!!!!!');
  }
}

const jessica = new PersonCl('Jessica Davis', 1989);
console.log(jessica);

jessica.calAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

console.log('-------------------');
console.log(jessica.age);

// 1. Classes are not hoisted (can't use them before they are declared)
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter', 1968);

// SETTERS and GETTERS (optional)

const account = {
  owner: 'Jonas',
  movements: [200, 53, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // accepts ONE PARAM
  set latest(mov) {
    this.movements.push(mov);
  },
};

// So you don't need to "call" that function (don't need to write account.lates());

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// STATIC METHODS
// ... not very important

// OBJECT.CREATE ---------------------------------
// least used way to create prototypas inheritance

// to create methods in prototype
const PersonProto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.firstName = 'Steven';
steven.birthYear = 2002;

steven.calAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1984);
sarah.calAge();

// Coding challange

class Cars {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }

  break() {
    this.speed = this.speed - 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car3 = new Cars('Ford', 120);
console.log(car3.speedUS);
car3.speedUS = 50;

console.log(car3);

// INHERITANCE ----------------------------------
// VOL 1: using constructor functions

const Person1 = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  this.course = course;
};

// Links student prototype methods to Person1 prototybe methods (inherits from Person1)
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

Student.prototype.constructor = Student;

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calAge();

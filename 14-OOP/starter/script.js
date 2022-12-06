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

const Student1 = function (firstName, birthYear, course) {
  Person1.call(this, firstName, birthYear);
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  this.course = course;
};

// Links student prototype methods to Person1 prototybe methods (inherits from Person1)
Student1.prototype = Object.create(Person1.prototype);

Student1.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

Student1.prototype.constructor = Student1;

const mike = new Student1('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calAge();

// Example #2
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge = this.charge - this.charge * 0.1;
//   console.log(
//     `${this.make} is going ${this.speed} km/h, with charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(50);
// tesla.break();
// console.log(tesla);
// tesla.accelerate();

// INHERITANCE ----------------------------------
// VOL 2: using classes

class Person2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calAge() {
    console.log(2037 - this.birthYear);
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //   calAge() {
  //     console.log(`I am forever young`);
  //   }
}

class Student2 extends Person2 {
  // if we don't need any new properties, constructor is not needed
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    // pass params of the parent constructor
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new Student2('Martha Jones', 2012, 'Architecture');

console.log(martha);
martha.introduce();
martha.calAge();

// INHERITANCE ----------------------------------
// VOL 3: using Object.create()

const PersonProto1 = {
  calAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven1 = Object.create(PersonProto1);
const StudentProto1 = Object.create(PersonProto1);
StudentProto1.init = function (firstName, birthYear, course) {
  PersonProto1.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto1.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto1);
jay.init('Jay', 2010, 'Medicine');
console.log(jay);

jay.introduce();
jay.calAge();

// ------------------------------------

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this._pin = pin;
    // protected property (just to let know that this property shouldn't be touched outside the class)
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }
  // Public interface
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }
  // protected method (just to let know that this method shouldn't be used outside the class)
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'Eur', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(140);
acc1.approveLoan(140);

console.log(acc1);

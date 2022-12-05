'use strict';

// ***************************************** PAGE

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// SMOOTH SCROLLING

btnScrollTo.addEventListener('click', function (e) {
  // pasirinkti elemento, iki kurio norima nuskrolinti, koordinates
  const s1coords = section1.getBoundingClientRect();

  console.log('Current position', s1coords);

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'Height/width viewport:',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling

  // window.scrollTo(
  //   // current position + current scroll
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // modern way

  section1.scrollIntoView({ behavior: 'smooth' });
});

// PAGE NAVIGATION ---------------------------

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = el.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// EVENT DELEGATION - menu: scrolling to the section

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// MENU FADE ANIMATION

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1.0);
// });

// bind method returns a function, so can be used to be added to event handler function. Then it's argument becomes "THIS" keyword

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// STICKY NAVIGATION

const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// INTERS

// TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content ');

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Active tab
  //remove for all class active
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  // add for correct one 'active'

  clicked.classList.add('operations__tab--active');

  // Active content
  //remove for all class active
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // add for correct one 'active'
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ************************************* LECTURES
// SELECTING ELEMENTS --------------------------

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
document.getElementById('section--1');

// BY TAG NAME
// returns HTML collection
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// retuns HTML collection
document.getElementsByClassName('btn');

// CREATING and INSERTING ELEMENTS

// .insertAdjacentHTML

// first param - type of HTML attr
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = `We use cookies for improved funtionality and analytics.`
message.innerHTML = `We use cookies for improved funtionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// add elements as the first child of an el
// header.prepend(message);
// add elements as the last child of an el
header.append(message);
// if we want at both places -
// param - if we want to copy node's children too
//header.append(message.cloneNode(true));

// as Siblings:
// header.before(message);
// header.after(message)

// DELETING ELEMENTS

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message)
  });

// STYLES -----------------------------------

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// to manipulate ROOT style "variables"

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//setting an attr
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes

console.log(logo.dataset.versionNumber);

// CLASSES

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// More about EVENTS

const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert("addEventListener: Great! You're reading the heading.");
//   //h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 6000);

// old way
// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great! You're reading the heading.");
// };

// EVENT PHASES

//1) Capturing phase
//2) Target phase
//3) Bubbling phase

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('Link', e.target);
//   this.style.backgroundColor = randomColor();

// STOP EVENT PROPAGATION - sustabdyti, kad nevyktu ir teviniu elementu event'ai
// e.stopPropagation();
//});

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('Container', e.target);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('Nav', e.target);
//   this.style.backgroundColor = randomColor();
// });

// DOM TRAVERSING

// going downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// //gives HTML collection of children (direct)
// console.log(h1.children);
// // first child
// h1.firstElementChild.style.color = 'white';
// // last child
// h1.lastElementChild.style.color = 'orangered';

// // going upwards : parents
// // direct parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// //important
// // closest parent element having that specific class
// // like the opposite of querySelector - gives closest parent no matter how deep it is
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// // goind sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// // to get all siblings - going up to parent, then reading all children
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

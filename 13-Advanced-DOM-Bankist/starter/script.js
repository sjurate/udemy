'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

// SELECTING ELEMENTS

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

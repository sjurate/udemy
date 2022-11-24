'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Pick  a number...';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 22;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

const secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secret;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number was entered';
  } else if (guess === secret) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
  } else if (guess > secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game...';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game...';
      document.querySelector('.score').textContent = 0;
    }
  }
});

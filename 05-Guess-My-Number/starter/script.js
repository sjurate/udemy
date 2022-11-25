'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Pick  a number...';

let secret = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // EMPTY GUESS

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number was entered';
    displayMessage('No number!');
    // WHEN player WINS
  } else if (guess === secret) {
    // document.querySelector('.message').textContent = 'Correct Number!!!';
    displayMessage('Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secret;

    //implementing high score

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WRONG GUESS
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? 'Too high!' : 'Too low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game...';
      displayMessage('You lost the game...');
      document.querySelector('.score').textContent = 0;
    }
  }
  // TOO LOW
  //   } else if (guess < secret) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low...';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game...';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Pick a number...');
  //   document.querySelector('.message').textContent = 'Pick a number...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  //style
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'black';
});

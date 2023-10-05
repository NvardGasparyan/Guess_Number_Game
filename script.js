'use strict';

// document.querySelector('.message').textContent = 'I am set from JavaScript';
// document.querySelector('.number').textContent = true;
// document.querySelector('.score').textContent = 37;

// let secretNumber = Math.trunc(Math.random)() * 20 + 1;
let secretNumber = 10;
let score = 20;
let highScore = 0;

const displayMessage = (text, className = '.message') =>
  (document.querySelector(className).textContent = text);

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  if (guess != 0 && !guess) {
    displayMessage('No number!');
  } else if (secretNumber === guess) {
    displayMessage('Correct Number');
    displayMessage(secretNumber, '.number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too hight' : 'To low!');
      score--;
      displayMessage(score, '.score');
    } else {
      displayMessage('You lost the game');
      displayMessage(0, '.score');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  guess = document.querySelector('.guess').value = '';
});

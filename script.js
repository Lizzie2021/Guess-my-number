'use strict';

const randomNumber = function (num) {
  return Math.trunc(Math.random() * num) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

let secretNum = randomNumber(20);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When no input
  if (!guess) {
    displayMessage('⛔️ No number !');
  }

  //when guess is correct
  else if (guess === secretNum) {
    displayMessage('🎉 Correct Number!');
    changeBackgroundColor('#60b347');
    displayNumber(secretNum);
    changeWidth('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when guess is wrong
  else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('💥 You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = randomNumber(20);
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(score);
  changeBackgroundColor('#222');
  changeWidth('15rem');
  document.querySelector('.guess').value = '';
});

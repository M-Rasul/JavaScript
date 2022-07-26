'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No input!');
  } else if (guess === number) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = number;
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('YOU LOST!!!');
      setScore(0);
    }
  }
});
//Implement 'Again' button
//-what should happen when i click it? It should reset everything
//-what do i mean by everything? background color should get gray, number should get hidden by '?',input should become empty, number div should become
//15rem, message should get 'Start guessing', score should reset to 20
//Implement high score
//-what should it do? imitate the behaviour of 'score'
//-should it be reset after 'again' button? No
//-how it works? checks whether score is greater than highscore or not
//steps:
//-addEventListener for 'Again'
//-change styles of elements
//-change the contents of some elements
//-after each click on 'Guess' it should compare score with highscore
//if score>highscore then highscore=score
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  score = 20;
  setScore(score);
});

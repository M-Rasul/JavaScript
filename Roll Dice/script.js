'use strict';
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
let currentScoreFirst = 0;
let currentScoreSecond = 0;
let totalScore1 = 0;
let totalScore2 = 0;
const dice = document.querySelector('.dice');
const useButtons = function (bool) {
  document.querySelector('.btn--hold').disabled = bool;
  document.querySelector('.btn--roll').disabled = bool;
};
document.querySelector('.btn--roll').addEventListener('click', function () {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${diceNumber}.png`;
  dice.hidden = false;
  if (diceNumber === 1) {
    if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      currentScoreFirst = 0;
      currentScore1.textContent = currentScoreFirst;
    } else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      currentScoreSecond = 0;
      currentScore2.textContent = currentScoreSecond;
    }
  } else {
    if (player1.classList.contains('player--active')) {
      currentScoreFirst += diceNumber;
      currentScore1.textContent = currentScoreFirst;
    } else {
      currentScoreSecond += diceNumber;
      currentScore2.textContent = currentScoreSecond;
    }
  }
});
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    totalScore1 += currentScoreFirst;
    score1.textContent = totalScore1;
    currentScoreFirst = 0;
    currentScore1.textContent = currentScoreFirst;
    if (totalScore1 >= 100) {
      player1.classList.add('player--winner');
      useButtons(true);
    } else {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else {
    totalScore2 += currentScoreSecond;
    score2.textContent = totalScore2;
    currentScoreSecond = 0;
    currentScore2.textContent = currentScoreSecond;
    if (totalScore2 >= 100) {
      player2.classList.add('player--winner');
      useButtons(true);
    } else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
});
document.querySelector('.btn--new').addEventListener('click', function () {
  if (player1.classList.contains('player--winner')) {
    player1.classList.remove('player--winner');
  } else {
    player1.classList.add('player--active');
    player2.classList.remove('player--winner');
    player2.classList.remove('player--active');
  }
  totalScore1 = 0;
  totalScore2 = 0;
  score1.textContent = totalScore1;
  score2.textContent = totalScore2;
  currentScoreFirst = 0;
  currentScoreSecond = 0;
  currentScore1.textContent = currentScoreFirst;
  currentScore2.textContent = currentScoreSecond;
  dice.hidden = true;
  useButtons(false);
});

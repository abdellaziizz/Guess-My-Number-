'use strict';
const SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = SecretNumber;
function displayMessage(message) {
  console.log(` ${message} `);
}
document.querySelector('.check').addEventListener('click', () => {
  displayMessage(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  if (guess > SecretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
  if (guess < SecretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
  if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  }
});

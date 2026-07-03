'use strict';
const SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
function displayMessage(message) {
  console.log(` ${message} `);
}
document.querySelector('.check').addEventListener('click', () => {
  displayMessage(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //when guess is too high
  if (guess > SecretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
  //when guess is too low
  if (guess < SecretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
  // When player wins
  if (guess === SecretNumber) {
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

'use strict';
const SecretNumber = Math.trunc(Math.random() * 20 + 1);
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
    document.querySelector('.message').textContent = 'Too High!';
  }
  if (guess < SecretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
  }
  if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  }
});

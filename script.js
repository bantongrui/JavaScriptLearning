'use strict'
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number!'

// console.log(document.querySelector('.guess').value)
let number = Math.trunc(Math.random() * 20) + 1
let score = 20
let hignScore = 0
document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!'
    }
    else if (guess < number) {
      score--
      if (score <= 0) {
        document.querySelector('.message').textContent = 'Lost Games!'
        document.querySelector('.score').textContent = score
        document.querySelector('.number').textContent = number
        document.querySelector('body').style.backgroundColor = '#FF0000'
      }
      else {
        document.querySelector('.message').textContent = 'Low!'
        document.querySelector('.score').textContent = score
      }

    }
    else if (guess > number) {
      score--
      if (score <= 0) {
        document.querySelector('.message').textContent = 'Lost Games!'
        document.querySelector('.score').textContent = score
        document.querySelector('.number').textContent = number
        document.querySelector('body').style.backgroundColor = '#FF0000'
      }
      else {
        document.querySelector('.message').textContent = 'Hign!'
        document.querySelector('.score').textContent = score
      }

    }
    else {
      document.querySelector('.message').textContent = 'Correct Number!'
      if (score > hignScore) hignScore = score
      document.querySelector('.highscore').textContent = hignScore
      document.querySelector('.number').textContent = number

      document.querySelector('body').style.backgroundColor = '#60b347'
    }
  }
)

document.querySelector('.again').addEventListener(
  'click',
  function () {
    score = 20
    number = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.message').textContent = 'Start guessing...!'
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222'
  }
)
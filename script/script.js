'use strict';

function guesseNum() {
  let num = 1 + (Math.random() * 100);
  num = Math.round(num);
  let guesseCount = 1;
  let startGame = confirm('Угадай число от 1 до 100');

  function game() {
    let guesse = prompt('Введи число от 1 до 100');

    function newGame() {
      let new = confirm('Хочешь сыграть ещё раз?');
      if (new === true) {
        guesseNum();
      } else {
        alert('Всего доброго!');
      }
    };

    function count() {
      if (guesseCount < 10) game();
      if (guesseCount == 10) {
        alert('Попытки закончились!');
        newGame();
      }
    };
    if (guesse == num) {
      alert('Поздравляю ты угадал!');
      newGame();
    } else {
      if (guesse < num) {
        alert('Загаданное число меньше! Осталось попыток ' + (10 - guesseCount++))
      } else if (guesse > num) {
        alert('Загаданное число больше! Осталось попыток ' + (10 - guesseCount++))
      } else {
        alert('Введите число!');
        game();
      }
    }
  }
}
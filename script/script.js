'use strict';

function guesseNum() {
  let num = 1 + (Math.random() * 100);
  num = Math.round(num);
  let guesseCount = 1;
  let startGame = confirm('Угадай число от 1 до 100');
  if (startGame === true) {
    game();
  } else {
    alert('Игра окончена')

  };



  function game() {
    let guesse = prompt('Введи число от 1 до 100');

    function newGame() {
      let newG = confirm('Хочешь сыграть ещё раз?')
      if (newG === true) {
        guesseNum();
      } else {
        alert('Игра окончена');
        return false;
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
        alert('Загаданное число больше! Осталось попыток ' + (10 - guesseCount++));
        count();
      } else if (guesse > num) {
        alert('Загаданное число меньше! Осталось попыток ' + (10 - guesseCount++));
        count();
      } else {
        alert('Введите число!');
        game();
      }
    }
  }
  game();
}
guesseNum()
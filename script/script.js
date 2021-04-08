'use strict';


let x = 1 + (Math.random() * 100);
x = Math.round(x);



//let guesseFaild = alert('');


function comparsion() {
  let guesseCount = 1;
  let userGuesse = +prompt('Введите число!');
  let att = confirm('Попытка № ' + guesseCount);

  //let faild = alert(guesseFaild);

  if (userGuesse == x) {
    return alert('Вы угадали!');


  } else {
    if (userGuesse > x) {
      alert('Загаданное число меньше!')
    }
    if (userGuesse < x) {
      alert('Загаданное число больше!')
    }
  }
  if (guesseCount != 10) {
    comparsion();
  } else if (guesseCount === 10) {
    alert('Game Over!');
  }
  guesseCount++
  //guesseFaild = userGuesse + '';
}

comparsion();
console.log(x);
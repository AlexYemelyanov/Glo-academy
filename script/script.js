'use strict';


const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const body = document.querySelector('body');

const elems = document.querySelectorAll('li');
const heading = document.querySelectorAll('a');
const newElem = document.createElement('li')




book[0].before(book[1]);
book[2].before(book[4]);
book[4].after(book[3]);
book[5].after(book[2]);

adv.remove();

elems[2].before(elems[3]);
elems[2].before(elems[6]);
elems[2].before(elems[8]);
elems[2].before(elems[4]);
elems[2].before(elems[5]);
elems[2].before(elems[7]);
elems[2].before(elems[9]);

elems[48].before(elems[55]);
elems[48].before(elems[49]);
elems[48].before(elems[50]);
elems[51].before(elems[52]);
elems[51].before(elems[53]);

heading[4].textContent = 'Книга 3. this и Прототипы Объектов';

newElem.textContent = 'Глава 8: За пределами ES6';
elems[26].before(newElem);

body.style.backgroundImage = "url(image/you-dont-know-js.jpg)";





console.log(elems);
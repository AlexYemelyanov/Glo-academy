'use strict';


let randomizer = document.getElementById('change'),
  textIns = document.getElementById('color');





function randomNum() {
  let rndNumber = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  textIns.innerHTML = rndNumber;

  document.body.style.backgroundColor = textIns.textContent;
};


randomizer.addEventListener('click', randomNum);
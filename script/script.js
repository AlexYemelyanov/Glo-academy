'use strict';
let body = document.getElementsByTagName('body');

function DomElement(selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
}

DomElement.prototype.create = function () {
  if (this.selector.startsWith('.')) {
    let div = document.createElement('div');
    div.className = (this.selector.substring(1));
    div.style.cssText = `height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
    position: ${this.position};
    `;
    div.innerHTML = '<h1>Привет</h1>';
    return div;
  }
  if (this.selector.startsWith('#')) {
    let p = document.createElement('p');
    p.id = (this.selector.substring(1));
    p.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
    position: ${this.position};
    `;
    p.textContent = 'Шалом!';
    return p;
  }
};

let check = new DomElement(".formula", "100px", "100px", "red", "10px", "absolute");
let pageInsert = check.create();
document.body.appendChild(pageInsert);
document.addEventListener('DOMContentLoaded', function () {
  alert('Dom completed');

});

function moveRect(event) {

  let formula = document.querySelector(".formula");

  let compStyle = window.getComputedStyle(formula);

  let left = parseInt(compStyle.marginLeft);
  let top = parseInt(compStyle.marginTop);

  switch (event.key) {

    case "ArrowLeft":
      if (left > 0)
        formula.style.marginLeft = left - 10 + 'px';
      break;
    case "ArrowUp":
      if (top > 0)
        formula.style.marginTop = top - 10 + 'px';
      break;
    case "ArrowRight":
      if (left < document.documentElement.clientWidth - 100)
        formula.style.marginLeft = left + 10 + 'px';
      break;
    case "ArrowDown":
      if (top < document.documentElement.clientHeight - 100)
        formula.style.marginTop = top + 10 + 'px';
      break;
  }
  console.log(event.key);
}

addEventListener("keydown", moveRect);
'use strict';
let body = document.getElementsByTagName('body');

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.create = function () {
  if (this.selector.startsWith('.')) {
    let div = document.createElement('div');
    div.className = (this.selector.substring(1));
    div.style.cssText = `height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
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
    `;
    p.textContent = 'Шалом!';
    return p;
  }
};

let check = new DomElement("#formula", "100px", "100px", "red", "20px");
let pageInsert = check.create();
document.body.appendChild(pageInsert);
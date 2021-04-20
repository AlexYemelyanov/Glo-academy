'use strict';

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
    div.className = (this.selector);
    return div;
  }
  if (this.selector.startsWith('#')) {
    let p = document.createElement('p');
    p.idName(this.selector);
  }
};

let check = new DomElement(".formula");
console.log(check.create());
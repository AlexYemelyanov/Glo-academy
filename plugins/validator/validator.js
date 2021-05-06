class Validator {
  constructor({
    selector,
    pattern = {},
    method
  }) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;

    this.elementsForm = [...this.form.elements].filter(item => {
      return item.tagName.toLowerCase() !== 'button' &&
        item.type !== 'button';
    });

    this.error = new Set();
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('change', this.chekIt.bind(this)));
    this.form.addEventListener('submit', e => {
      this.elementsForm.forEach(elem => this.checkIt({
        target: elem
      }));
      if (this.error.size) {
        e.preventDefault();
      }
    });

  }

  isValid(elem) {
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      },
    };
    if (this.method) {
      const method = this.method[elem.id];

      if (method) {
        return method.every((item) => {
          return validatorMethod[item[0]](elem, this.pattern[item[1]]);

        });
      }
    } else {
      console.warn('Необходимо передать id полей ввода и методы проверки этих полей!')
    }
    return true;
  }

  chekIt(event) {
    const target = event.target;

    if (this.isValid(target)) {
      this.showSucsess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem) {
    console.log(elem.nextElementSibling);
    elem.classList.remove('sucsess');
    elem.classList.add('error');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    };
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSucsess(elem) {
    elem.classList.remove('error');
    elem.classList.add('sucsess');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
    input.sucsess{
      border: 2px solid green
    }
    input.error {
      border: 2px solid red
    }
    .validator - error{
      font-size: 12px;
      font-family: sans-serif;
      color: red
    }
    `;
    document.head.appendChild(style);
  }

  setPattern() {
    if (!this.pattern.phone) {
      this.setPattern.phone = /^\+?[78][()]*\d{10}$/;
    }
    if (!this.pattern.email) {
      this.setPattern.email = /^\w+@\w+\.\w{2,}$/;
    }
    if (!this.pattern.name) {
      this.setPattern.name = /[^А-Яа-яЁё]/;
    }
    if (!this.pattern.message) {
      this.setPattern.message = /[^А-Яа-яЁё\s,\.]/;
    }

  }
}
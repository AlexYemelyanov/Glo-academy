const validation = () => {
  let formName1 = document.getElementById('form1-name'),
    formEmail1 = document.getElementById('form1-email'),
    formPhone1 = document.getElementById('form1-phone'),
    form1 = document.getElementById('form1'),
    formName2 = document.getElementById('form2-name'),
    formEmail2 = document.getElementById('form2-email'),
    formPhone2 = document.getElementById('form2-phone'),
    form2 = document.getElementById('form2'),
    message = document.getElementById('form2-message'),
    calcSqure = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    calcBlock = document.querySelector('.calc-block'),
    form3 = document.getElementById('form3');


  form1.addEventListener('submit', valid1);
  form2.addEventListener('submit', valid2);
  form3.addEventListener('submit', valid3);

  const elementForm1 = [],
    elementForm2 = [],
    elementForm3 = [];
  for (const elem of form1.elements) {
    if (elem.tagName.toLowerCase() !== 'button' &&
      elem.type !== 'button') {
      elementForm1.push(elem);
    }
  };
  for (const elem of form2.elements) {
    if (elem.tagName.toLowerCase() !== 'button' &&
      elem.type !== 'button') {
      elementForm2.push(elem);
    }
  };
  for (const elem of form3.elements) {
    if (elem.tagName.toLowerCase() !== 'button' &&
      elem.type !== 'button') {
      elementForm3.push(elem);
    }
  };

  function valid1(event) {
    elementForm1.forEach((elem) => {

      if (!elem.value) {
        event.preventDefault();
      }
    })
  };

  function valid2(event) {
    elementForm1.forEach((elem) => {

      if (!elem.value) {
        event.preventDefault();
      }
    })
  };

  function valid3(event) {
    elementForm1.forEach((elem) => {

      if (!elem.value) {
        event.preventDefault();
      }
    })
  };


  form1.addEventListener('input', (e) => {
    formEmail1.value = formEmail1.value.replace(/[^A-Za-z@!_.~*'\-]*/ig, '');
    formName1.value = formName1.value.replace(/[^А-Яа-яЁё\s]/ig, '');
    formPhone1.value = formPhone1.value.replace(/[^\+\d]/, '')
    if (e.target === formEmail1) {

      if ((e.keyCode >= 65 && e.keyCode <= 90) ||
        e.keyCode === 50 || e.keyCode === 49 ||
        e.keyCode === 56 || e.keyCode === 222 || e.keyCode === 188 ||
        e.keyCode === 189 || e.keyCode === 190 || e.keyCode === 192 ||
        e.keyCode === 16) {
        return;
      } else {
        e.preventDefault();
      };
    }
    if (e.target === formName1) {

      if ((e.keyCode >= 65 && e.keyCode <= 90) ||
        e.keyCode === 186 || e.keyCode === 190 || e.keyCode === 16 ||
        e.keyCode === 219 || e.keyCode === 222 || e.keyCode === 188 ||
        e.keyCode === 189 || e.keyCode === 221 || e.keyCode === 192 ||
        e.keyCode === 16 || e.keyCode === 32) {
        return;
      } else {
        e.preventDefault();
      }
    }
    if (e.target === formPhone1) {
      console.log('im here')
      if ((e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 16 || e.keyCode === 189 || e.keyCode === 187) {
        return;
      } else {
        e.preventDefault();
      }
    }

  })

  form2.addEventListener('input', (e) => {
    formEmail2.value = formEmail1.value.replace(/[^A-Za-z@!_.~*'\-]*/ig, '');
    formName2.value = formName2.value.replace(/[^А-Яа-яЁё\s]/ig, '');
    message.value = message.value.replace(/[^А-Яа-яЁё\-\s\d,.!?]/ig, '');
    formPhone2.value = formPhone2.value.replace(/[^\+\d]/, '')
    if (e.target === formEmail2) {
      console.log('im here')
      if ((e.keyCode >= 65 && e.keyCode <= 90) ||
        e.keyCode === 50 || e.keyCode === 49 ||
        e.keyCode === 56 || e.keyCode === 222 || e.keyCode === 188 ||
        e.keyCode === 189 || e.keyCode === 190 || e.keyCode === 192 ||
        e.keyCode === 16) {
        return;
      } else {
        e.preventDefault();
      };
    }
    if (e.target === formName2) {

      if ((e.keyCode >= 65 && e.keyCode <= 90) ||
        e.keyCode === 186 || e.keyCode === 190 || e.keyCode === 16 ||
        e.keyCode === 219 || e.keyCode === 222 || e.keyCode === 188 ||
        e.keyCode === 189 || e.keyCode === 221 || e.keyCode === 192 ||
        e.keyCode === 16) {
        return;
      } else {
        e.preventDefault();
      }
    }
    if (e.target === formPhone2) {
      console.log('im here')
      if ((e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105) ||
        e.keyCode === 16 || e.keyCode === 189 || e.keyCode === 16 || e.keyCode === 187) {
        return;
      } else {
        e.preventDefault();
      }
    }
    if (e.target === message) {
      if ((e.keyCode >= 65 && e.keyCode <= 90) ||
        e.keyCode === 186 || e.keyCode === 190 || e.keyCode === 16 ||
        e.keyCode === 219 || e.keyCode === 222 || e.keyCode === 188 ||
        e.keyCode === 189 || e.keyCode === 221 || e.keyCode === 192 ||
        e.keyCode === 32) {
        return;
      } else {
        e.preventDefault();
      }
    }
  })

  calcBlock.addEventListener('keydown', (e) => {
    if (e.target === calcSqure || e.target === calcCount || e.target === calcDay) {

      if ((e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105)) {
        return;
      } else {
        e.preventDefault();
      }
    }
  });

  formEmail1.addEventListener('blur', (e) => {
    formEmail1.value = formEmail1.value.replace(/\s+/g, ' ').trim()
    formEmail1.value = formEmail1.value.replace(/[-]+/g, '-')
    formEmail1.value = formEmail1.value.replace(/^-+|-+$/g, '')
    console.log(e.target.value);
  });
  formEmail2.addEventListener('blur', (e) => {
    formEmail2.value = formEmail2.value.replace(/\s+/g, ' ').trim()
    formEmail2.value = formEmail2.value.replace(/[-]+/g, '-')
    formEmail2.value = formEmail2.value.replace(/^-+|-+$/g, '')
    console.log(e.target.value);
  });
  formName1.addEventListener('blur', (e) => {
    formName1.value = formName1.value.replace(/\s+/g, ' ').trim()
    formName1.value = formName1.value.replace(/[-]+/g, '-')
    formName1.value = formName1.value.replace(/^-+|-+$/g, '');
    formName1.value = formName1.value.replace(formName1.value[0], formName1.value[0].toUpperCase())
    console.log(e.target.value);
  });
  formName2.addEventListener('blur', (e) => {
    formName2.value = formName2.value.replace(/\s+/g, ' ').trim()
    formName2.value = formName2.value.replace(/[-]+/g, '-')
    formName2.value = formName2.value.replace(/^-+|-+$/g, '');
    formName2.value = formName2.value.replace(formName2.value[0], formName2.value[0].toUpperCase())
    console.log(e.target.value);
  });
  message.addEventListener('blur', (e) => {
    message.value = message.value.replace(/\s+/g, ' ').trim()
    message.value = message.value.replace(/[-]+/g, '-')
    message.value = message.value.replace(/^-+|-+$/g, '')
    console.log(e.target.value);
  });


};

export default validation;
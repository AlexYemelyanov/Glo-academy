const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    sucsessMessage = 'Спасибо! Мы скоро свяжемся с вами!';
  const form = document.getElementById('form1'),
    form2 = document.getElementById('form2'),
    form3 = document.getElementById('form3');

  const statusMessage = document.createElement('div');

  statusMessage.style.cssText = 'font-size: 3rem; color: red;';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);

    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });
    console.log(body)
    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network is not 200!')
        }
        statusMessage.textContent = sucsessMessage;

      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
      })
      .finally(() => {
        form.reset();
        setTimeout(() => {
          statusMessage.remove();
        }, 3000);
      });
  });
  form2.addEventListener('submit', (e) => {
    e.preventDefault();
    form2.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData2 = new FormData(form2);
    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network is not 200 !')
        }
        statusMessage.textContent = sucsessMessage;
      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
      })
      .finally(() => {
        form2.reset();
        setTimeout(() => {
          statusMessage.remove();
        }, 3000);
      });
  });
  form3.addEventListener('submit', (e) => {
    e.preventDefault();
    form3.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData3 = new FormData(form3);

    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network is not 200!')
        }
        statusMessage.textContent = sucsessMessage;
      })
      .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
      })
      .finally(() => {
        form3.reset();
        setTimeout(() => {
          statusMessage.remove();
        }, 3000);
      });
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(body)
    });

    /*return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          resolve();
        } else {
          reject(request.status);
        }
      })
      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'aplication/json');
      request.send(JSON.stringify(body));
    })*/

  }


};

export default sendForm;
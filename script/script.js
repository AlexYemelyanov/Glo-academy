window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  //Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining(deadline) {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        t = (dateStop - dateNow) / 1000,
        seconds = Math.floor(t % 60),
        minutes = Math.floor((t / 60) % 60),
        hours = Math.floor(t / 60 / 60) % 24;

      return {
        'total': t,
        hours,
        minutes,
        seconds
      };
    }


    function updateClock() {
      let t = getTimeRemaining(deadline);

      if (t.total <= 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        clearInterval(timeinterval);
        return true;
      }

      timerHours.textContent = ('0' + t.hours).slice(-2);
      timerMinutes.textContent = ('0' + t.minutes).slice(-2);
      timerSeconds.textContent = ('0' + t.seconds).slice(-2);



    }
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  }
  var deadline = new Date(Date.parse(new Date()) + 154689 * 1000);
  countTimer(deadline);

  // Menu
  const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu');


    const handlerMenu = () => {
      menu.classList.toggle('active-menu')
    };
    menu.addEventListener('click', (event) => {
      let target = event.target;
      console.log(target);
      target = target.closest('a');
      if (target) {
        console.log(target)
        handlerMenu();
      }
    })

    btnMenu.addEventListener('click', handlerMenu);




  };

  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      //  popupClose = document.querySelectorAll('.popup-close'),
      popupContent = document.querySelector('.popup-content');
    let count = 0;
    let animatedInterval;
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        console.log(popupContent.getBoundingClientRect())
        let animateContent = () => {
          animatedInterval = requestAnimationFrame(animateContent);
          count++;
          if (innerWidth > 768) {
            if (count < 40) {
              popupContent.style.left = count + '%';
            } else {
              cancelAnimationFrame(animatedInterval);
            }
          } else {
            cancelAnimationFrame(animatedInterval);
            popupContent.style.left = document.clientWidth / 2 + 'px';
          }
        }
        animatedInterval = requestAnimationFrame(animateContent);
      })

    })


    popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
        count = -10;
        popupContent.style.left = count + 'px';
        cancelAnimationFrame(animatedInterval);
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
          count = -10;
          popupContent.style.left = count + 'px';
          cancelAnimationFrame(animatedInterval);
        }
      }

    })

  }
  togglePopUp();

  // Tab's
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');
    const toogleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toogleTabContent(i);
          }
        });
      }
    })
  };

  tabs();

  // Slider
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),

      slider = document.querySelector('.portfolio-content');
    let currentSlide = 0,
      dot = document.querySelectorAll('.dot'),
      interval;

    let addDot = () => {
      slide.forEach(() => {
        let parentDot = document.querySelector('.portfolio-dots');
        let newDot = document.createElement('li');
        newDot.classList.add('dot');
        parentDot.append(newDot)
      });

      if (dot === 0) {
        newDot.classList.add('dot-active');
      }

    }
    addDot();
    dot = document.querySelectorAll('.dot');



    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    }

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };


    const stoptSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      };
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      } else if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
        stoptSlide();
      }
    });
    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')) {
        startSlide(1500);
      }

    })

    startSlide(1500);
  };
  slider();

  //Change img
  const changeImg = () => {
    let command = document.getElementById('command'),
      commandPhoto = document.querySelectorAll('.command__photo');



    command.addEventListener('mouseover', () => {
      if (event.target.matches('.command__photo')) {
        event.target.alt = event.target.src;
        event.target.src = event.target.dataset.img;
      }

    })
    command.addEventListener('mouseout', () => {
      console.log(event.target.src)

      if (event.target.matches('.command__photo')) {
        event.target.src = event.target.alt;
      }
    })
  };
  changeImg();

  //Validation 
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
      calcBlock = document.querySelector('.calc-block');



    form1.addEventListener('input', (e) => {
      formEmail1.value = formEmail1.value.replace(/[^A-Za-z@!_.~*'\-]*/ig, '');
      formName1.value = formName1.value.replace(/[^А-Яа-я\-\s]/ig, '');
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
        if ((e.keyCode >= 48 && e.keyCode <= 57) ||
          (e.keyCode >= 96 && e.keyCode <= 105) ||
          e.keyCode === 16 || e.keyCode === 189) {
          return;
        } else {
          e.preventDefault();
        }
      }

    })

    form2.addEventListener('input', (e) => {
      formEmail2.value = formEmail1.value.replace(/[^A-Za-z@!_.~*'\-]*/ig, '');
      formName2.value = formName1.value.replace(/[^А-Яа-я\-\s]/ig, '');
      message.value = formName1.value.replace(/[^А-Яа-я\-\s]/ig, '');
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
        if ((e.keyCode >= 48 && e.keyCode <= 57) ||
          (e.keyCode >= 96 && e.keyCode <= 105) ||
          e.keyCode === 16 || e.keyCode === 189 || e.keyCode === 16) {
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
          e.keyCode === 16 || e.keyCode === 32) {
          return;
        } else {
          e.preventDefault();
        }
      }
    })

    calcBlock.addEventListener('input', (e) => {
      if (e.target === calcSqure || calcCount || calcDay) {

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
  validation();

  //Calculator
  const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');


    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;

      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && ccalcDay.value < 10) {
        dayValue *= 1.5;
      }


      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      totalValue.textContent = total;
    }

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;
      if (target.matches('.calc-type') || target.matches('.calc-square') ||
        target.matches('.calc-day') || target.matches('.calc-count')) {
        countSum();
      }
    })
  };
  calculator(100);
});
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
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
      menu.classList.toggle('active-menu')
    };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);


    menuItems.forEach((elems) => elems.addEventListener('click', handlerMenu))
  };

  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelectorAll('.popup-close'),
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
            if (count < innerWidth / 2) {
              popupContent.style.left = count + 'px';
            } else {
              cancelAnimationFrame(animatedInterval);
            }
          } else {
            cancelAnimationFrame(animatedInterval);
            popupContent.style.left = innerWidth / 2 + 'px';
          }
        }
        animatedInterval = requestAnimationFrame(animateContent);
      })

    })
    popupClose.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'none';
        count = -400;
        popupContent.style.left = count + 'px';
        cancelAnimationFrame(animatedInterval);
        console.log(popupContent.getBoundingClientRect())
      })

    })


  }
  togglePopUp();
});
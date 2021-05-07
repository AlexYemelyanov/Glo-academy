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

};

export default togglePopUp;
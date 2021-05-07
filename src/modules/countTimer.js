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



  export default countTimer;
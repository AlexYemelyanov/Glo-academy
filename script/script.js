'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = document.getElementById('fordays');
const todayDay = new Date("2021-04-11");
console.log(week.length);

const days = () => {
  week.forEach((item, i) => {
    let newdiv = document.createElement('div');
    if (i === (6 + todayDay.getDay()) % 7) {
      //console.log(todayDay.getDay());
      newdiv.classList.add('today');
      newdiv.textContent = week[i];
    }
    if (item == 'Суббота' || item == 'Воскресенье') {
      newdiv.classList.add('italic');
      newdiv.textContent = week[i];
    } else {
      newdiv.textContent = week[i];
    }
    day.appendChild(newdiv);

  });
};
days();

//console.log(todayDay);
//console.log(todayDay.getDay())
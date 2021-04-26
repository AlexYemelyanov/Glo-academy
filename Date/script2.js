function hellow() {
  const h = (new Date()).getHours();
  if (h > 23 || h < 7) document.getElementById('hellow').textContent = 'Доброй ночи!';
  if (h > 6 && h < 12) document.getElementById('hellow').textContent = 'Доброе утро!';
  if (h > 11 && h < 19) document.getElementById('hellow').textContent = 'Добрый день!';
  if (h > 18 && h < 24) document.getElementById('hellow').textContent = 'Добрый вечер!';
}


function getDayForm() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let strTime = 'Текущее время: ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  return strTime;
}


function newTypeOfDate() {
  let date = new Date();

  let weekday = date.getDay();
  console.log(weekday);
  let options = {
    weekday: 'long'
  };
  let tdDay = new Intl.DateTimeFormat('ru-RU', options).format(date);


  return document.getElementById('today').textContent = `Сегодня:  ${tdDay}`;


}


setInterval(function () {
  document.getElementById('current_date_time').innerHTML = getDayForm()
}, 1000);



function daysLeftNewYear() {
  let today = new Date();
  //Можно установить любую дату
  let nextDate = new Date("December 31, 2021");
  //Количество миллисекунд в одном дне
  let msPerDay = 24 * 60 * 60 * 1000;
  //Высчитываем количество дней
  let daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
  let dayname = "";
  let ds = "" + daysLeft;
  //Вырезаем последнею цифру
  let dd = parseInt(ds.substr(ds.length - 1));
  console.log(dd)
  //Склоняем слово ДЕНЬ
  console.log(daysLeft)
  if (daysLeft > 4 && daysLeft < 21) {
    dayname = " дней";
  } else
  if (dd == 1) {
    dayname = " день";
  } else
  if (dd === 2 || dd === 3 || dd === 4) {
    dayname = " дня";
  } else {
    dayname = " дней";
  }
  //Выводим надпись в документ
  if (daysLeft < 0) {
    document.getElementById('days_left_new_year').textContent = "С новым годом!!!"
  } else {
    if (daysLeft == 0) {
      document.getElementById('days_left_new_year').textContent = "Завтра новый год!"
    } else {
      document.getElementById('days_left_new_year').textContent = `До нового года осталось  ${daysLeft}  ${dayname}  !`;
    }
  }
}
hellow();
newTypeOfDate();
daysLeftNewYear();
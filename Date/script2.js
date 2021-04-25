function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

function newTypeOfDate() {
  let date = new Date();

  let weekday = date.getDay();
  console.log(weekday);
  let options = {
    weekday: 'long'
  };
  let tdDay = new Intl.DateTimeFormat('ru-RU', options).format(date);
  let day = date.getDate();
  let month = date.getMonth();
  let monthArr = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return 'Сегодня ' + tdDay + ',' + day + ' ' + monthArr[month] + ' ' + year + ' года, ' + hours + ' ' + getNoun(hours, 'час', 'часа',
    'часов') + ' ' + minutes + ' ' + getNoun(minutes, 'минута', 'минуты', 'минут') + ' ' + seconds + ' ' + getNoun(seconds, 'секунда', 'секунды', 'секунд')

}
setInterval(function () {
  document.getElementById('current_date_time').innerHTML = newTypeOfDate();
}, 1000);
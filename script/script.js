function getArgument(str) {
  str = prompt('Введите любой текст: ');
  str = str.trim();
  if (!isNaN(str)) str += '  Это не строка!';
  if (str.length <= 30) return alert(str);
  str = str.slice(0, 30) + '...';
  return alert(str);
};

getArgument();
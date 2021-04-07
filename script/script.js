function getArgument(str) {
  if (typeof str != 'string') str += '  Это не строка!';
  if (str.length <= 30) return alert(str = str.trim());
  str = str.slice(0, 30) + '...';
  return alert(str = str.trim());
};

console.log(getArgument('     ghbdtn ijhgijgwpopwfqojbopqjpka'));
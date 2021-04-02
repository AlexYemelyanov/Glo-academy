let money = 1000;
let income = 'Фриланс';
let addExpenses = 'Квартира, машина, интернет, продукты';
let deposit = true;
let mission = 100000;
let period = 12;
let butgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Доход в день рублей: ' + Math.floor(butgetDay * 100) / 100);
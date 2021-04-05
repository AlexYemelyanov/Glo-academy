let money = +prompt('Ваш месячный доход:');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 100000;
let period = 12;
let expenses1 = prompt('Введите обязательную статью расходов:');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = +prompt('Во сколько это обойдется?');
let budgetMonth = money - (amount1 + amount2);
let butgetDay = budgetMonth / 30;
let ambition = Math.ceil(mission / budgetMonth);
let lvlIncome;




/*if (money >= 30000) {
  message = 'У вас высокий уровень дохода';
} else if (10000 == money < 30000) {
  message = 'У вас средний уровень дохода';
} else if (0 == money < 9999) {
  message = 'У вас низкий уровень дохода';
} else {
  message = 'Что-то пошло не так';
};
*/


lvlIncome = (money >= 30000) ? 'У вас высокий уровень дохода!' :
  (10000 <= money) ? 'У вас средний уровень дохода!' :
  (0 <= money) ? 'У вас низкий уровень дохода!' :
  'Что-то пошло не так';


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день: ' + Math.floor(butgetDay));
console.log('Бюджет на месяц: ' + budgetMonth);
console.log(lvlIncome);
console.log('Цель будет достигнута за ' + ambition + ' месяц(-а/-ев)')
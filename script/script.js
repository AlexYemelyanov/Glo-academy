let money = +prompt('Ваш месячный доход:');
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 100000;
let expenses1 = prompt('Введите обязательную статью расходов:');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = +prompt('Во сколько это обойдется?');
let getExpensesMonth;
let getAccumulatedMonth;
let accumulatedMonth;
let butgetDay;
let getTargetMonth;
let ambition;
let getStatusInCome;
let showTypeOf;


getStatusInCome = function () {
  if (money >= 30000) {
    return ('У вас высокий уровень дохода!');
  } else if (10000 <= money) {
    return ('У вас средний уровень дохода!');
  } else if (0 <= money) {
    return ('У вас низкий уровень дохода!');
  } else {
    return ('Что-то пошло не так');
  }
};

showTypeOf = function (data) {
  console.log(typeof (data));
};

getExpensesMonth = function () {
  return amount1 + amount2;
};

getAccumulatedMonth = function () {
  return money - getExpensesMonth();
};

accumulatedMonth = getAccumulatedMonth();

butgetDay = accumulatedMonth / 30;

getTargetMonth = function () {
  return Math.ceil(mission / accumulatedMonth);
};

ambition = getTargetMonth();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(getExpensesMonth());
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день: ' + Math.floor(butgetDay));
console.log('Бюджет на месяц: ' + accumulatedMonth);
console.log('Цель будет достигнута за ' + ambition + ' месяц(-а/-ев)')
console.log(getStatusInCome());
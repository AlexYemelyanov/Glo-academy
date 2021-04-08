let isNumber;

let money;
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 100000;
let expenses = [];
let getExpensesMonth;
let getAccumulatedMonth;
let accumulatedMonth;
let butgetDay;
let getTargetMonth;
let ambition;
let getStatusInCome;
let showTypeOf;
let expensesAmount;
let start;

isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};


start = function () {

  do {
    money = prompt('Ваш месячный доход:');
  }

  while (!isNumber(money))

};
start();

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
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    expenses[i] = prompt('Введите обязательную статью расходов:');

    sum += +prompt('Во сколько это обойдется?');

    while (!isNumber(sum)) {
      sum += +prompt('Во сколько это обойдется?');
    };
  }

  return sum;
};

expensesAmount = getExpensesMonth();

getAccumulatedMonth = function () {
  return money - expensesAmount;
};

accumulatedMonth = getAccumulatedMonth();

butgetDay = accumulatedMonth / 30;

getTargetMonth = function () {
  if (Math.ceil(mission / accumulatedMonth) > 0)
    return 'Цель будет достигнута за ' + Math.ceil(mission / accumulatedMonth) + ' месяц(-а, -ев)';
  else if (Math.ceil(mission / accumulatedMonth) < 0)
    return 'Цель не будет достигнута!';
};

ambition = getTargetMonth();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(expensesAmount);
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на день: ' + Math.floor(butgetDay));
console.log('Бюджет на месяц: ' + accumulatedMonth);
console.log(ambition);
console.log(getStatusInCome());
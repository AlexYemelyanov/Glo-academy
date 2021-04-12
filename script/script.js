let isNumber;
isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
let isNotANumber;
isNotANumber = function (n) {
  return isNaN(parseFloat(n))
};



let start = function () {
  do {
    money = prompt('Ваш месячный доход:');
  }
  while (!isNumber(money))
};
start();
let appData = {
  inCome: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  accumulatedMonth: 0,
  expensesMonth: 0,
  butgetDay: 0,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 3,

  getStatusInCome() {
    if (money >= 30000) {
      return ('У вас высокий уровень дохода!');
    } else if (10000 <= money) {
      return ('У вас средний уровень дохода!');
    } else if (0 <= money) {
      return ('У вас низкий уровень дохода!');
    } else {
      return ('Что-то пошло не так');
    }
  },

  getBudget() {
    appData.accumulatedMonth = money - appData.expensesMonth;
    appData.butgetDay = appData.accumulatedMonth / 30;
  },
  getTargetMonth() {
    if (Math.ceil(appData.mission / appData.accumulatedMonth) > 0)
      return 'Цель будет достигнута за ' + Math.ceil(appData.mission / appData.accumulatedMonth) + ' месяц(-а, -ев)';
    else if (Math.ceil(appData.mission / appData.accumulatedMonth) < 0)
      return 'Цель не будет достигнута!';
  },

  asking: function () {


    if (('Есть ли у вас дополнительный доход?')) {
      let itemIncome = prompt('Какой у вас дополнительный доход?');
      while (!isNotANumber(itemIncome)) {
        itemIncome = prompt('Какой у вас дополнительный доход?');
      };
      let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
      while (!isNumber(cashIncome)) {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
      }
      appData.inCome[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую:');
    appData.addExpenses = addExpenses.split(',').map(word => word[0].toUpperCase() + word.substring(1)).join();
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
  getExpensesMonth() {

    let sum = 0;
    let count = [];

    function countFunc() {
      let exp = prompt('Введите обязательную статью расходов:');
      while (!isNotANumber(exp)) {
        exp = prompt('Введите обязательную статью расходов:');
      };
      sum = +prompt('Во сколько это обойдется?');
      appData.expenses[exp] = sum;
      while (!isNumber(sum)) {
        sum = +prompt('Во сколько это обойдется?');
      }
    };

    for (let i = 0; i < 2; i++) {
      count[i] = countFunc();

    }
    for (let key in this.expenses) {
      appData.expensesMonth = this.expenses[key] + this.expenses[key];
    }
    return appData.expensesMonth
  },
  getInfoDeposit() {
    if (appData.deposit) {
      appData.percentDeposit = prompt('Какой годовой процент?');
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = prompt('Какой годовой процент?');
      }
      appData.moneyDeposit = prompt('Какая сумма заложена?');
      while (!isNumber(appData.moneyDeposit)) {
        appData.moneyDeposit = prompt('Какая сумма заложена?');
      }
    }
  },
  calcSaveMoney: function () {
    return appData.accumulatedMonth * appData.period;
  }
}







appData.asking();

appData.getInfoDeposit();

appData.getExpensesMonth();

appData.getBudget();

appData.getTargetMonth();



















console.log(appData.expensesMonth);
console.log(appData.addExpenses)

console.log(appData.getTargetMonth());
console.log(appData.getStatusInCome());
console.log(appData.calcSaveMoney());

for (let key in appData) {
  console.log('Свойство: ' + key + ' Значение: ' + appData[key]);
}
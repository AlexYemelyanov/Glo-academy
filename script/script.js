let isNumber;
isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
let isNotANumber;
isNotANumber = function (n) {
  return isNaN(parseFloat(n))
};


const btnStart = document.getElementById('start');
const inComeAdd = document.getElementsByTagName('button')[0];
const expensesAdd = document.getElementsByTagName('button')[1];
const depositCheck = document.querySelector('#deposit-check');
const additionalInComeItem = document.querySelectorAll('.additional_income-item');
const budgetDayValue = document.getElementsByClassName('result-total')[1];
const expensesMonthValue = document.getElementsByClassName('result-total')[2];
const additionalInComeValue = document.getElementsByClassName('result-total')[3];
const additionalExpensesValue = document.getElementsByClassName('result-total')[4];
const inComePeriodValue = document.getElementsByClassName('result-total')[5];
const targetMonthValue = document.getElementsByClassName('result-total')[6];
const salaryAmount = document.querySelector('.salary-amount');
const inComeTitle = document.querySelector('.income-title');
const inComeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const budgetMonthValue = document.querySelector('.budget_month-value');


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
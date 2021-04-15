'use strict';

let isNumber;
isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
let isNotANumber;
isNotANumber = function (n) {
  return isNaN(parseFloat(n))
};


let btnStart = document.getElementById('start');
let inComeAdd = document.getElementsByTagName('button')[0];
let expensesAdd = document.getElementsByTagName('button')[1];
let depositCheck = document.querySelector('#deposit-check');
let additionalInComeItem = document.querySelectorAll('.additional_income-item');
let budgetDayValue = document.getElementsByClassName('result-total')[1];
let expensesMonthValue = document.getElementsByClassName('result-total')[2];
let additionalInComeValue = document.getElementsByClassName('result-total')[3];
let additionalExpensesValue = document.getElementsByClassName('result-total')[4];
let inComePeriodValue = document.getElementsByClassName('result-total')[5];
let targetMonthValue = document.getElementsByClassName('result-total')[6];
let salaryAmount = document.querySelector('.salary-amount');
let inComeTitle = document.querySelector('.income-title');
let inComeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-item');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let budgetMonthValue = document.querySelector('.budget_month-value');



let appData = {
  budget: 0,
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
  start: function () {

    if (salaryAmount.value === '') {
      alert('Ошибка, поле "Месячный доход" должно быть заполнено!')
      return
    }
    appData.budget = salaryAmount.value


    //appData.asking();

    //appData.getInfoDeposit();

    //appData.getExpensesMonth();

    // appData.getBudget();

    //appData.getTargetMonth();
  },

  addExpensesBlock() {

    let cloneExpensesItem = expensesItems[0].cloneNode(true);

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
    expensesItems = document.querySelectorAll('.expenses-item');
    if (expensesItems.length === 3) {
      expensesAdd.style.display = 'none';
    }
  },

  getExpenses() {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;

      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }

    });
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

  getStatusInCome() {
    if (appData.budget >= 30000) {
      return ('У вас высокий уровень дохода!');
    } else if (10000 <= appData.budget) {
      return ('У вас средний уровень дохода!');
    } else if (0 <= appData.budget) {
      return ('У вас низкий уровень дохода!');
    } else {
      return ('Что-то пошло не так');
    }
  },

  getBudget() {
    appData.accumulatedMonth = appData.budget - appData.expensesMonth;
    appData.butgetDay = appData.accumulatedMonth / 30;
  },
  getTargetMonth() {
    if (Math.ceil(appData.mission / appData.accumulatedMonth) > 0)
      return 'Цель будет достигнута за ' + Math.ceil(appData.mission / appData.accumulatedMonth) + ' месяц(-а, -ев)';
    else if (Math.ceil(appData.mission / appData.accumulatedMonth) < 0)
      return 'Цель не будет достигнута!';
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
};

btnStart.addEventListener('click', appData.start);

expensesAdd.addEventListener('click', appData.addExpensesBlock);



























//for (let key in appData) {
// console.log('Свойство: ' + key + ' Значение: ' + appData[key]);
//}
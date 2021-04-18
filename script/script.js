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
let inComeItems = document.querySelectorAll('.income-items');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let budgetMonthValue = document.querySelector('.budget_month-value');
let incomeItem = document.querySelectorAll('.income-items');
let placeholderTitle = document.querySelectorAll('input[placeholder="Наименование"]'),
  placeholderAmount = document.querySelectorAll('input[placeholder="Сумма"]');





let appData = {
  budget: 0,
  income: {},
  inComeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  budgetMonth: 0,
  expensesMonth: 0,
  butgetDay: 0,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,




  start() {

    if (salaryAmount.value === '') {
      function prevDef(click) {
        click.preventDefault();

      }
      return prevDef();
    }
    appData.budget = +salaryAmount.value;

    appData.getInCome();
    appData.getExpenses();

    appData.getExpensesMonth();
    appData.getInComeMonth();

    appData.getPeriodAmount();
    appData.getAddExpenses();

    appData.getAddInCome();

    appData.getBudget();
    appData.showResult();

  },

  showResult() {

    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.ceil(appData.butgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalInComeItem.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth();
    periodSelect.addEventListener('input', function (event) {
      periodAmount.textContent = event.target.value;
      inComePeriodValue.value = appData.calcSaveMoney();
    });

    inComePeriodValue.value = appData.calcSaveMoney();
    additionalInComeValue.value = appData.inComeMonth;
  },

  addExpensesBlock() {

    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesAdd.style.display = 'none';
    }
    appData.checkInput();
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
  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  addInComeBlock() {

    let cloneInComeItem = inComeItems[0].cloneNode(true);
    cloneInComeItem.querySelector('.income-title').value = '';
    cloneInComeItem.querySelector('.income-amount').value = '';

    inComeItems[0].parentNode.insertBefore(cloneInComeItem, inComeAdd);
    inComeItems = document.querySelectorAll('.income-items');

    if (inComeItems.length === 3) {
      inComeAdd.style.display = 'none';
    }
    appData.checkInput();

  },

  getInCome() {
    inComeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;

      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }

    });
  },

  getAddInCome() {

    additionalInComeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },

  getPeriodAmount() {
    periodAmount.innerHTML = periodSelect.value;
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
    appData.budgetMonth = appData.budget + appData.inComeMonth - appData.expensesMonth;
    appData.butgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth() {
    return Math.ceil(targetAmount.value / appData.budgetMonth);

  },

  checkInput() {
    const placeholderTitle = document.querySelectorAll('input[placeholder="Наименование"]'),
      placeholderAmount = document.querySelectorAll('input[placeholder="Сумма"]');

    placeholderAmount.forEach(input => {
      input.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/\D/, '');
      });
    });

    placeholderTitle.forEach(input => {
      input.addEventListener('input', event => {
        event.target.value = event.target.value.replace(/[a-zA-Z0-9-]/, '');
      });
    });

  },

  getInComeMonth() {

    for (let key in this.income) {
      appData.inComeMonth += +this.income[key];
    }
    return appData.inComeMonth;
  },

  getExpensesMonth() {

    for (let key in this.expenses) {
      appData.expensesMonth += +this.expenses[key];
    }
    return appData.expensesMonth;
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
  calcSaveMoney() {
    return appData.budgetMonth * periodSelect.value;
  },
};

//let startThis = appData.start.bind(appData);
//let inComeBlock = appData.addInComeBlock.bind(appData);
//let expensesBlock = appData.addExpensesBlock.bind(appData);

appData.checkInput();

btnStart.addEventListener('click', appData.start);
inComeAdd.addEventListener('click', appData.addInComeBlock);
periodSelect.addEventListener('input', appData.getPeriodAmount);

expensesAdd.addEventListener('click', appData.addExpensesBlock);



























//for (let key in appData) {
// console.log('Свойство: ' + key + ' Значение: ' + appData[key]);
//}
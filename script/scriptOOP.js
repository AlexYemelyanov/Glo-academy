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
let btnCancel = document.getElementById('cancel');
let inComeAdd = document.querySelector('.income_add');
let expensesAdd = document.querySelector('.expenses_add');
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




const AppData = function () {
  this.budget = 0;
  this.income = {};
  this.inComeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.butgetDay = 0;
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;

};

AppData.prototype.check = function () {
  if (salaryAmount.value !== '') {
    () => {
      btnStart.removeAttribute('disabled');
    };
    return;
  }
};

AppData.prototype.start = function () {

  if (salaryAmount.value === '') {
    () => {
      btnStart.setAtribute('disabled', 'disabled');
    }
    return;
  }
  let allInputs = document.querySelectorAll('input[type=text]');
  allInputs.forEach((item) => {
    item.setAttribute('disabled', 'disabled');
  });


  inComeAdd.disabled = true;


  expensesAdd.disabled = true;

  function buttonCancel() {
    btnStart.style.display = 'none';
    btnCancel.style.display = 'inline';
  }
  buttonCancel();
  console.log(this);
  this.budget = +salaryAmount.value;

  this.getInCome();
  this.getExpenses();

  this.getExpensesMonth();
  this.getInComeMonth();

  this.getPeriodAmount();
  this.getAddExpenses();

  this.getAddInCome();

  this.getBudget();
  this.showResult();
  console.log(this.addExpenses);

};

AppData.prototype.reset = function () {


  function buttonStart() {
    btnStart.style.display = 'inline';
    btnCancel.style.display = 'none';
  }
  buttonStart();

  let allInputs = document.querySelectorAll('input[type=text]');
  allInputs.forEach((item) => {
    item.removeAttribute('disabled', 'disabled');
  });


  inComeAdd.disabled = false;


  expensesAdd.disabled = false;


  this.resetFunk();
  this.resetInput();

  this.removeInComeBlock();

  this.removeExpensesBlock();
  this.resetPeriodAmount();

  this.showResultReset();

};
AppData.prototype.resetFunk = function () {

  this.budget = 0;
  this.income = {};
  this.inComeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.butgetDay = 0;
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;


};
AppData.prototype.showResult = function () {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = Math.ceil(this.butgetDay);
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');

  targetMonthValue.value = this.getTargetMonth();
  periodSelect.addEventListener('input', function (event) {
    periodAmount.textContent = event.target.value;
    inComePeriodValue.value = _this.calcSaveMoney();
  });

  inComePeriodValue.value = this.calcSaveMoney();
  additionalInComeValue.value = this.addIncome.join(', ');
};
AppData.prototype.showResultReset = function () {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = Math.ceil(this.butgetDay);
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses;
  additionalInComeItem.value = this.addIncome;
  targetMonthValue.value = '';

  inComePeriodValue.value = this.calcSaveMoney();
  additionalInComeValue.value = this.inComeMonth;
};
AppData.prototype.addExpensesBlock = function () {

  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  cloneExpensesItem.querySelector('.expenses-title').value = '';
  cloneExpensesItem.querySelector('.expenses-amount').value = '';

  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
  expensesItems = document.querySelectorAll('.expenses-items');
  if (expensesItems.length === 3) {
    expensesAdd.style.display = 'none';
  }
  this.checkInput();
};
AppData.prototype.removeExpensesBlock = function () {

  expensesItems.forEach((item, index) => {

    if (index !== 0) {
      item.remove();
    }
  });
  document.querySelector('.expenses-items .expenses-title').value = '';
  document.querySelector('.expenses-amount').value = '';
  expensesItems = document.querySelectorAll('.expenses-items');
  if (expensesItems.length === 1) {
    expensesAdd.style.display = 'inline';
  }
};
AppData.prototype.getExpenses = function () {
  const _this = this;
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;

    if (itemExpenses !== '' && cashExpenses !== '') {
      _this.expenses[itemExpenses] = cashExpenses;
    }

  });
};
AppData.prototype.getAddExpenses = function () {
  const _this = this;
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== '') {
      _this.addExpenses.push(item);
    }
  });
};
AppData.prototype.addInComeBlock = function () {

  let cloneInComeItem = inComeItems[0].cloneNode(true);
  cloneInComeItem.querySelector('.income-title').value = '';
  cloneInComeItem.querySelector('.income-amount').value = '';

  inComeItems[0].parentNode.insertBefore(cloneInComeItem, inComeAdd);
  inComeItems = document.querySelectorAll('.income-items');

  if (inComeItems.length === 3) {
    inComeAdd.style.display = 'none';
  }
  this.checkInput();
};
AppData.prototype.removeInComeBlock = function () {
  console.log(expensesItems);
  inComeItems.forEach((item, index) => {

    if (index !== 0) {
      item.remove();
    }
  });
  document.querySelector('.income-items .income-title').value = '';
  document.querySelector('.income-amount').value = '';

  inComeItems = document.querySelectorAll('.income-items');
  if (inComeItems.length === 1) {
    inComeAdd.style.display = 'inline';
  }
};
AppData.prototype.getInCome = function () {
  const _this = this;
  inComeItems.forEach(function (item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;

    if (itemIncome !== '' && cashIncome !== '') {
      _this.income[itemIncome] = cashIncome;
    }

  });
};
AppData.prototype.resetInput = function () {
  let typeText = document.querySelectorAll('input[type=text]');
  typeText.forEach((item) => {
    item.value = '';
  });
};
AppData.prototype.getAddInCome = function () {
  const _this = this;
  additionalInComeItem.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      _this.addIncome.push(itemValue);
    }
  });
};
AppData.prototype.getPeriodAmount = function () {
  periodAmount.innerHTML = periodSelect.value;

};
AppData.prototype.resetPeriodAmount = function () {

  periodAmount.innerHTML = 1;
  periodSelect.value = 1;
};
AppData.prototype.getStatusInCome = function () {
  if (this.budget >= 30000) {
    return ('У вас высокий уровень дохода!');
  } else if (10000 <= this.budget) {
    return ('У вас средний уровень дохода!');
  } else if (0 <= this.budget) {
    return ('У вас низкий уровень дохода!');
  } else {
    return ('Что-то пошло не так');
  }
};
AppData.prototype.getBudget = function () {
  console.log(this);
  this.budgetMonth = this.budget + this.inComeMonth - this.expensesMonth;
  this.butgetDay = this.budgetMonth / 30;
};
AppData.prototype.getTargetMonth = function () {
  return Math.ceil(targetAmount.value / this.budgetMonth);
};
AppData.prototype.checkInput = function () {
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
};
AppData.prototype.getInComeMonth = function () {
  const _this = this;
  for (let key in _this.income) {
    _this.inComeMonth += +_this.income[key];
  }
  return _this.inComeMonth;
};
AppData.prototype.getExpensesMonth = function () {
  const _this = this;
  for (let key in _this.expenses) {
    _this.expensesMonth += +_this.expenses[key];
  }
  return _this.expensesMonth;
};
AppData.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    appData.percentDeposit = prompt('Какой годовой процент?');
    while (!isNumber(this.percentDeposit)) {
      this.percentDeposit = prompt('Какой годовой процент?');
    }
    this.moneyDeposit = prompt('Какая сумма заложена?');
    while (!isNumber(this.moneyDeposit)) {
      this.moneyDeposit = prompt('Какая сумма заложена?');
    }
  }
};
AppData.prototype.calcSaveMoney = function () {
  return this.budgetMonth * periodSelect.value;
};

const appData = new AppData();

console.log(appData);


function startThis() {
  btnStart.addEventListener('click', this.start);
};

function cancelThis() {
  btnCancel.addEventListener('click', this.reset);
};

function incBlock() {
  inComeAdd.addEventListener('click', this.addInComeBlock);
}

function expBlock() {
  expensesAdd.addEventListener('click', this.addExpensesBlock);
}

function perSelect() {
  periodSelect.addEventListener('input', this.getPeriodAmount);
}

let btnCancelPrg = cancelThis.bind(appData);
let btnStartPrg = startThis.bind(appData);
let inComeBlock = incBlock.bind(appData);
let expensesBlock = expBlock.bind(appData);
let rangeAmount = perSelect.bind(appData);


appData.checkInput();
rangeAmount();
btnStartPrg();
btnCancelPrg();
inComeBlock();
expensesBlock();
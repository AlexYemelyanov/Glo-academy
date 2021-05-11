'use strict';

let isNumber;
isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
let isNotANumber;
isNotANumber = function (n) {
  return isNaN(parseFloat(n))
};


const btnStart = document.getElementById('start');
const btnCancel = document.getElementById('cancel');
const inComeAdd = document.querySelector('.income_add');
const expensesAdd = document.querySelector('.expenses_add');
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
let inComeItems = document.querySelectorAll('.income-items');
const expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const budgetMonthValue = document.querySelector('.budget_month-value');
const placeholderTitle = document.querySelectorAll('input[placeholder="Наименование"]'),
  placeholderAmount = document.querySelectorAll('input[placeholder="Сумма"]');




class AppData {
  constructor() {
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
    this.checkInput();
  }

  check() {
    if (salaryAmount.value !== '') {
      () => {
        btnStart.removeAttribute('disabled');
      };
      return;
    }
  };

  start() {

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


    this.getExpInc();
    this.getExpensesMonth();
    this.getInComeMonth();

    this.getPeriodAmount();

    this.getAddExpInc();

    this.getBudget();
    this.showResult();
    console.log(this);

  };

  reset() {


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
  resetFunk() {

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
  showResult() {
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
  showResultReset() {
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

  removeExpensesBlock() {

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


  getExpInc() {

    const count = item => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = itemAmount;
      }
    }

    inComeItems.forEach(count);
    expensesItems.forEach(count);
  };

  getAddExpInc() {

    const count = item => {
      if (typeof (item) === 'string') {
        item = item.trim();
        if (item !== '') {
          this.addExpenses.push(item);
        }

      }
      if (typeof (item) === 'object') {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
          this.addIncome.push(itemValue);
        }
      }

    }

    additionalInComeItem.forEach(count);
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(count);
  };



  addExpIncBlock(e) {
    console.log(e.target)
    if (e.target.matches('.income_add')) {
      let cloneInComeItem = inComeItems[0].cloneNode(true);
      cloneInComeItem.querySelector('.income-title').value = '';
      cloneInComeItem.querySelector('.income-amount').value = '';

      inComeItems[0].parentNode.insertBefore(cloneInComeItem, inComeAdd);
      inComeItems = document.querySelectorAll('.income-items');

      if (inComeItems.length === 3) {
        inComeAdd.style.display = 'none';
      }
      this.checkInput();
    }

    if (e.target.matches('.expenses_add')) {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      cloneExpensesItem.querySelector('.expenses-title').value = '';
      cloneExpensesItem.querySelector('.expenses-amount').value = '';

      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
      expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3) {
        expensesAdd.style.display = 'none';
      }
      this.checkInput();
    }

  };

  removeInComeBlock() {
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

  resetInput() {
    let typeText = document.querySelectorAll('input[type=text]');
    typeText.forEach((item) => {
      item.value = '';
    });
  };

  getPeriodAmount() {
    periodAmount.innerHTML = periodSelect.value;

  };
  resetPeriodAmount() {

    periodAmount.innerHTML = 1;
    periodSelect.value = 1;
  };
  getStatusInCome() {
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
  getBudget() {
    console.log(this);
    this.budgetMonth = this.budget + this.inComeMonth - this.expensesMonth;
    this.butgetDay = this.budgetMonth / 30;
  };
  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  };
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
  };
  getInComeMonth() {

    for (let key in this.income) {
      this.inComeMonth += +this.income[key];
    }
    return this.inComeMonth;
  };
  getExpensesMonth() {

    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
  };
  getInfoDeposit() {
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
  calcSaveMoney() {
    return this.budgetMonth * periodSelect.value;
  };
  eventListeners() {
    btnStart.addEventListener('click', this.start.bind(appData));
    btnCancel.addEventListener('click', this.reset.bind(appData));
    inComeAdd.addEventListener('click', this.addExpIncBlock.bind(appData));
    periodSelect.addEventListener('input', this.getPeriodAmount.bind(appData));
    expensesAdd.addEventListener('click', this.addExpIncBlock.bind(appData));
    periodSelect.addEventListener('input', this.getPeriodAmount.bind(appData));
  };
}



const appData = new AppData();
appData.eventListeners();

console.log(appData);
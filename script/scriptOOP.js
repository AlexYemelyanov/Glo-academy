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
const btnPlus = document.querySelectorAll('.btn_plus');
const incomeAdd = document.querySelector('.income_add');
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
let incomeItems = document.querySelectorAll('.income-items');
const expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelectorAll('.additional_expenses-item');

const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const budgetMonthValue = document.querySelector('.budget_month-value');
const placeholderTitle = document.querySelectorAll('input[placeholder="Наименование"]'),
  placeholderAmount = document.querySelectorAll('input[placeholder="Сумма"]');
const depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent');




class AppData {
  constructor() {
    this.budget = 0;
    this.income = {};
    this.inComeMonth = 0;
    this.incomeAdd = [];
    this.expenses = {};
    this.expensesAdd = [];
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
  }

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

    incomeAdd.disabled = true;
    expensesAdd.disabled = true;

    function buttonCancel() {
      btnStart.style.display = 'none';
      btnCancel.style.display = 'inline';
    }
    buttonCancel();

    this.budget = +salaryAmount.value;

    this.getExpInc();
    this.getExpensesMonth();
    this.getPeriodAmount();
    this.getAddExpInc();
    this.getInfoDeposit();
    this.getBudget();
    this.showResult();


  }

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


    incomeAdd.disabled = false;
    expensesAdd.disabled = false;

    this.resetFunk();
    this.resetInput();
    this.removeInComeBlock();
    this.removeExpensesBlock();
    this.resetPeriodAmount();
    this.showResultReset();
    this.removeDeposit();
  }
  resetFunk() {

    this.budget = 0;
    this.income = {};
    this.inComeMonth = 0;
    this.incomeAdd = [];
    this.expenses = {};
    this.expensesAdd = [];
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.butgetDay = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;


  }
  showResult() {

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.butgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.expensesAdd.join(', ');

    targetMonthValue.value = this.getTargetMonth();
    periodSelect.addEventListener('input', function (event) {
      periodAmount.textContent = event.target.value;
      inComePeriodValue.value = this.calcSaveMoney();
    });

    inComePeriodValue.value = this.calcSaveMoney();
    additionalInComeValue.value = this.incomeAdd.join(', ');
  }
  showResultReset() {

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.butgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.expensesAdd;
    additionalInComeItem.value = this.incomeAdd;
    targetMonthValue.value = '';

    inComePeriodValue.value = this.calcSaveMoney();
    additionalInComeValue.value = this.inComeMonth;
  }
  addExpensesBlock() {

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
  addInComeBlock() {

    let cloneInсomeItem = incomeItems[0].cloneNode(true);
    cloneInсomeItem.querySelector('.income-title').value = '';
    cloneInсomeItem.querySelector('.income-amount').value = '';

    incomeItems[0].parentNode.insertBefore(cloneInсomeItem, incomeAdd);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomeAdd.style.display = 'none';
    }
    this.checkInput();
  }

  /*addExpIncBlock() {

    const addBlock = item => {
      console.log(item);
      const firstStr = item.className.split('-')[0];
      4
      let letpreCloneItem = document.querySelectorAll(`.${firstStr}-items`);
      console.log(letpreCloneItem);
      let btnAdd =

        let cloneItem = letpreCloneItem[0].cloneNode(true);
      cloneItem.querySelector(`.${firstStr}-title`).value = '';
      cloneItem.querySelector(`.${firstStr}-amount`).value = '';
      console.log(cloneItem);

      letpreCloneItem[0].parentNode.insertBefore(cloneItem, `${firstStr}Add`);

      letpreCloneItem = document.querySelectorAll(`.${firstStr}-items`);

      if (`${firstStr}Items`.length === 3) {
        `${firstStr}Add`.style.display = 'none';
      }

      this.checkInput();

    };

    incomeItems.forEach(addBlock);
    expensesItems.forEach(addBlock);
  }*/

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
  }

  removeInComeBlock() {

    incomeItems.forEach((item, index) => {
      if (index !== 0) {
        item.remove();
      }
    });
    document.querySelector('.income-items .income-title').value = '';
    document.querySelector('.income-amount').value = '';

    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 1) {
      incomeAdd.style.display = 'inline';
    }
  }

  getExpInc() {

    const count = item => {
      const startStr = item.className.split('-')[0];
      let itemTitle = item.querySelector(`.${startStr}-title`).value;
      let itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = itemAmount;
      }
    };
    incomeItems.forEach(count);
    expensesItems.forEach(count);


    for (let key in this.income) {
      this.inComeMonth += +this.income[key];
    }
    return this.inComeMonth;
  }


  resetInput() {
    let typeText = document.querySelectorAll('input[type=text]');
    typeText.forEach((item) => {
      item.value = '';
    });
  }

  getAddExpInc() {

    const addIt = item => {
      let startStr = item.className.split('-')[0];
      const needWord = startStr.split('_')[1];
      console.log(startStr);
      console.log(needWord);
      let addItem = document.querySelector(`.${startStr}-item`).value.trim();
      console.log(addItem);
      if (addItem !== '') {
        this[`${needWord}Add`].push(addItem);
      }
    };
    additionalInComeItem.forEach(addIt);
    additionalExpensesItem.forEach(addIt);
  }

  getPeriodAmount() {
    periodAmount.innerHTML = periodSelect.value;

  }
  resetPeriodAmount() {

    periodAmount.innerHTML = 1;
    periodSelect.value = 1;
  }
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
  }
  getBudget() {
    console.log(this);
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = this.budget + this.inComeMonth - this.expensesMonth + monthDeposit;
    this.butgetDay = this.budgetMonth / 30;
  }
  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }
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
  }

  getExpensesMonth() {

    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
  }
  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }

  }

  changePercent() {
    const valueSelect = this.value;

    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block';
      depositPercent.value = '';
      let trueKey = (event) => {
        if (depositPercent.value === (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
          alert('Введите корректное значение в поле проценты');
          btnStart.disabled = true;
        } else {
          this.percentDeposit = depositPercent.value;
          this.moneyDeposit = depositAmount.value;
        }
      };
      depositPercent.addEventListener('input', () => {
        if (!isNumber(depositPercent.value)) {
          alert('Введите корректное значение в поле проценты');
          btnStart.disabled = true;
          return depositPercent.value = '';
        }
        if (depositPercent.value < 0 || depositPercent.value > 100) {
          alert('Введите корректное значение в поле проценты');
          btnStart.disabled = true;
          return depositPercent.value = '';
        } else {
          this.percentDeposit = depositPercent.value;
          this.moneyDeposit = depositAmount.value;
        }
      });
    } else {
      depositPercent.value = valueSelect;
      depositPercent.style.display = 'none';
      btnStart.disabled = false;
    }
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositPercent.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      depositPercent.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
    }


  }

  removeDeposit() {
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositPercent.style.display = 'none';
    depositBank.value = '';
    depositAmount.value = '';
    depositPercent.value = '';
    this.deposit = false;
    depositBank.removeEventListener('change', this.changePercent);
  }

  calcSaveMoney() {
    return this.budgetMonth * periodSelect.value;
  }
  eventListeners() {
    btnStart.addEventListener('click', this.start.bind(appData));
    btnCancel.addEventListener('click', this.reset.bind(appData));
    incomeAdd.addEventListener('click', this.addInComeBlock.bind(appData));
    periodSelect.addEventListener('input', this.getPeriodAmount.bind(appData));
    expensesAdd.addEventListener('click', this.addExpensesBlock.bind(appData));
    periodSelect.addEventListener('input', this.getPeriodAmount.bind(appData));
    depositCheck.addEventListener('change', this.depositHandler.bind(this));
  }
}



const appData = new AppData();
appData.eventListeners();

console.log(appData);
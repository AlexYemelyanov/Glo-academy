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
    appData.budget = +salaryAmount.value;

    if (salaryAmount.value === '') {
      btnStart.disabled = true;
    };

    function buttonCancel() {
      btnStart.style.display = 'none';
      btnCancel.style.display = 'inline';
    }
    buttonCancel();
    console.log(this);

    appData.getInCome();
    appData.getExpenses();

    appData.getExpensesMonth();
    appData.getInComeMonth();

    appData.getPeriodAmount();
    appData.getAddExpenses();

    appData.getAddInCome();

    appData.getBudget();
    appData.showResult();
    console.log(this.addExpenses);

  },

  reset() {


    function buttonStart() {
      btnStart.style.display = 'inline';
      btnCancel.style.display = 'none';
    }
    buttonStart();


    appData.resetFunk();
    appData.resetInput();

    appData.removeInComeBlock();

    appData.removeExpensesBlock();
    appData.resetPeriodAmount();

    appData.showResultReset();

  },

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


  },

  showResult() {

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.butgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');

    targetMonthValue.value = this.getTargetMonth();
    periodSelect.addEventListener('input', function (event) {
      periodAmount.textContent = event.target.value;
      inComePeriodValue.value = this.calcSaveMoney();
    });

    inComePeriodValue.value = this.calcSaveMoney();
    additionalInComeValue.value = this.addIncome.join(', ');
  },
  showResultReset() {

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.butgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses;
    additionalInComeItem.value = this.addIncome;
    targetMonthValue.value = this.getTargetMonth();

    inComePeriodValue.value = this.calcSaveMoney();
    additionalInComeValue.value = this.inComeMonth;
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
    this.checkInput();
  },

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
    this.checkInput();
  },

  removeInComeBlock() {
    console.log(expensesItems);
    inComeItems.forEach((item, index) => {

      if (index !== 0) {
        item.remove();
      }
    });
    document.querySelector('.income-items .income-title').value = '';
    document.querySelector('.income-amount').value = '';
    console.log(appData.income);
    inComeItems = document.querySelectorAll('.income-items');
    if (inComeItems.length === 1) {
      inComeAdd.style.display = 'inline';
    }
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
  resetInput() {
    let typeText = document.querySelectorAll('input[type=text]');
    typeText.forEach((item) => {
      item.value = '';
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
  resetPeriodAmount() {

    periodAmount.innerHTML = 1;
    periodSelect.value = 1;
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
    console.log(this);
    this.budgetMonth = this.budget + this.inComeMonth - this.expensesMonth;
    this.butgetDay = this.budgetMonth / 30;
  },

  getTargetMonth() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
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

//Просто решил тут оставить все функции что написал на всякий пожарный вдруг пригодяться)
/*
removeExpenses() {
  let remExpenses = Object.getOwnPropertyNames(appData.expenses);
  for (let i = 0; i < remExpenses.length; i++) {
    delete appData.expenses[remExpenses[i]];
  }
  document.querySelector('.expenses-items .expenses-title').value = '';
  document.querySelector('.expenses-amount').value = '';
},
removeInCome() {
  let remInCome = Object.getOwnPropertyNames(appData.income);
  for (let i = 0; i < remInCome.length; i++) {
    delete appData.income[remInCome[i]];
  }
  document.querySelector('.income-items .income-title').value = '';
  document.querySelector('.income-amount').value = '';
  console.log(appData.income);
}, 
resetBudget() {
  appData.budgetMonth = appData.budget + appData.inComeMonth - appData.expensesMonth;
  appData.butgetDay = appData.budgetMonth / 30;
}, 
resetInComeMonth() {
  for (let key in appData.income) {
    appData.inComeMonth = appData.income[key];
  }
  return console.log(appData.inComeMonth);

}, 
resetExpensesMonth() {

  for (let key in appData.expenses) {
    appData.expensesMonth = appData.expenses[key];
  }
  return console.log(appData.expensesMonth);
}, 
*/




























//for (let key in appData) {
// console.log('Свойство: ' + key + ' Значение: ' + appData[key]);
//}
const calculator = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total'),
    calcOptionTitle = document.querySelector('.calc-option-title');


  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;

    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }


    if (typeValue && squareValue) {
      total = Math.round(price * typeValue * squareValue * countValue * dayValue);
    }

    totalValue.textContent = total;
  }

  calcBlock.addEventListener('change', (event) => {
    const target = event.target;
    if (calcType.options[calcType.selectedIndex].value === '') {
      calcSquare.value = '';
      calcDay.value = '';
      calcCount.value = '';
    }

    console.log(calcType.options[calcType.selectedIndex].value)

    if (target.matches('.calc-type') || target.matches('.calc-square') ||
      target.matches('.calc-day') || target.matches('.calc-count')) {
      countSum();
    }
  })
};

export default calculator;
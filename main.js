const numberBtn = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const clearCalcHistory = document.querySelector('.calculation_clear');
const calcHistory = document.querySelector('.calculation_previous')
const currentNumber = document.querySelector('.current_number');
const previousNumber = document.querySelector('.previous_number');
const operatingSign = document.querySelector('.operating_sign');

let result = '';

numberBtn.forEach((number) => {
    number.addEventListener('click', (e) => {
        
        if(e.target.innerText === '.' && currentNumber.innerText.includes('.')) {
            return;
        };
        if(e.target.innerText === '.' && currentNumber.innerText === '') {
            return currentNumber.innerText = '.0';
        }
        currentNumber.innerText += e.target.innerText;
    });
  
});

operatorBtn.forEach((operator) => {
    operator.addEventListener('click', e => {
        if(currentNumber.innerText === '' && e.target.innerText === '-') {
            currentNumber.innerText = e.target.innerText;
            return;
        } else if(currentNumber.innerText === '') {
            return;
        }
        previousNumber.innerText = currentNumber.innerText;
        operatingSign.innerText = e.target.innerText;
        currentNumber.innerText = '';
    });
}); 

equalsBtn.addEventListener('click', e => {
    if(previousNumber.innerText === '' || currentNumber.innerText === '') {
        return;
    } 
    let a = Number(currentNumber.innerText);
    let b = Number(previousNumber.innerText);
    let operator = operatingSign.innerText;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case '÷':
            result = b / a;
            break;
        case 'x':
            result = a * b;
            break;
        case '2^':
            result = b ** a;
            break;
    }

    const newResult = document.createElement('li');
    newResult.innerText = `${previousNumber.innerText} ${operatingSign.innerText} ${currentNumber.innerText} = ${result}`
    calcHistory.appendChild(newResult);

    currentNumber.innerText = result;
    previousNumber.innerText = '';
    operatingSign.innerText = '';

    
});

clearBtn.addEventListener('click', () => {
        currentNumber.innerText = '';
        previousNumber.innerText = '';
        operatingSign.innerText = '';

});

clearCalcHistory.addEventListener('click', () => {
    calcHistory.textContent = '';
});
const numberBtn = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const clearCalcHistory = document.querySelector('.calculation_clear');


let result = '';

clearBtn.addEventListener('click', () => {
    if(document.querySelector('.display').textContent === '') {
        return;
    } else {
        document.querySelector('.display').textContent = '';
    }
   
});

numberBtn.forEach((number) => {
    number.addEventListener('click', (e) => {
        document.querySelector('.current_number').innerText += e.target.innerText;
    });
});

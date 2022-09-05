let firstNumber = document.querySelector('.first-number');
let secondNumber = document.querySelector('.second-number');
let operator = document.querySelector('.operator');
let resultButton = document.querySelector('.result-button');
let resultDisplay = document.querySelector('.result');

resultButton.addEventListener('click', function() {
    let firstNum = Number(firstNumber.value);
    let secondNum = Number(secondNumber.value);

    if (Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
        
        switch (operator.value) {
            case '+':
                resultDisplay.textContent = firstNum + secondNum;
                break;
            case '-':
                resultDisplay.textContent = firstNum - secondNum;
                break;
            case '*':
                resultDisplay.textContent = firstNum * secondNum;
                break;
            case '/':
                resultDisplay.textContent = firstNum / secondNum;
                break;            
            default:
                break;
        }
    } else {
        alert('Одно или оба значения не являются числами.');
    };
});


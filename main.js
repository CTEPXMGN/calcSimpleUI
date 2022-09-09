let firstNumber = document.querySelector('.first-number');
let secondNumber = document.querySelector('.second-number');
let operator = document.querySelector('.operator');
let resultButton = document.querySelector('.result-button');
let resultDisplay = document.querySelector('.result');
let results = document.querySelector('.results-save');

resultButton.addEventListener('click', function() {
    let firstNum = Number(firstNumber.value);
    let secondNum = Number(secondNumber.value);

    if (Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
        
        switch (operator.value) {
            case '+':
                resultDisplay.textContent = firstNum + secondNum;
                firstNumber.value = '';
                secondNumber.value = '';
                addResult(resultDisplay.textContent);
                break;
            case '-':
                resultDisplay.textContent = firstNum - secondNum;
                firstNumber.value = '';
                secondNumber.value = '';
                addResult(resultDisplay.textContent);
                break;
            case '*':
                resultDisplay.textContent = firstNum * secondNum;
                firstNumber.value = '';
                secondNumber.value = '';
                addResult(resultDisplay.textContent);
                break;
            case '/':
                resultDisplay.textContent = firstNum / secondNum;
                firstNumber.value = '';
                secondNumber.value = '';
                addResult(resultDisplay.textContent);
                break;            
            default:
                break;
        }
    } else {
        alert('Одно или оба значения не являются числами.');
    };
});

// Сохраняем результат

function addResult(num) {
    let div = document.createElement('div');
    div.textContent = num;
    div.addEventListener('click', function() {
        this.remove();
    })
    results.appendChild(div);
};

//Variables

let displayVal = '0';
var firstNum = '';
var secondNum = '';
var firstOp = '';
var secondOp = '';
var result = '';
const buttons = document.querySelectorAll('button');

//Functions

function dis()
		{
      const inputtext = document.getElementById('inputtext');
      inputtext.innerText = displayVal.substring(0, 6);
      }


dis();


function inputElement() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains('operand')) {
                addNumber(buttons[i].value);
                dis();
            } else if (buttons[i].classList.contains('operator')) {
                addOperator(buttons[i].value);
            } else if (buttons[i].classList.contains('decimal')) {
          addDecimal();
          dis();
        } else if (buttons[i].classList.contains('equals')) {
                solve();
                dis();
            } else if (buttons[i].classList.contains('clear'))
                clr();
                dis();
        }
    )}
}

inputElement();

function addNumber(operand) {
    if(firstOp === null) {
        if(displayVal === '0' || displayVal === 0) {
            displayVal = operand;
        } else if(displayVal === firstNum) {
            displayVal = operand;
        } else {
            displayVal += operand;
        }
    } else {
        if(displayVal === firstNum) {
            displayVal = operand;
        } else {
            displayVal += operand;
        }
    }
}

function addOperator(operator) {
    if(firstOp != null && secondOp === null) {
        secondOp = operator;
        secondNum = displayVal;
        result = operate(Number(firstNum), Number(secondNum), firstOp);
        displayVal = result.toString();
        firstNum = displayVal;
        result = null;
    } else if(firstOp != null && secondOp != null) {
        secondNum = displayVal;
        result = operate(Number(firstNum), Number(secondNum), secondOp);
        secondOp = operator;
        displayVal = result.toString();
        firstNum = displayVal;
        result = null;
    } else {
        firstOp = operator;
        firstNum = displayVal;
    }
}

function addDecimal() {
    if(displayVal === firstNum || displayVal === secondNum) {
        displayVal = '0';
        displayVal += '.';
    } else if(!displayVal.includes('.')) {
        displayVal += '.';
    }
}

function solve() {
  if (firstOp === null) {
    displayVal = displayVal;
  } else if (secondOp !== null) {
    secondNum = displayVal;
    result = operate(a(firstNum), secondOp, b(secondNum));
    if (result === "Don't do that again.") {
      displayVal = "Don't do that again.";
    } else {
      displayVal = result.toString();
      firstNum = displayVal;
      secondNum = null;
      firstOp = null;
      secondOp = null;
      result = null;
    }
  } else {
        secondNum = displayVal;
        result = operate(Number(firstNum), Number(secondNum), firstOp);
        if (firstOp === '/' && secondNum === '0') {
          result = "Don't do that again."
        } else if (secondOp === '/' && secondNum === '0') {
          result = "Don't do that again."
        }
        if (result === "Don't do that again.") {
            displayVal = "Don't do that again.";
        } else {
            displayVal = result.toString();
            firstNum = displayVal;
            secondNum = null;
            firstOp = null;
            secondOp = null;
            result = null;
        }
    }
  }



function clr() {
    displayVal = '0';
    firstNum = null;
    secondNum = null;
    firstOp = null;
    secondOp = null;
    result = null;
}

clr();

function operate(a, b, operator) {
      if (operator === '+') {
        result = parseFloat(a) + parseFloat(b);
        return result;
      } else if (operator === '-') {
        result = parseFloat(a) - parseFloat(b);
        return result;
      } else if (operator === '*') {
        result = parseFloat(a) * parseFloat(b);
        return result;
      } else if (operator === '/') {
        result = parseFloat(a) / parseFloat(b);
        return result;
      }
    }

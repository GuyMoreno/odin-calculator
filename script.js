// Add func:
const add = (a, b) => a + b;
//Subtract func: 
const subtract = (a, b) => a - b;
// Multiply func:
const multiply = (a, b) => a * b;
// Divide func:
const divide = (a, b) => b === 0 ? "Error: Cannot divide by 0" : a / b;


const operate = (firstNum, operator, secondNum) => {
    const operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    };
    // If operator exist --> it calls another func:
    // For example --> return 'add(firstNum, secondNum)'
    // Longer way:
    //  if (operator === "+") {
    // return add(num1, num2);  
    // not exist? return Error...
    return operations[operator] ? operations[operator](firstNum, secondNum) : "Error";
};

// 3 varaibles to represent: 1st num, operator, 2nd num.
let firstNum = 0;
let secondNum = 0;
let operator = '';
let displayValue = "0";

function updateDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.querySelector("#display").textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstNum = '';
    secondNum = '';
    operator = '';
    document.querySelector("#display").textContent = displayValue;
}

function setOperator(value) {
    firstNum = displayValue;
    operator = value;
    displayValue = '0';
}

function calculateResult() {
    secondNum = displayValue;
    const result = operate(Number(firstNum), operator, Number(secondNum));
    displayValue = result.toString();
    document.querySelector("#display").textContent = displayValue;
    firstNum = ''; // reset for next calculation
    operator = '';
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (!isNaN(value) || value === ".") {
            updateDisplay(value);
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else if (value === "=") {
            calculateResult();
        } else if (value === "C") {
            clearDisplay();
        }
    });
});
// Add func:
const add = (a, b) => a + b;

//Subtract func: 
const subtract = (a, b) => a - b;

// Multiply func:
const multiply = (a, b) => a * b;

// Divide func:
const divide = (a, b) => b === 0 ? "Error: Cannot divide by 0" : a / b;

// 3 varaibles to represent: 1st num, operator, 2nd num.
let firstNum = 0;
let secondNum = 0;
let operator = '';

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


console.log(operate(606, "+", 6));

let displayValue = "0";

function updateDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.querySelector("#display").textContent = displayValue;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        if (!isNaN(value) || value === ".") {
            updateDisplay(value);
        }
    });
});
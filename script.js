const digitNine = document.querySelector('.digit-9');
const digitDisplay = document.querySelector('.calculator-display');
const buttonMultiply = document.querySelector('#button-multiply');
const buttonDivide = document.querySelector('#button-divide');
const buttonAdd = document.querySelector('.digit-plus');
const buttonSubstract = document.querySelector('#button-substract');
const buttonEqual = document.querySelector('.digit-equal');

let num1 = 0;
let num2 = 0;
let operand = '';
let calculation = [];
let buttonWasPushedOnce = false;
let numberWasPushedOnce = false;
let equalWasPushedOnce = false;
// digitDisplay.textContent = 0;

console.log(digitDisplay.textContent);

const calculatorNumbers = document.querySelectorAll('.number');
const calculatorActions = document.querySelectorAll('.action');
console.log(calculatorNumbers);

function add(num1, num2) {
	return parseFloat(calculation[0]) + parseFloat(calculation[2]);
}

function multiply(num1, num2) {
	return parseFloat(num1) * parseFloat(num2);
}

function substract(num1, num2) {
	return parseFloat(num1) - parseFloat(num2);
}

function divide(num1, num2) {
	return parseFloat(num1) / parseFloat(num2);
}

function calculate(operand, num1, num2) {
	switch (operand) {
		case '+':
			digitDisplay.textContent = add(calculation[0], calculation[2]);
			return add(calculation[0], calculation[2]);
			break;
		case '*':
			digitDisplay.textContent = multiply(calculation[0], calculation[2]);
			return multiply(calculation[0], calculation[2]);
			break;
		case '-':
			digitDisplay.textContent = substract(calculation[0], calculation[2]);
			return substract(calculation[0], calculation[2]);

			break;
		case '÷':
			digitDisplay.textContent = divide(calculation[0], calculation[2]);
			return divide(calculation[0], calculation[2]);

			break;
	}
	digitDisplay.textContent = '';
}

function addListener() {
	digitDisplay.textContent = '';
	calculatorNumbers.forEach((button) => {
		button.addEventListener('click', () => {
			if (numberWasPushedOnce === false) {
				if (equalWasPushedOnce === true) {
					digitDisplay.textContent = button.textContent;
					equalWasPushedOnce = false;
				} else {
					digitDisplay.textContent += button.textContent;
				}
			} else if (numberWasPushedOnce === true) {
				digitDisplay.textContent = '';
				digitDisplay.textContent += button.textContent;
				numberWasPushedOnce = false;
			}
		});
	});

	equalWasPushedOnce = false;
}

function addActionListener() {
	calculatorActions.forEach((button) => {
		button.addEventListener('click', () => {
			num1 = digitDisplay.textContent;
			switch (button.textContent) {
				case 'c':
					digitDisplay.textContent = '';
					num1 = 0;
					num2 = 0;
					calculation = [];
					break;
				case '+':
					operand = '+';
					if (equalWasPushedOnce === true) {
						calculation.push(operand);
						if (buttonWasPushedOnce === true) {
							num2 = calculate(operand, calculation[0], calculation[2]);
							operator = calculation.pop();
							calculation.pop();
							calculation[0] = num2;
							calculation[1] = operand;
						}
						equalWasPushedOnce = false;
						buttonWasPushedOnce = true;
						numberWasPushedOnce = true;
					} else {
						calculation.push(num1);
						calculation.push(operand);
						if (buttonWasPushedOnce === true) {
							num2 = calculate(operand, calculation[0], calculation[2]);
							operator = calculation.pop();
							calculation.pop();
							calculation[0] = num2;
							calculation[1] = operand;
						}
						buttonWasPushedOnce = true;
						numberWasPushedOnce = true;
					}
					break;

				case '-':
					operand = '-';
					if (equalWasPushedOnce === true) {
						calculation.push(operand);
						if (buttonWasPushedOnce === true) {
							num2 = calculate(operand, calculation[0], calculation[2]);
							operator = calculation.pop();
							calculation.pop();
							calculation[0] = num2;
							calculation[1] = operand;
						}
						equalWasPushedOnce = false;
						buttonWasPushedOnce = true;
						numberWasPushedOnce = true;
					} else {
						calculation.push(num1);
						calculation.push(operand);
						if (buttonWasPushedOnce === true) {
							num2 = calculate(operand, calculation[0], calculation[2]);
							operator = calculation.pop();
							calculation.pop();
							calculation[0] = num2;
							calculation[1] = operand;
						}
						buttonWasPushedOnce = true;
						numberWasPushedOnce = true;
					}

					break;

				case '÷':
					operand = '÷';
					if (equalWasPushedOnce === true) {
						calculation.push(operand);
						if (buttonWasPushedOnce === true) {
							num2 = calculate(operand, calculation[0], calculation[2]);
							operator = calculation.pop();
							calculation.pop();
							calculation[0] = num2;
							calculation[1] = operand;
						}
						equalWasPushedOnce = false;
						buttonWasPushedOnce = true;
						numberWasPushedOnce = true;
					} else {
						calculation.push(num1);
						calculation.push(operand);
						if (buttonWasPushedOnce === true) {
							num2 = calculate(operand, calculation[0], calculation[2]);
							operator = calculation.pop();
							calculation.pop();
							calculation[0] = num2;
							calculation[1] = operand;
						}
						buttonWasPushedOnce = true;
						numberWasPushedOnce = true;
					}
					break;

				case '*':
					operand = '*';
					if (equalWasPushedOnce === true) {
						calculation.push(operand);
						if (buttonWasPushedOnce === true) {
							num2 = calculate(operand, calculation[0], calculation[2]);
							operator = calculation.pop();
							calculation.pop();
							calculation[0] = num2;
							calculation[1] = operand;
						}
						equalWasPushedOnce = false;
						buttonWasPushedOnce = true;
						numberWasPushedOnce = true;
					}
					calculation.push(num1);
					calculation.push(operand);
					if (buttonWasPushedOnce === true) {
						num2 = calculate(operand, calculation[0], calculation[2]);
						operator = calculation.pop();
						calculation.pop();
						calculation[0] = num2;
						calculation[1] = operand;
					}
					buttonWasPushedOnce = true;
					numberWasPushedOnce = true;

					break;
				case '=':
					if (equalWasPushedOnce === false) {
						calculation.push(num1);
						calculation.push(operand);
						num2 = calculate(operand, calculation[0], calculation[2]);
						calculation[0] = num2;
						calculation.splice(1, 3);
					}
					// console.log('after equal', calculation);
					equalWasPushedOnce = true;
					buttonWasPushedOnce = false;
					numberWasPushedOnce = false;
					calculation.splice(1, 2);
					console.log(calculation);

					break;
				default:
			}
		});
	});
}

// buttonClear.addEventListener('click', () => {
// 	digitDisplay.textContent = '';
// 	num1 = 0;
// 	num2 = 0;
// });

// buttonAdd.addEventListener('click', () => {
// 	num1 = digitDisplay.textContent;
// 	digitDisplay.textContent = '';
// 	operand = '+';
// });

// buttonEqual.addEventListener('click', () => {
// 	num2 = digitDisplay.textContent;
// 	operator(operand, num1, num2);
// });

addListener();
addActionListener();

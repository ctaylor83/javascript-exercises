const add = function(a, b) {
  return a + b;
};

const subtract = function(a , b) {
  return a - b; 
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) {
		return 1;
	} else {
		let fact = 1;
		for (let i = 1; i <= n; i++) {
			fact *= i;
		}
		return fact;
	}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

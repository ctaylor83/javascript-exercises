const sumAll = function(a, b) {
    // Returns 'ERROR' if an non numeric input is selected
    if (typeof a !== 'number' || typeof b !== 'number') {
        return('ERROR');
    }

    // Returns 'ERROR' if a negative number is selected
    if (a < 0 || b < 0) {
        return('ERROR');
    }

    // Swap a & b if a is selected as the larger number than b
    if (a > b) {
        let tempNo = a;
        a = b;
        b = tempNo;
    }

    // Add all numbers up between and including a & b
    let sum = 0
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    // Returns the output of the above calculation
    return sum
};

// Do not edit below this line
module.exports = sumAll;

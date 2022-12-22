const repeatString = function(str, num) {
    // If a negative number is input return an error
    if (num < 0) {
        return 'ERROR';
    }
    let output = '';
    // For each number return the input string that number of times
    for (let i = 0; i < num; i++) {
        output += str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(str) {

    // Creating array for string to go into
    const revStr = [];
    const length = str.length - 1;

    // Looping from the end to reverse string
    for (let i = length; i >= 0; i--) {
        revStr.push(str[i]); 
    } 
    // Join it all back up together but in reverse!
    return revStr.join('');
};

// Do not edit below this line
module.exports = reverseString;

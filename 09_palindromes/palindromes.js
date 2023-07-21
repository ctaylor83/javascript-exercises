const palindromes = function (str) {
    let cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;

};

// Do not edit below this line
module.exports = palindromes;

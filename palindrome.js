function palindromeCheck(number) {
    let numStr = number.toString();
    let length = numStr.length;
    let result = 0;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        result ^= numStr.charCodeAt(i) ^ 
                  numStr.charCodeAt(length - 1 - i);
    }
    return result === 0;
}

// Checking the given number is palidrome or not
console.log(palindromeCheck(121));
console.log(palindromeCheck(13531));
console.log(palindromeCheck(12345));

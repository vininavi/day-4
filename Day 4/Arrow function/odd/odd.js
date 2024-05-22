function getOddNumbers(start, end) {
    var oddNumbers = [];

    for (var i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }

    return oddNumbers
}

// Example usage:
var oddNumbers = getOddNumbers(1, 10);
console.log(oddNumbers);

// Bonus: Create a function average which accepts any amount of numbers and returns their mean average.

// The mean average of a set of numbers is calculated by adding them all up and dividing the result of the addition by the amount of numbers in the set
// Example: To calculate the average of 12, 14 and 16 -
// 12 + 14 + 16 = 42
// 42 / 3 = 14

const average = (...elmt) => {
    let sum = 0;
    for (let i = 0; i < elmt.length; i++) {
        sum += parseInt(elmt[i], 10);
    }

    return sum / elmt.length;
};

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14



function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

//3
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
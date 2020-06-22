//1
console.log('1----------------------------');
const answer = numbers => {
    let result = 0
    for (let i = 1; i <= numbers; i++) {
        result = i + result;

    }
    return result;
};

console.log(answer(4));
console.log('7----------------------------');
//7
function calculateDogAge(humanAge, dogAge) {
    return `Your dog is ${dogAge * humanAge} years old in dog years !`;
}

console.log(calculateDogAge(7, 5));

console.log('3----------------------------');
//3

const whether = (word) => {

    if (word.includes("bu" || "tri" || "triplet")) {
        return true;
    } else {
        return false;
    }
}
console.log(whether("pastry"))
console.log(whether("button"))

console.log('4----------------------------');
//4 

function m(number) {
    if (number <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(m(-1));
console.log(m(5));


console.log('5----------------------------')
//5
function countOccurrences(str, letter) {
    let letterCount = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) === letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}

console.log(countOccurrences("this is a string", 'i'));

console.log('6----------------------------');
//6
console.log(Math.pow(5, 5));
console.log(Math.pow(10, 10));
console.log(Math.pow(3, 3));


const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(5, 5));
console.log(power(10, 10));
console.log(power(3, 3));

//8


console.log('8----------------------------');

function calcSuppyCorrect(years, amount) {
    const maxAge = 80;
    if (years > maxAge) {
        return "Too old";
    }
    leftYears = maxAge - years;
    return `You will need ${leftYears * 365 * amount} bars of chocolate (${amount} a day) to last you til the age of ${maxAge}. `;
}

console.log(calcSuppyCorrect(25, 2));
console.log(calcSuppyCorrect(40, 3));

/////////////////

////////////////////

/*11. XO Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:
*/
// 012345678910
//"hello world" = lenght 11
const xo = (myString) => {
    let checkForX = 0; // "x"
    let checkForO = 0; // "o"
    let myNewString = myString.toLowerCase();
    for (let position = 0; position < myNewString.length; position++) {
        if (myNewString.charAt(position) === "x") {
            checkForX++;
        } else if (myNewString.charAt(position) === "o") {
            checkForO++;
        }
    }
    if (checkForO === checkForX) {
        return true;
    } else {
        return false;
    }
}
console.log(xo("ooxx")); // ➞ true
console.log(xo("xooxx")); // ➞ false
console.log(xo("ooxXm")); // ➞ true (case insensitive)
console.log(xo("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(xo("zzoo")); // ➞ false


////**13. Validate Email.**
const validateEMail = (string) => {
    let isAsRequired = true;
    let countAt = 0;
    let atPos = 0;
    let dotPos = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "@") {
            countAt++;
            atPos = i;
        } else if (string[i] === ".") {
            dotPos = i;
        }
    }
    if (string[0] === "@" || countAt !== 1 || atPos > dotPos) {
        isAsRequired = false;
    }
    return `"${string}" is ${isAsRequired ? "valid" : "invalid"}.`;
};
console.log(validateEMail("john.smith@com"));
console.log(validateEMail("john.smith@email.com"));
console.log(validateEMail("john.smith@com"));
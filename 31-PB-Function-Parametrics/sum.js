// Create a function sum which accepts any amount of numbers and return the sum of their addition



const sum = (...elmt) => {
    let sum1 = 0;
    for (let i = 0; i < elmt.length; i++) {
        sum1 += elmt[i];
    }

    return sum1;
};


console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
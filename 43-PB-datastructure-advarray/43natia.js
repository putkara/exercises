const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];
const total = orders.reduce(function (previousValue, currentValue) {
    console.log(previousValue);
    return currentValue["amount"] + previousValue;
}, 0);
console.log(total);



//////////////////
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

/////////////////
let array = [1, 2, 3, 4, 5]; //returns 15

// Getting sum of numbers
let sum = array.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(sum);

///
function sumRoots2(array) {
    return array.map(Math.round)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
}
console.log(sumRoots2([1, 2, 3, 4, 5]));
console.log(sumRoots2([6, 7, 7]));



////////////////////////
function sumRoots(array) {
    return array.map(Math.sqrt)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
}
console.log(sumRoots([1, 2, 3, 4, 5]));
console.log(sumRoots([6, 7, 7]));



///3
let arr1 = [1, 2, 3, 11, 12, 13]; //returns [2,12]

let evens = arr1.filter(function (x) {
    return x % 2 === 0;
})

console.log(evens);


/*
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (arr, searchTerm) =>{
    let getChar = arr.filter(function(value){
       if (value.toLowerCase().includes(searchTerm)) {
        return value;
       }
    })
    return getChar;
}
console.log(filterItems(friends, "ka"));
console.log(filterItems(friends, "e"));
*/



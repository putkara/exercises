'use strict';
const euroCities = ["London", "Valletta", "Prague", "Rome"];
var first = euroCities.shift()
console.log(euroCities);
let newLength = euroCities.unshift("Berlin")
var last = euroCities.pop();
euroCities.push();
console.log(euroCities);
////////////////////////
const words = ["London", "Valletta", "Prague", "Rome"];

const result = words.filter(word => word.length > 5);

console.log(result);

////////////////////////////////////
const city = ["London", "Valletta","Budapest", "Gagnoa" , "Prague","Gainesville","Berlin", "Rome", "Gaborone"];

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log(filterItems(city, 'Va')); // [ 'Budapest', 'Berlin' ]
console.log(filterItems(city, 'B')); //[ 'Budapest', 'Berlin' ]
console.log(filterItems(city, 'Ga')); //[ 'Gagnoa', 'Gainesville', 'Gaborone' ]
/////
function reverseFun(str) {
    const reverseArray = str.split('');
    console.log(reverseArray);
    reverseArray.reverse();
    return reverseArray.join('');
}
console.log(reverseFun('hello world'));
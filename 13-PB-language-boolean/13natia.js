
"use strict";

//1
console.log(3 === "3" ? true : false); 
// expected output:false
// "3" is a string only 3 is numer
// it means there are difference
// ===  compares value && type

console.log(3 == "3" ? true : false); 
// true, automatically String always wins
//we need use === 
//Then it will repeat the loop as long as the condition is true.
//2

let myCat = true;
console.log(!myCat? true : false); 
// expected output:false


//3
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
//we get first non empty varieble
//i am not thet good in Comment

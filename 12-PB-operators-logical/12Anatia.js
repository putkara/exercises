"use strict";

//0

let a = 'true';
let b = 'false';

//1
//a)

console.log(a && b);
// expected output:false

//b

console.log(a || b); 
// expected output:true

//c
console.log(!(a && b)); 
// expected output:false

//2
let x = 40.5;
let y = 350;
let z = 68;

//a
console.log(x > z && x > y); 
// expected output:false

//b
console.log(x !== y);
// expected output:true

//c
console.log(z < y || z > x); 

// expected output:true

//d
console.log(x !== z || x !== z);
// expected output:true

//e
console.log(x >= 10 && y <= 10);  

// expected output:false

//f

console.log(x * z < 100 || x * y < 100);
// expected output:false

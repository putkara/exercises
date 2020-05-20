//1 Minimum and maximum
//a
console.log(Math.min(-1, 0, 1, 2, 3, 4));
// expected output: -1
//b 
console.log(Math.max(-1, 0, 1, 2, 3, 4));
// expected output: 4
//2  Rounding
//a

console.log(Math.ceil(3321.32321));
// expected output: 3322

console.log(Math.ceil(326.76));
// expected output: 327

console.log(Math.ceil(76788.7));
// expected output: 76789

console.log(Math.ceil( -9.78));
// expected output: -9

console.log(Math.ceil( 43.342));
// expected output: 44


//b
console.log(Math.floor( 3321.32321));
// expected output: 3321


console.log(Math.floor( 326.76));
// expected output: 326


console.log(Math.floor( 76788.7));
// expected output: 76788


console.log(Math.floor(  -9.78));
// expected output: -10


console.log(Math.floor( 28.329));
// expected output: 28


//3 Dice Roll!

console.log(Math.floor(Math.random() * 6) + 1);
// expected output: 5..


//console.log(Math.ceil(Math.random() * 6) + 1);
// expected output: 7..

//console.log((Math.random() * 6) + 1);
// expected output: 4.9272104593340895..

//console.log(Math.round(Math.random() * 6) + 1);
// expected output: 7..

let min = Math.ceil(6);
let max = Math.floor(1);
for(let i = 1; i < 6; i++) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
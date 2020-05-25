//1

//a
console.log(isNaN("hello"));
// expected output:true

//b
console.log(isNaN("3"));
// expected output:false
//c
console.log(typeof(NaN));
// expected output: number

//2
console.log(0.1 * 0.2);
console.log((0.1 * 0.2).toFixed(2));
//expected output:0.020000000000000004
// with toFixed output is 0.02

//3

//a

console.log(Infinity / 0 );
// expected output: Infinity

//b

console.log(Infinity/Infinity);
// expected output: NaN


//c
console.log(1/0); 
// expected output: Infinity
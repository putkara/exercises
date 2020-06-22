// Create a function howManyArgs which returns the total amount of arguments passed to it.
// Example: passing 3 arguments when calling the function should return the number 3, passing 15 arguments should return the umber 15


var arr = ["hello","better","are","you"];

function applyTest(){
    var arg = arguments.length;
    console.log(arg);
}

applyTest.apply(null,arr);
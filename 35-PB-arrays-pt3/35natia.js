//1

function isFourLetters(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == 4) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log(isFourLetters(["Dog", "Cat", "Deer"]));
//2
function month(num) {
    let mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return mon[num - 1];
}


console.log(month(3));
console.log(month(12));
console.log(month(6));
console.log(month(1)); // my month
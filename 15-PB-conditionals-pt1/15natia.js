// 1
let value1 = 60;
let value2 = 40;

if (value1 <= 50 && value1 >= 99) {
    console.log(true);
}

if (value2 <= 50 && value2 >= 99) {
    console.log(true);
}

// 2.
let value3= null;
if (50 <= value1 && value1 <= 99 || 50 <= value2 && value2 <= 99 || 50 <= value3 && value3<= 99) {
console.log(true);
}


// 3

let a = 10;
let b = 55;
let c = 18;

if (a > b && a > c) {
    console.log(a);
}

if (b > a && b > c) {
    console.log(b);
}

if (c > a && c > b) {
    console.log(c);
}


//4

let newStr  = 'Pyyy';
if ((newStr.substring(0, 2)) === 'Py') {
console.log(newStr);
};

//5
if (choice === 'sunny' && temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
  } else if (choice === 'sunny' && temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
  }
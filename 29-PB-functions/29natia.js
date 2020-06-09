//1

const answer = numbers => {
    let result = 0
    for (let i = 1; i <= numbers; i++) {
        result = i + result;

    }
    return result;
};

console.log(answer(4));

//7
function calculateDogAge(humanAge, dogAge) {
    return `Your doggie is ${dogAge * humanAge} years old in dog years !`;
}

console.log(calculateDogAge(7, 5));


//3

const whether = (word) => {

    if (word.includes("bu" || "tri" || "triplet")) {
        return true;
    } else {
        return false;
    }
}
console.log(whether("pastry"))
console.log(whether("button"))


//4
function m(number) {
    if (number <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(m(-1));
console.log(m(5));


//5
function countOccurrences(str, letter) 
{
 let letterCount = 0;
 for (let position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) === letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}

console.log(countOccurrences("this is a string", 'i'));


//6
console.log(Math.pow(5, 5));
console.log(Math.pow(10, 10));
console.log(Math.pow(3, 3));



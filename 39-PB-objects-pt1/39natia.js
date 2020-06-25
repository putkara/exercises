// **1. Object Person.**
console.log("**1. Object Person.**");
const person1 = {
    firstName: "Natia",
    lastName: "Meskhi",
    age: 33,
    cats: "Nyan and Ori",
    married: true,

};
for (let [key, value] of Object.entries(person1)) {
    console.log(`${key}: ${value}`);
}

//**2. Get Values.** 

console.log("**2. Get Values.**");

const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
};
console.log(Object.values(getObjectValues));


///**3. Add A Method.**
console.log("**3. Add A Method.**");


let person2 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    myMethod: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`;
    }
}
console.log(person2.myMethod());

console.log("## Bonus Questions");
///**1. Convert keys and values into an array.** 
console.log("**1. Convert keys and values into an array.** ");

/*
There is 2 whays to do it 
let obj = {
    A: 1,
    B: 2,
    C: 3
}
*/
let obj = {'A':1,'B':2,'C':3}
let result = Object.keys(obj).map(function (key) {
    return [ (key),obj[key]];
});

console.log(result);

console.log("**1. B ");
 
let objectToArray = {
    cats: 1,
    dogs: 2, 
    turtles: 4
  };
  let results = Object.keys(objectToArray).map(function (key) {
    return [ (key),objectToArray[key]];
});

console.log(results);

///**2. List Properties.**
console.log("**2. List Properties.** ");

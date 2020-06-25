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
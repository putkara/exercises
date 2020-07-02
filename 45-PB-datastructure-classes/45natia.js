class Person {
    constructor(name, age) { 
    this.name = name;
    this.age = age;
}
 }
Person.prototype.greet = function() {
    return `${this.name} ${this.age} years old.`;
}

const john = new Person('John,', 19); 
console.log(john.greet())
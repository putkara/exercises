///#### 1. Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function () {
            return `${this.name} is ${this.age} years old.`;
        }
    }

}

const john = new Person('John,', 19);
console.log(john.greet())


///////////////////#### 2. Volume
class Cylinder { 
   constructor (cylHeight, cylDiameter) {


    this.cylHeight = cylHeight;
    this.cylDiameter = cylDiameter;
}

 Volume = function () {
    let radius = this.cylDiameter / 2;
    return this.cylHeight * Math.PI * radius * radius;
     }
};

let cyl = new Cylinder(8, 4);
console.log('volume =', cyl.Volume().toFixed(4));
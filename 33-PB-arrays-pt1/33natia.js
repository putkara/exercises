'use strict';
const euroCities = ["London", "Valletta", "Prague", "Rome"];
var first = euroCities.shift()
console.log(euroCities);
let newLength = euroCities.unshift("Berlin")
var last = euroCities.pop();
euroCities.push("Budapest");
console.log(euroCities);
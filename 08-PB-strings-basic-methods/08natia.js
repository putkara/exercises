
//1

let park = 'I can walk in the park  all day!';
console.log(park.substring(18, 22));
   
//2
 let helloWorld = "Hello World";
 helloWorld = helloWorld.toUpperCase();  
 console.log(helloWorld);

 //3
 helloWorld = helloWorld.toLowerCase();
 console.log(helloWorld); 

 //4
 let JavaScript = 'JavaScript';
 console.log(JavaScript.substring(3, 6));

 //5 
let check = "nice shoes";
console.log(check.includes("l"));
console.log(check.includes("n"));

//6
let bananas = 'Bananas';
console.log(bananas[0] + bananas + bananas[0]);

//7
let scritch = 'Scritch';
console.log(scritch.substring(4, 7) + scritch + scritch.substring(4, 7));

//8

let output = 'BoogieWoogie';
console.log( output.substring(5,6) + output.substring(1, 6) + output.substring( 6,11 )+output.substring( 0,1 ));

//9
let firstName = "Natia";
let city = "Berlin";
console.log(`My name is ${firstName}. I live in ${city} and I am a student.`);

//10

let fox = "the quick brown fox";
fox = `${fox[0].toUpperCase()}${fox.substring(1)}`;

console.log(fox);

//10 or we can do
console.log(fox[0].toUpperCase() + fox.slice(1));
//1
/*
The map()(English. Mapped ) method applies to each 
element of the array the provided 
function and returns the result in a new array.
*/
const numbers = integers => {

    let total = 0;
    let total2 = 1;
    integers.map(value => (total += value));
    integers.map(value2 => (total2 *= value2));

    return `An array (of at least 3 numbers) is ${total} and  ${total2}`;
};

console.log(numbers([1, 4, 9, 16]));



//2

const hiFriends = friends => {
    let index = -1;

    return friends.map(element => {
        index += 1;
        console.log(
            `Hello ${element}. ${element} is at index ${index} of my friends array`
        );
    });
};

hiFriends(["Mari", "Nyan", "Ori", "Olga", "Marisha"]);



///3
/*
it's for me :)
The  join()method concatenates and returns all elements of an array
 (or  array-like objects ) separated by 
 commas or a specified separator
  in a string. If the array contains only one element,
 only this element is returned without a separator.
 */
const cityNames = cities => {
    const city = cities.map(element => cities.join(", "));
    return city[0];
};

console.log(cityNames(["Berlin", "Tbilisi", "Barselona", "Vilnius."]));
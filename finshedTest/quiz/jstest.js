/* 
let randomlist = [1, 2, 3];
let randomIndex = Math.floor(Math.random() * randomlist.length);
let random = randomlist[randomIndex];

if (random === 1) {ص
  randomlist.splice(randomIndex, 1);
} else if (random === 2) {
  randomlist.splice(randomIndex, 1);
} else if (random === 3) {
  randomlist.splice(randomIndex, 1);
}

console.log(random);
console.log(randomlist);

*/

let number = [1, 2, 54, 23, 542, 223];

number.forEach((num) => {
  if (num > 20 && num < 50) {
    console.log(num);
  }
});

// Simple forEach sample: Log each number
console.log("Simple forEach sample:");
let simpleArray = [10, 20, 30, 40, 50];
simpleArray.forEach((num) => console.log(num));

// Harder: forEach with objects, filter and transform
console.log("Harder forEach sample:");
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

let adults = [];
people.forEach((person) => {
  if (person.age >= 30) {
    adults.push({ name: person.name.toUpperCase(), age: person.age });
  }
});

console.log(adults);

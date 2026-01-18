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

console.log(
  "--------------------------------------------------------------------------",
);
let fruits = [
  { name: "Apple", expirtion: "2025-12-01" },
  { name: "Banana", expirtion: "2025-11-15" },
  { name: "Cherry", expirtion: "2026-01-10" },
];
let freshFruits = [];

fruits.forEach((fruit) => {
  let expDate = new Date(fruit.expirtion);
  let currentDate = new Date();
  if (expDate < currentDate) {
    freshFruits.push(fruit.name);
  }
});
console.log(freshFruits);

console.log(
  "--------------------------------------------------------------------------",
);

let tasks = [
  { title: "homerwork", deadline: "2024-07-01" },

  { title: "cleaning", deadline: "2024-07-01" },

  { title: "shopping", deadline: "2026-07-01" },
];

let notime = [];

tasks.forEach((taskss) => {
  let dl = new Date(taskss.deadline);
  let today = new Date();
  if (dl < today) {
    notime.push(taskss.title);
  }
});

console.log(notime);

let products = [
  { name: "Laptop", quantity: 2 },
  { name: "Phone", quantity: 0 },
  { name: "Tablet", quantity: 3 },
];

let outOfStock = [];
let inOfStock = [];
products.forEach((productstock) => {
  let instock = productstock.quantity;
  if (instock === 0) {
    outOfStock.push(productstock.name);
  } else {
    inOfStock.push(productstock.name);
  }
});

console.log("outofstock", outOfStock);
console.log("inofstock", inOfStock);

*/

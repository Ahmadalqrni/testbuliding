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

console.log(adults.map(person => person.name));

/-----------------------------------------------------/

console.log('----------------------------------------------------')
expfurit = []
let furit = [
  {name: "apple", month: 12},
  {name: "apple", month: 1},
  {name: "apple", month: 5},
  
];

furit.forEach((furitdata)=>{
  if(furitdata.month > 5){
    expfurit.push({name:furitdata.name , age: furitdata.month})
  }
}
)

console.log(expfurit.map(furit => furit.name))

console.log("-----------------------------loop using opject----------------------")

let centerindex = 0

question = [
  {
    question:  "what is 9 + 9",
    answer: [10,20,16,13],
    rightanswer: 2
  },
  {
    question:  "what is 9+11",
    answer: [10,20,16,13],
    rightanswer: 2
  },
  {
    question:  "what is 9+1",
    answer: [10,20,16,13],
    rightanswer: 0
  },
];

centerindex = Math.floor(Math.random()*3)


 
console.log(question[centerindex].question, question[centerindex].answer)


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your answer: ", (answer) => {
  if (answer === question.rightanswer){
    console.log('well done')
  }
  rl.close();
});

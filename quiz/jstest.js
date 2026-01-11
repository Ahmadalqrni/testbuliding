let randomlist = [1, 2, 3];
let randomIndex = Math.floor(Math.random() * randomlist.length);
let random = randomlist[randomIndex];

if (random === 1) {
  randomlist.splice(randomIndex, 1);
} else if (random === 2) {
  randomlist.splice(randomIndex, 1);
} else if (random === 3) {
  randomlist.splice(randomIndex, 1);
}

console.log(random);
console.log(randomlist);

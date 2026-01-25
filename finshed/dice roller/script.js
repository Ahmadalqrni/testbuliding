const dice = document.getElementById("dice");
const button = document.getElementById("rollBtn");

const listshape = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

button.addEventListener("click", rolldice);

function rolldice() {
  let count = 0;
  const rolling = setInterval(() => {
    // Show a random face quickly
    const randomIndex = Math.floor(Math.random() * 6);
    dice.textContent = listshape[randomIndex];
    count++;
  }, 100); // change face every 100ms

  // Stop rolling after 8 changes (~0.8s)
  setTimeout(() => clearInterval(rolling), 800);
}

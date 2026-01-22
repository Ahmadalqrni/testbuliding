let dice = document.getElementById("dice");

const button = document.getElementById("rollBtn");
button.addEventListener("click", rolldice);

function rolldice() {
  const listshape = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  const randomNumber = Math.floor(Math.random() * 6);
  dice.textContent = listshape[randomNumber];
}

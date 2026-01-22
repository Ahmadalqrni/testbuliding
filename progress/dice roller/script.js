let dice = document.getElementById("dice");

function rolldice() {
  listshape = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.textContent = listshape[randomNumber - 1];
}

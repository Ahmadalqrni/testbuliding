colorbutton = document.getElementById("color-button-generator");

function randomcolor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `rgb(${red},${blue},${green})`;
}

colorbutton.addEventListener("click", () => {
  document.body.style.backgroundColor = randomcolor();
});

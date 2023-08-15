const colorDisplay = document.getElementById("color-display");
const colorChanger = document.getElementById("color-changer");

colorChanger.addEventListener("click", handleColorChange);

function handleColorChange(event) {
  const target = event.target;

  if (target.matches("button")) {
    const color = target.id;

    if (color === "random") {
      applyRandomColor();
    } else if (color === "reset") {
      resetColor();
    } else {
      applyColor(color);
    }
  }
}

function applyRandomColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = `Current Color: ${randomColor}`;
}

function applyColor(color) {
  document.body.style.backgroundColor = color;
  colorDisplay.textContent = `Current Color: ${color}`;
}

function resetColor() {
  document.body.style.backgroundColor = "#2c3e50"; // Default Dark Blue Background
  colorDisplay.textContent = "Current Color";
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

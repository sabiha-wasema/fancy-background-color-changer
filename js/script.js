const colorDisplay = document.getElementById("color-display");
const colorChanger = document.getElementById("color-changer");
const defaultColor = "#f0f0f0"; // Default Dark Blue Background

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
      resetColor(); // Reset color before applying a new color
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
  document.body.style.backgroundColor = defaultColor;
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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const containerToAdd = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const quantityInput = document.querySelector("input[type='number']");
  const finalQuantity = Number(quantityInput.value);
  const arrayOfDivs = [];
  for (let i = 0; i < finalQuantity; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
    arrayOfDivs.push(div);
  }
  containerToAdd.append(...arrayOfDivs);
}

function destroyBoxes() {
  containerToAdd.innerHTML = "";
}

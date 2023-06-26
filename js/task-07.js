const sizeControler = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

sizeControler.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  textElement.style.fontSize = fontSize;
});

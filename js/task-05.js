const inputElement = document.getElementById("name-input");
const spanUserNameEl = document.getElementById("name-output");

inputElement.addEventListener("input", (event) => {
  if (event.target.value === "") {
    spanUserNameEl.textContent = "Anonymous";
    return;
  }
  spanUserNameEl.textContent = event.target.value;
});

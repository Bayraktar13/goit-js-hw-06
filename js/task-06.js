const inputElement = document.getElementById("validation-input");
const validClass = "valid";
const invalidClass = "invalid";

inputElement.addEventListener("blur", (event) => {
  const enteredValue = event.target.value;
  const requiredLength = parseInt(event.target.getAttribute("data-length"));

  if (enteredValue.length === requiredLength) {
    event.target.classList.add(validClass);
    event.target.classList.remove(invalidClass);
  } else {
    event.target.classList.add(invalidClass);
    event.target.classList.remove(validClass);
  }
});

// #validation-input.invalid
// #validation-input.valid
// Классы valid и invalid не должны включать идентификатор validation-input, так как они используются для добавления стилей к элементу с идентификатором id="validation-input" в CSS.

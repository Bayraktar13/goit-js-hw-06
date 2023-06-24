const valueEl = document.getElementById("value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

let counter = 0;

decrement.addEventListener("click", () => {
  counter -= 1;
  valueEl.textContent = counter;
});

increment.addEventListener("click", () => {
  counter += 1;
  valueEl.textContent = counter;
});

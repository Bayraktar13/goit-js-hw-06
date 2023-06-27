const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

function createList(names) {
  const listItems = names.map((el) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = el;
    return li;
  });

  ul.append(...listItems);
}

createList(ingredients);

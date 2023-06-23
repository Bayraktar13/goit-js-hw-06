const ulListEl = document.querySelector("#categories");
const liItemsEl = ulListEl.querySelectorAll(".item");

console.log("Number of categories:", liItemsEl.length);

liItemsEl.forEach((el) => {
  const categories = el.querySelector("h2").textContent;
  const elements = el.querySelectorAll("ul > li").length;
  console.log(`Category: ${categories}`);
  console.log(`Elements: `, elements);
});

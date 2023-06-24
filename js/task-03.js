const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const ul = document.querySelector(".gallery");

// function createGallary(names) {
//   names.forEach((el) => {
//     const li = document.createElement("li");
//     li.classList.add("gallery-items");
//     const img = document.createElement("img");
//     img.src = el.url;
//     img.width = 700;
//     img.alt = el.alt;
//     li.append(img);
//     ul.append(li);
//   });
// }

// createGallary(images);

const ul = document.querySelector(".gallery");

const createDrawing = (images) => {
  return `<li class='gallery-items'>  <img src="${images.url}" alt="${images.alt}" width="300"> </li>`;
};

const createGallery = (images) => {
  const galleryItem = images.map(createDrawing).join("");
  return galleryItem;
};

const result = createGallery(images);

ul.insertAdjacentHTML("beforeend", result);

const firstLi = document.querySelector(".gallery li:first-child");





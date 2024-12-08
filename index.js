const cats = [
  {
    breed: "Siamese",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Siam_lilacpoint.jpg/640px-Siam_lilacpoint.jpg",
  },
  {
    breed: "Persian",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg",
  },
  {
    breed: "Maine Coon",
    image:
      "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/03/maine-coon-cat-breed.jpg",
  },
  {
    breed: "Bengal",
    image:
      "https://www.trupanion.com/images/trupanionwebsitelibraries/pet-blogs/bengal-cat-1-.jpg?sfvrsn=4f56903_6",
  },
  {
    breed: "Sphynx",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Sphynx_-_cat._img_031.jpg",
  },
  {
    breed: "British Shorthair",
    image:
      "https://cdn.shopify.com/s/files/1/2668/1922/files/british-shorthair-1.jpg?v=1689089942",
  },
  {
    breed: "Abyssinian",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/640px-Gustav_chocolate.jpg",
  },
  {
    breed: "Ragdoll",
    image:
      "https://www.simpsonspremium.com/cdn/shop/articles/Untitled_design_14.png?v=1638192880",
  },
  {
    breed: "Scottish Fold",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Adult_Scottish_Fold.jpg",
  },
  {
    breed: "Norwegian Forest Cat",
    image:
      "https://www.thesprucepets.com/thmb/fMt9c_dfcVennGZ-fafrDm6JO2Y=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1012874850-10aed4af5d554498acc283f55dab8742.jpg",
  },
];

// const listElement = document.createElement("ul");
// cats.forEach(({ breed, image }) => {
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     `<li>
//         <article>
//              <h2>${breed}</h2>
//              <img src="${image}" alt="${breed}">
//         </article>
//   </li>`
//   );
// });
// document.querySelector("body").prepend(listElement);

const listElement = document.createElement("ul");
const catLayout = cats.map(({ breed, image }) => {
  const li = `<li>
        <article>
            <h2>${breed}</h2>
            <img src="${image}" alt="${breed}">
        </article>
    </li>`;
  return li;
});
console.log(catLayout);

const catsList = catLayout.join("");
listElement.insertAdjacentHTML("afterbegin", catsList)
document.querySelector("body").prepend(listElement);

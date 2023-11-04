

var hamburgerMenu = document.getElementById('menu-toggle');
var display = 0;
const mobileMenu = document.getElementById("mobile");

function hideShow() {

    if(display == 0){
        mobileMenu.style.display = 'block';
        display = 1;
    }
    else if(display == 1){
        mobileMenu.style.display = 'none';
       display = 0;
    }
}

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const allRecipes = document.getElementById("recipe-container");

// Loop through recipes and create divs for every three recipe cards
for (let i = 0; i < recipes.length; i += 3) {
  const recipeSetDiv = document.createElement("div"); // Create a <div> for each set of three recipe cards
  recipeSetDiv.className = "recipe-set";

  for (let j = i; j < i + 3 && j < recipes.length; j++) {
    const objectDiv = document.createElement("div"); // Create a <div> element for each recipe card
    objectDiv.className = "recipe-card";
    objectDiv.innerHTML = `
            <h2>${recipes[j].name}</h2>
            <img src="${recipes[j].imageSrc}">
            <p class="type">${recipes[j].type}</p>
            <p class="time">${recipes[j].time}</p>
            <p class="rating">${recipes[j].rating}</p>
            <button class = "heart">
            <img src = "${recipes[j].image}">
            </button>
        `;
        const heartButton = objectDiv.querySelector(".heart");
    heartButton.addEventListener("click", () => {
      heartButton.classList.toggle("red-heart");
    });

    recipeSetDiv.appendChild(objectDiv);
  }

  allRecipes.appendChild(recipeSetDiv);
}

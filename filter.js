

function filterArrayVeg() {
    const recipeFiltered = document.getElementById("recipe-display-container");
    recipeFiltered.innerHTML = ""; // Clear previous content

    let ogArray = recipes; // Assuming `recipes` is your original data array
    let filteredDataArray = [];

    function updateList(filterText) {
        filteredDataArray = ogArray.filter(item => item.type.toLowerCase() === "veg");

        filteredDataArray.forEach(item => {
            const li = document.createElement("li");
            li.className = "list";
            
            const recipeName = document.createElement("h2");
            recipeName.textContent = item.name;
            li.appendChild(recipeName);
            recipeName.className = "name";
            
            const recipeImage = document.createElement("img");
            recipeImage.src = item.imageSrc;
            li.appendChild(recipeImage);
            recipeImage.className = "recipeImg";
            
            const recipeType = document.createElement("p");
            recipeType.textContent = `${item.type}`;
            li.appendChild(recipeType);
            recipeType.className = "type";
            
            const recipeTime = document.createElement("p");
            recipeTime.textContent = `${item.time}`;
            li.appendChild(recipeTime);
            recipeTime.className = "time";
            
            const recipeRating = document.createElement("p");
            recipeRating.textContent = `${item.rating}`;
            li.appendChild(recipeRating);
            recipeRating.className = "rating";

            recipeFiltered.appendChild(li);
        });
    }

    const filterInput = document.getElementById("search-bar");

    // Listen for input changes
    filterInput.addEventListener("input", () => {
        const filterText = filterInput.value.toLowerCase();
        updateList(filterText);
    });

    document.getElementById("recipe-container").style.display = "none";
    updateList("");
}



function filterArrayNonVeg() {
    const recipeFiltered = document.getElementById("recipe-display-container");
    recipeFiltered.innerHTML = ""; // Clear previous content

    let ogArray = recipes; // Assuming `recipes` is your original data array
    let filteredDataArray = [];

    function updateList(filterText) {
        filteredDataArray = ogArray.filter(item => item.type.toLowerCase() === "non-veg");

        filteredDataArray.forEach(item => {
            const li = document.createElement("li");
            li.className = "list";
            
            const recipeName = document.createElement("h2");
            recipeName.textContent = item.name;
            li.appendChild(recipeName);
            recipeName.className = "name";
            
            const recipeImage = document.createElement("img");
            recipeImage.src = item.imageSrc;
            li.appendChild(recipeImage);
            recipeImage.className = "recipeImg";
            
            const recipeType = document.createElement("p");
            recipeType.textContent = `${item.type}`;
            li.appendChild(recipeType);
            recipeType.className = "type";
            
            const recipeTime = document.createElement("p");
            recipeTime.textContent = `${item.time}`;
            li.appendChild(recipeTime);
            recipeTime.className = "time";
            
            const recipeRating = document.createElement("p");
            recipeRating.textContent = `${item.rating}`;
            li.appendChild(recipeRating);
            recipeRating.className = "rating";

            recipeFiltered.appendChild(li);
        });
    }

    const filterInput = document.getElementById("search-bar");

    // Listen for input changes
    filterInput.addEventListener("input", () => {
        const filterText = filterInput.value.toLowerCase();
        updateList(filterText);
    });

    document.getElementById("recipe-container").style.display = "none";
    updateList("");
}

function filterArrayAll() {
    const recipeFiltered = document.getElementById("recipe-display-container");
    recipeFiltered.innerHTML = ""; // Clear previous content

    let ogArray = recipes; // Assuming `recipes` is your original data array
    let filteredDataArray = [];

    function updateList(filterText) {
        filteredDataArray = ogArray.filter(item => item.type.toLowerCase() === "non-veg" || item.type.toLowerCase() === "veg");

        filteredDataArray.forEach(item => {
            const li = document.createElement("li");
            li.className = "list";
            
            const recipeName = document.createElement("h2");
            recipeName.textContent = item.name;
            li.appendChild(recipeName);
            recipeName.className = "name";
            
            const recipeImage = document.createElement("img");
            recipeImage.src = item.imageSrc;
            li.appendChild(recipeImage);
            recipeImage.className = "recipeImg";
            
            const recipeType = document.createElement("p");
            recipeType.textContent = `${item.type}`;
            li.appendChild(recipeType);
            recipeType.className = "type";
            
            const recipeTime = document.createElement("p");
            recipeTime.textContent = `${item.time}`;
            li.appendChild(recipeTime);
            recipeTime.className = "time";
            
            const recipeRating = document.createElement("p");
            recipeRating.textContent = `${item.rating}`;
            li.appendChild(recipeRating);
            recipeRating.className = "rating";

            recipeFiltered.appendChild(li);
        });
    }

    const filterInput = document.getElementById("search-bar");

    // Listen for input changes
    filterInput.addEventListener("input", () => {
        const filterText = filterInput.value.toLowerCase();
        updateList(filterText);
    });

    document.getElementById("recipe-container").style.display = "none";
    updateList("");
}


  // Add event listeners to the checkboxes
  const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
//   filterCheckboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', updateFilters);
//   });
  
  function updateFilters() {
    const above4Checked = document.getElementById('above4').checked;
    const below4Checked = document.getElementById('below4').checked;
  
    // Filter the recipes based on checkbox values
    const filteredRecipes = recipes.filter(recipe => {
      if ((above4Checked && recipe.rating >= 4) || (below4Checked && recipe.rating < 4)) {
        return true;
      }
      return false;
    });
  
    // Call a function to display the filtered recipes
    displayRecipes(filteredRecipes);
  }
  
  // Function to display filtered recipes
  function displayRecipes(filteredRecipes) {
    const recipeDisplay = document.getElementById('recipe-display');
    recipeDisplay.innerHTML = '';
  
    filteredRecipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      // Customize the structure and content of your recipe card here
      recipeDisplay.appendChild(recipeCard);
    });
  }

  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateFilters);
  });
  
  // Initial filtering when the page loads
  updateFilters();
  
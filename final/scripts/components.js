export function createRecipeCard(recipe, isFavorite = false) {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <div class="recipe-image">
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${recipe.id}" aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
          ${isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="recipe-content">
        <h3>${recipe.name}</h3>
        <p class="recipe-category">${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</p>
        <div class="recipe-meta">
          <span>⏱️ ${recipe.cookingTime} min</span>
          <span>👥 ${recipe.servings} servings</span>
          <span class="difficulty ${recipe.difficulty}">${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</span>
        </div>
        <p class="recipe-description">${recipe.description}</p>
        <button class="view-recipe-btn" data-id="${recipe.id}">View Recipe</button>
      </div>
    </div>
  `;
}

export function createModalContent(recipe) {
  return `
    <h2>${recipe.name}</h2>
    <div class="modal-meta">
      <span>⏱️ ${recipe.cookingTime} minutes</span>
      <span>👥 ${recipe.servings} servings</span>
      <span>Difficulty: ${recipe.difficulty}</span>
    </div>
    <p class="modal-description">${recipe.description}</p>
    <div class="modal-section">
      <h3>Ingredients</h3>
      <ul>
        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-section">
      <h3>Instructions</h3>
      <ol>
        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
  `;
}

export function updateFavoriteButton(button, isFavorite) {
  button.classList.toggle('active', isFavorite);
  button.textContent = isFavorite ? '❤️' : '🤍';
  button.setAttribute('aria-label', isFavorite ? 'Remove from favorites' : 'Add to favorites');
}

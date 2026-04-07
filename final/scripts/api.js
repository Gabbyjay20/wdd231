export async function fetchRecipes() {
  try {
    const response = await fetch('data/recipes.json');
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}

export function getFavorites() {
  const favorites = localStorage.getItem('recipeFavorites');
  return favorites ? JSON.parse(favorites) : [];
}

export function saveFavorite(recipeId) {
  const favorites = getFavorites();
  if (!favorites.includes(recipeId)) {
    favorites.push(recipeId);
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
  }
}

export function removeFavorite(recipeId) {
  let favorites = getFavorites();
  favorites = favorites.filter(id => id !== recipeId);
  localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
}

export function isFavorite(recipeId) {
  return getFavorites().includes(recipeId);
}

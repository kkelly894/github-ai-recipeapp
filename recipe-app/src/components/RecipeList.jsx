// RecipeList.jsx
// Responsible for rendering the list of recipe cards.
// It receives recipe data and displays each item using RecipeCard.

import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, setSelectedRecipeId }) {
  if (recipes.length === 0) {
    return (
      <section className="recipe-list recipe-grid">
        <p className="no-recipes-message">No recipes found.</p>
      </section>
    );
  }

  return (
    <section className="recipe-list recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          setSelectedRecipeId={setSelectedRecipeId}
        />
      ))}
    </section>
  );
}

export default RecipeList;

// RecipeCard.jsx
// Responsible for rendering an individual recipe card.
// It shows the recipe name, a short description, and a button to select the recipe.

function RecipeCard({ recipe, setSelectedRecipeId }) {
  return (
    <article className="recipe-card">
      <img
        className="recipe-image"
        src={recipe.image}
        alt={`Photo of ${recipe.name}`}
      />

      <div className="recipe-card-content">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="recipe-category">Category: {recipe.category}</p>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-times">
          <span className="recipe-prep">Prep: {recipe.prepTime}</span>
          <span className="recipe-cook">Cook: {recipe.cookTime}</span>
        </div>
        <button
          type="button"
          className="view-recipe-button"
          onClick={() => setSelectedRecipeId(recipe.id)}
        >
          View Recipe
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;

// RecipeDetails.jsx
// Responsible for rendering the selected recipe details view.
// It will show the full recipe name, description, ingredients, and a back button.

function RecipeDetails({ recipe, setSelectedRecipeId }) {
  return (
    <section className="recipe-details">
      <button
        type="button"
        className="back-button"
        onClick={() => setSelectedRecipeId(null)}
      >
        Back to Recipes
      </button>

      <img
        className="details-image"
        src={recipe.image}
        alt={`Photo of ${recipe.name}`}
      />

      <div className="details-header">
        <h2 className="details-title">{recipe.name}</h2>
        <p className="details-category">Category: {recipe.category}</p>
      </div>

      <p className="details-description">{recipe.description}</p>

      <div className="details-times">
        <p className="details-prep">Prep time: {recipe.prepTime}</p>
        <p className="details-cook">Cook time: {recipe.cookTime}</p>
        <p className="details-servings">Servings: {recipe.servings}</p>
      </div>

      <div className="details-sections">
        <div className="details-section">
          <h3>Ingredients</h3>
          <ul className="ingredient-list">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="details-section">
          <h3>Instructions</h3>
          <ol className="instruction-list">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default RecipeDetails;

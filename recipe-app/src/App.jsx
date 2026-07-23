import { useState } from "react";
import recipes from "./data/recipes";

function App() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedId, setSelectedId] = useState(recipes[0].id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const selectedRecipe = recipes.find((recipe) => recipe.id === selectedId);

  function handleAddRecipe(event) {
    event.preventDefault();

    if (!name.trim() || !description.trim()) {
      return;
    }

    const nextRecipe = {
      id: recipes.length + 1,
      name: name.trim(),
      description: description.trim(),
      ingredients: ["Add ingredients later"],
    };

    setRecipes([...recipes, nextRecipe]);
    setName("");
    setDescription("");
    setSelectedId(nextRecipe.id);
  }

  return (
    <div className="app-shell">
      <header>
        <h1>Recipe App</h1>
        <p>Browse recipes or add your own favorite dish.</p>
      </header>

      <main>
        <section className="list-panel">
          <h2>Recipes</h2>
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <button
                  type="button"
                  className={recipe.id === selectedId ? "active" : ""}
                  onClick={() => setSelectedId(recipe.id)}
                >
                  {recipe.name}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="detail-panel">
          {selectedRecipe ? (
            <>
              <h2>{selectedRecipe.name}</h2>
              <p>{selectedRecipe.description}</p>
              <h3>Ingredients</h3>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Select a recipe to see the details.</p>
          )}
        </section>
      </main>

      <section className="form-panel">
        <h2>Add a New Recipe</h2>
        <form onSubmit={handleAddRecipe}>
          <label>
            Recipe Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter recipe name"
            />
          </label>

          <label>
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Enter a short description"
            />
          </label>

          <button type="submit">Add Recipe</button>
        </form>
      </section>
    </div>
  );
}

export default App;

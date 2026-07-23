// AddRecipeForm.jsx
// Responsible for rendering the form that adds a new recipe.
// It will collect the recipe fields and submit the data to App.

import { useState } from "react";

function AddRecipeForm({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
    cookTime: "",
    servings: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.category.trim() ||
      !formData.image.trim() ||
      !formData.description.trim()
    ) {
      setError("Please fill in the required fields before submitting.");
      return;
    }

    const newRecipe = {
      name: formData.name.trim(),
      category: formData.category.trim(),
      image: formData.image.trim(),
      description: formData.description.trim(),
      ingredients: formData.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
      instructions: formData.instructions
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
      prepTime: formData.prepTime.trim(),
      cookTime: formData.cookTime.trim(),
      servings: formData.servings.trim(),
    };

    addRecipe(newRecipe);
    setFormData({
      name: "",
      category: "",
      image: "",
      description: "",
      ingredients: "",
      instructions: "",
      prepTime: "",
      cookTime: "",
      servings: "",
    });
    setError("");
  }

  return (
    <section className="add-recipe-form-section">
      <h2 className="form-title">Add a New Recipe</h2>
      <form className="add-recipe-form" onSubmit={handleSubmit}>
        {error && <p className="form-error">{error}</p>}

        <label className="form-label" htmlFor="name">
          Recipe Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input"
          value={formData.name}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="category">
          Category
        </label>
        <input
          id="category"
          name="category"
          type="text"
          className="form-input"
          value={formData.category}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="image">
          Image URL
        </label>
        <input
          id="image"
          name="image"
          type="text"
          className="form-input"
          value={formData.image}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="form-textarea"
          value={formData.description}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="ingredients">
          Ingredients (comma separated)
        </label>
        <input
          id="ingredients"
          name="ingredients"
          type="text"
          className="form-input"
          value={formData.ingredients}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="instructions">
          Instructions (comma separated)
        </label>
        <input
          id="instructions"
          name="instructions"
          type="text"
          className="form-input"
          value={formData.instructions}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="prepTime">
          Prep Time
        </label>
        <input
          id="prepTime"
          name="prepTime"
          type="text"
          className="form-input"
          value={formData.prepTime}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          id="cookTime"
          name="cookTime"
          type="text"
          className="form-input"
          value={formData.cookTime}
          onChange={handleChange}
        />

        <label className="form-label" htmlFor="servings">
          Servings
        </label>
        <input
          id="servings"
          name="servings"
          type="text"
          className="form-input"
          value={formData.servings}
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          Add Recipe
        </button>
      </form>
    </section>
  );
}

export default AddRecipeForm;

import { useState } from "react";
import initialRecipes from "./data/recipes";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipeList, setRecipeList] = useState(initialRecipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const selectedRecipe = recipeList.find(
    (recipe) => recipe.id === selectedRecipeId,
  );

  function addRecipe(recipe) {
    const newRecipe = {
      ...recipe,
      id: Date.now(),
    };

    setRecipeList((currentRecipes) => [...currentRecipes, newRecipe]);
  }

  const filteredRecipes = recipeList.filter((recipe) => {
    if (!searchTerm.trim()) {
      return true;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    const nameMatch = recipe.name.toLowerCase().includes(lowerSearchTerm);
    const categoryMatch = recipe.category
      .toLowerCase()
      .includes(lowerSearchTerm);

    return nameMatch || categoryMatch;
  });

  return (
    <div className="app-shell">
      <Header />

      {selectedRecipe ? (
        <RecipeDetails
          recipe={selectedRecipe}
          setSelectedRecipeId={setSelectedRecipeId}
        />
      ) : (
        <>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <RecipeList
            recipes={filteredRecipes}
            setSelectedRecipeId={setSelectedRecipeId}
          />
          <AddRecipeForm addRecipe={addRecipe} />
        </>
      )}
    </div>
  );
}

export default App;

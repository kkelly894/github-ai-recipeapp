// SearchBar.jsx
// Responsible for rendering the recipe search input.
// It will let the user type a recipe name and filter the list of recipes.

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <label className="search-label" htmlFor="recipe-search">
        Search Recipes
      </label>
      <input
        id="recipe-search"
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by recipe name or category"
      />
    </div>
  );
}

export default SearchBar;

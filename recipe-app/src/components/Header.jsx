// Header.jsx
// Responsible for rendering the app title, description, and basic navigation.
// It will stay at the top of the page and give the recipe app a clear heading.

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">Simple Recipes</h1>
        <p className="app-subtitle">
          Search for recipes and add your favorites with ease.
        </p>
      </div>
    </header>
  );
}

export default Header;

# Recipe App

A beginner-friendly React recipe application scaffolded with Vite. This small app lets you browse a list of default recipes, search by name or category, view recipe details, and add new recipes locally in the browser state.

## Features

- Browse a list of default recipes
- Search recipes by name or category
- View recipe details on a separate view
- Add a new recipe (title, category, description)
- Client-side state only — no backend required

## Technologies Used

- React (functional components)
- Vite (development tooling)
- JavaScript (ESModules)
- HTML & CSS
- Visual Studio Code (development)
- GitHub Copilot (assistive coding)

> This project was created with React, Vite, Visual Studio Code, and GitHub Copilot.

## Installation

1. Clone the repository.
2. Install dependencies.

```bash
npm install
```

## Start the application

Start the dev server and open the app in your browser:

```bash
npm run dev
```

To build for production:

```bash
npm run build
npm run preview
```

## Project File Structure

```
index.html
package.json
README.md
vite.config.js
src/
	App.jsx
	main.jsx
	index.css
	styles.css
	components/
		Header.jsx
		SearchBar.jsx
		RecipeList.jsx
		RecipeCard.jsx
		RecipeDetails.jsx
		AddRecipeForm.jsx
	data/
		recipes.js
```

## How the Search Feature Works

- The `SearchBar` component controls a `searchTerm` state in `App.jsx`.
- As you type, recipes are filtered by name and category (case-insensitive).
- If the search box is empty, all default recipes are shown.

This provides instant, client-side filtering without any network requests.

## How the Add Recipe Feature Works

- The `AddRecipeForm` component collects a recipe `name`, `category`, and `description` from the user.
- Submitting the form calls an `addRecipe` function passed from `App.jsx` which appends a new recipe object (with a generated `id`) into the local `recipeList` state using `setRecipeList`.
- New recipes are stored only in memory for the current session (page refresh will reset to the default dataset).

## Recipe Details View

- Clicking a recipe from the list sets `selectedRecipeId` in `App.jsx`.
- When `selectedRecipeId` is set, the app renders `RecipeDetails` for the selected recipe, showing full description and other details.
- From the details view you can return to the list view to continue browsing.

## How GitHub Copilot Was Used

- GitHub Copilot was used as a pair-programming assistant to suggest component structure, small helper snippets, and commit-friendly wording for this README.
- All final code and content were reviewed and adjusted manually to ensure correctness and clarity.

## Possible Future Improvements

- Persist recipes to localStorage or a small backend so added recipes survive refreshes
- Add form validation and better UX for required fields
- Edit and delete recipe functionality
- Categories filters and recipe tagging
- Improve styling and mobile responsiveness
- Add tests for components and utilities

---

If you'd like, I can also:

- Wire up `localStorage` persistence for added recipes
- Improve spacing and visual layout of `AddRecipeForm`
- Add an edit/delete flow for recipes

Enjoy exploring and extending the app!

// recipes.js
// This file holds the initial recipe data for the app.
// App will import this list and use it as initial state.

const recipes = [
  {
    id: 1,
    name: "Avocado Toast",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    description:
      "Toasted bread topped with mashed avocado, lemon, and chili flakes.",
    ingredients: [
      "2 slices whole-grain bread",
      "1 ripe avocado",
      "1 teaspoon lemon juice",
      "pinch of sea salt",
      "pinch of red pepper flakes",
    ],
    instructions: [
      "Toast the bread until golden.",
      "Mash avocado with lemon juice and salt.",
      "Spread the avocado mix over the toasted bread.",
      "Sprinkle with red pepper flakes and serve.",
    ],
    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: 1,
  },
  {
    id: 2,
    name: "Greek Yogurt Parfait",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    description:
      "Layered yogurt, granola, and fresh berries for a quick breakfast.",
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup granola",
      "1/2 cup mixed berries",
      "1 tablespoon honey",
    ],
    instructions: [
      "Spoon yogurt into a bowl or glass.",
      "Add a layer of granola on top.",
      "Top with berries and drizzle honey.",
      "Enjoy immediately.",
    ],
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: 1,
  },
  {
    id: 3,
    name: "Caprese Chicken Salad",
    category: "Lunch",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    description: "A light lunch with chicken, tomatoes, mozzarella, and basil.",
    ingredients: [
      "2 cooked chicken breasts, sliced",
      "1 cup cherry tomatoes, halved",
      "4 oz fresh mozzarella, sliced",
      "fresh basil leaves",
      "2 tablespoons olive oil",
      "1 tablespoon balsamic vinegar",
      "salt and pepper to taste",
    ],
    instructions: [
      "Combine chicken, tomatoes, and mozzarella in a bowl.",
      "Tear basil leaves and add them to the bowl.",
      "Whisk olive oil, balsamic vinegar, salt, and pepper.",
      "Pour dressing over salad and toss gently.",
      "Serve chilled or at room temperature.",
    ],
    prepTime: "15 mins",
    cookTime: "0 mins",
    servings: 2,
  },
  {
    id: 4,
    name: "Veggie Stir-Fry",
    category: "Dinner",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Quick stir-fried vegetables with a savory soy-ginger sauce.",
    ingredients: [
      "1 red bell pepper, sliced",
      "1 cup broccoli florets",
      "1 carrot, sliced",
      "1 zucchini, sliced",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 teaspoon fresh ginger, grated",
      "1 clove garlic, minced",
    ],
    instructions: [
      "Heat sesame oil in a pan over medium heat.",
      "Add garlic and ginger, cook until fragrant.",
      "Add vegetables and stir-fry until tender-crisp.",
      "Stir in soy sauce and cook for another minute.",
      "Serve over rice or noodles.",
    ],
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: 2,
  },
  {
    id: 5,
    name: "Spaghetti Bolognese",
    category: "Dinner",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    description: "Classic spaghetti with a rich tomato and beef sauce.",
    ingredients: [
      "8 oz spaghetti",
      "1/2 lb ground beef",
      "1/2 onion, chopped",
      "1 garlic clove, minced",
      "1 can crushed tomatoes",
      "1 tablespoon tomato paste",
      "1 teaspoon dried oregano",
      "salt and pepper to taste",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "Sauté onion and garlic until soft.",
      "Add ground beef and cook until browned.",
      "Stir in crushed tomatoes, tomato paste, and oregano.",
      "Simmer for 10 minutes, then season to taste.",
      "Serve sauce over drained spaghetti.",
    ],
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: 2,
  },
  {
    id: 6,
    name: "Chocolate Chip Cookies",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1519620862134-fbbfad5b6d75?auto=format&fit=crop&w=800&q=80",
    description: "Soft and chewy cookies filled with chocolate chips.",
    ingredients: [
      "1/2 cup butter, softened",
      "1/4 cup sugar",
      "1/2 cup brown sugar",
      "1 egg",
      "1 teaspoon vanilla extract",
      "1 cup flour",
      "1/2 teaspoon baking soda",
      "1/4 teaspoon salt",
      "1 cup chocolate chips",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "Cream butter and sugars until fluffy.",
      "Add egg and vanilla, then mix well.",
      "Stir in flour, baking soda, salt, and chocolate chips.",
      "Drop spoonfuls onto a baking sheet and bake for 10-12 minutes.",
      "Cool slightly before serving.",
    ],
    prepTime: "15 mins",
    cookTime: "12 mins",
    servings: 12,
  },
];

export default recipes;

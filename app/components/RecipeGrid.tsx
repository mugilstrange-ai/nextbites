"use client";

// A client component: it keeps the search text in state and re-renders
// the grid on every keystroke. Only components that use state or events
// need "use client"; the home page itself stays a server component.

import { useState, type ChangeEvent } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeGrid.module.css";

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  const [query, setQuery] = useState("");

  // Lowercase both sides so the search ignores capital letters.
  const search = query.trim().toLowerCase();
  const matches = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search) ||
      recipe.cuisine.toLowerCase().includes(search),
  );

  return (
    <>
      <div className={styles.search}>
        <label htmlFor="recipe-search" className={styles.label}>
          Search recipes
        </label>
        <input
          id="recipe-search"
          className={styles.input}
          type="search"
          placeholder="Try “pizza” or “South Indian”"
          autoComplete="off"
          value={query}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
        />
        <p className={styles.count} aria-live="polite">
          Showing {matches.length} of {recipes.length} recipes
        </p>
      </div>

      <section className={styles.grid} aria-label="Recipes">
        {matches.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </>
  );
}

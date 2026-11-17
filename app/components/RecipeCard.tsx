import type { Recipe } from "../data/recipes";
import styles from "./RecipeCard.module.css";

// The prop is typed with our Recipe type (no `any`), so TypeScript
// checks every field we read below.
type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cover} aria-hidden="true">
        <span className={styles.emoji}>{recipe.emoji}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.cuisine}>{recipe.cuisine}</p>
        <h2 className={styles.title}>{recipe.title}</h2>
        <p className={styles.description}>{recipe.description}</p>

        <ul className={styles.meta}>
          <li>⏱ {recipe.minutes} min</li>
          <li>
            🍽 {recipe.servings} {recipe.servings === 1 ? "serving" : "servings"}
          </li>
          <li className={`${styles.badge} ${styles[recipe.difficulty.toLowerCase()]}`}>
            {recipe.difficulty}
          </li>
        </ul>
      </div>
    </article>
  );
}

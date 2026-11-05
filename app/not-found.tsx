import Link from "next/link";
import { recipes } from "./data/recipes";
import styles from "./not-found.module.css";

// Shown for any unknown URL, including /recipe/<an id that doesn't exist>.
// Next.js uses this file automatically whenever notFound() is called.
export default function NotFound() {
  const suggestions = recipes.slice(0, 3);

  return (
    <section className={styles.box}>
      <span className={styles.emoji} aria-hidden="true">🥄</span>
      <h1 className={styles.title}>Recipe not found</h1>
      <p className={styles.text}>
        We couldn’t find that page. The link may have a typo, or the recipe may have moved.
      </p>
      <Link href="/" className={styles.home}>
        ← Back to all recipes
      </Link>

      <h2 className={styles.subtitle}>Or try one of these</h2>
      <ul className={styles.list}>
        {suggestions.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipe/${recipe.id}`} className={styles.suggestion}>
              <span aria-hidden="true">{recipe.emoji}</span> {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

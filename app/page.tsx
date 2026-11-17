import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Find your next favourite bite</h1>
        <p className={styles.subheading}>
          {recipes.length} easy recipes from kitchens around the world.
        </p>
      </section>

      {/* One reusable card, fed different data. Each item gets a stable key. */}
      <section className={styles.grid} aria-label="Recipes">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </>
  );
}

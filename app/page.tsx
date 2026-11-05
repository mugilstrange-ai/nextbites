import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";
import styles from "./page.module.css";

// The home page stays a server component. It hands the data to the
// client RecipeGrid, which handles the live search.
export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heading}>Find your next favourite bite</h1>
        <p className={styles.subheading}>
          {recipes.length} easy recipes from kitchens around the world. Tap one to cook it.
        </p>
      </section>

      <RecipeGrid recipes={recipes} />
    </>
  );
}

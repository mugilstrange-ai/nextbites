import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";
import styles from "./page.module.css";

// The [id] folder makes this ONE file serve a page for EVERY recipe:
// /recipe/masala-dosa, /recipe/greek-salad, and any recipe added later.
type RecipePageProps = {
  // In Next.js 15 and later, params arrives as a Promise, so we await it.
  params: Promise<{ id: string }>;
};

// Build one static page per recipe ahead of time. With output: "export" these
// become plain HTML files, so the site can be hosted on GitHub Pages.
export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

// Only the ids above exist. Any other id goes straight to the not-found page.
export const dynamicParams = false;

// Give each recipe page its own browser-tab title.
export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipe(id);
  return {
    title: recipe ? `${recipe.title} · NextBites` : "Recipe not found · NextBites",
    description: recipe?.description,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params; // the id from the URL, e.g. "masala-dosa"
  const recipe = getRecipe(id);

  // No recipe with that id: show the 404 page instead of crashing.
  if (!recipe) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <Link href="/" className={styles.back}>
        ← All recipes
      </Link>

      <header className={styles.header}>
        <div className={styles.cover} aria-hidden="true">
          <span className={styles.emoji}>{recipe.emoji}</span>
        </div>
        <div className={styles.intro}>
          <p className={styles.cuisine}>{recipe.cuisine}</p>
          <h1 className={styles.title}>{recipe.title}</h1>
          <p className={styles.description}>{recipe.description}</p>
          <ul className={styles.meta} aria-label="Recipe details">
            <li>⏱ {recipe.minutes} min</li>
            <li>
              🍽 {recipe.servings} {recipe.servings === 1 ? "serving" : "servings"}
            </li>
            <li>📶 {recipe.difficulty}</li>
          </ul>
        </div>
      </header>

      <div className={styles.columns}>
        <section className={styles.panel} aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading" className={styles.panelTitle}>
            Ingredients <span className={styles.count}>({recipe.ingredients.length})</span>
          </h2>
          <ul className={styles.ingredients}>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className={styles.panel} aria-labelledby="steps-heading">
          <h2 id="steps-heading" className={styles.panelTitle}>
            Steps <span className={styles.count}>({recipe.steps.length})</span>
          </h2>
          <ol className={styles.steps}>
            {recipe.steps.map((step, index) => (
              // Steps can repeat words, so the position makes the key unique.
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}

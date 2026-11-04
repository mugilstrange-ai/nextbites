# NextBites 🍳

A recipe website built with **Next.js (App Router)** and **TypeScript**.

## Part 1: home page

- `app/data/recipes.ts`: the `Recipe` type and the `recipes` array (single source of data)
- `app/components/RecipeCard.tsx`: one reusable card; its `recipe` prop is typed with `Recipe`
- `app/components/NavBar.tsx`: shared nav bar, rendered in `app/layout.tsx` so it shows on every page
- `app/page.tsx`: the home page

## Part 2: live search and a page for every recipe

- **Richer data:** each `Recipe` now has `ingredients: string[]` and `steps: string[]`, and
  `getRecipe(id)` returns the recipe whose `id` matches (`recipes.find(...)`).
- **Live search:** `app/components/RecipeGrid.tsx` is a client component (`"use client"`). It keeps the
  search text in `useState`, filters recipes by title or cuisine (case-insensitive) as you type, and
  shows a friendly message with a **Clear search** button when nothing matches.
- **Home page:** `app/page.tsx` stays a server component and renders `<RecipeGrid recipes={recipes} />`.
- **Dynamic route:** `app/recipe/[id]/page.tsx` is one file that serves `/recipe/<id>` for every recipe.
  It reads the `id` from `params`, looks it up with `getRecipe()`, and renders the ingredients as a
  `<ul>` and the steps as an `<ol>`. Unknown ids show the friendly 404 page in `app/not-found.tsx`.
- **Clickable cards:** each `RecipeCard` is wrapped in a `next/link` `Link` to `/recipe/${recipe.id}`.

Try it: search for `pizza`, `south indian` or `xyz`, then open any card.

Coming next: polish and a live deployment (Part 3).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

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

## Part 3: graceful states and a live site

**Live site: https://mugilstrange-ai.github.io/nextbites/**

- **Loading:** `app/recipe/[id]/loading.tsx` shows a shimmering skeleton shaped like the recipe page, and
  `app/loading.tsx` shows a short message for the home page. Next.js picks both up automatically.
- **Not found:** the recipe route calls `notFound()` when `getRecipe()` returns nothing (and
  `dynamicParams = false` sends any unknown id there too). `app/not-found.tsx` links home and suggests recipes.
  Try https://mugilstrange-ai.github.io/nextbites/recipe/does-not-exist/
- **Errors:** `app/error.tsx` is a `"use client"` error boundary with a **Try again** button that calls `reset()`.
- **Real title:** `app/layout.tsx` exports `metadata` with a title template (`%s · NextBites`) and a description,
  so each recipe tab reads, for example, “Masala Dosa · NextBites”.
- **Static export:** `next.config.mjs` sets `output: "export"` and `trailingSlash: true`, plus a `/nextbites`
  `basePath` for GitHub Pages builds. `generateStaticParams` pre-builds one page per recipe.
- **Deploy:** `.github/workflows/deploy.yml` runs `npm run build` and publishes `out/` to the `gh-pages` branch.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build the static site yourself:

```bash
npm run build   # writes the whole site to out/
```

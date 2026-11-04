# NextBites 🍳

A recipe website built with **Next.js (App Router)** and **TypeScript**.

## Part 1: home page

- `app/data/recipes.ts`: the `Recipe` type and the `recipes` array (single source of data)
- `app/components/RecipeCard.tsx`: one reusable card; its `recipe` prop is typed with `Recipe`
- `app/components/NavBar.tsx`: shared nav bar, rendered in `app/layout.tsx` so it shows on every page
- `app/page.tsx`: maps `recipes` into `<RecipeCard key={recipe.id} />` inside a responsive CSS grid
  (`repeat(auto-fill, minmax(230px, 1fr))`)

Coming next: search and recipe detail pages (Part 2) and a live deployment (Part 3).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

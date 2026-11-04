import Link from "next/link";

// Shown for any unknown URL, including /recipe/<an id that doesn't exist>.
export default function NotFound() {
  return (
    <section style={{ padding: "3rem 0", display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "flex-start" }}>
      <h1 style={{ margin: 0 }}>Recipe not found 🥄</h1>
      <p style={{ margin: 0, color: "var(--muted)" }}>
        We couldn’t find that page. It may have moved, or the link has a typo.
      </p>
      <Link href="/" style={{ color: "var(--accent)", fontWeight: 600 }}>
        ← Back to all recipes
      </Link>
    </section>
  );
}

"use client";

// Error boundaries run in the browser, so this file must be a client component.
// If anything inside a page throws, Next.js shows this screen instead of a blank page.
import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void; // re-renders the page that failed
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Keep the details in the console for whoever is debugging.
    console.error(error);
  }, [error]);

  return (
    <section className={styles.box} role="alert">
      <span className={styles.emoji} aria-hidden="true">🍳</span>
      <h1 className={styles.title}>Something burnt in the kitchen</h1>
      <p className={styles.text}>
        This page hit an unexpected error. Your recipes are safe. Try loading it again.
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.retry} onClick={() => reset()}>
          Try again
        </button>
        <Link href="/" className={styles.home}>
          Go to all recipes
        </Link>
      </div>
    </section>
  );
}

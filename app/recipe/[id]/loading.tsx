import styles from "./loading.module.css";

// Shown automatically by Next.js while a recipe page is getting ready.
// It mirrors the real page's layout so nothing jumps when the content arrives.
export default function RecipeLoading() {
  return (
    <div className={styles.page} role="status" aria-live="polite">
      <span className={styles.srOnly}>Loading recipe…</span>
      <div className={`${styles.block} ${styles.back}`} />
      <div className={styles.header}>
        <div className={`${styles.block} ${styles.cover}`} />
        <div className={styles.intro}>
          <div className={`${styles.block} ${styles.line} ${styles.short}`} />
          <div className={`${styles.block} ${styles.title}`} />
          <div className={`${styles.block} ${styles.line}`} />
          <div className={`${styles.block} ${styles.line} ${styles.medium}`} />
        </div>
      </div>
      <div className={styles.columns}>
        <div className={`${styles.block} ${styles.panel}`} />
        <div className={`${styles.block} ${styles.panel}`} />
      </div>
    </div>
  );
}

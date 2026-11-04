import Link from "next/link";
import styles from "./NavBar.module.css";

// Rendered once in app/layout.tsx, so it appears on every page.
export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <Link href="/" className={styles.brand}>
          <span aria-hidden="true">🍳</span> NextBites
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

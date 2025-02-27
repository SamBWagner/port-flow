import styles from "./header.module.css";

export default function Header({ className, children, h2 }) {
  return (
    <header className={`${className} ${styles.headerContainer}}`}>
      {h2 ? (
        <h2 id="heading-page-name" className={styles.heading}>
          Sam Wagner
        </h2>
      ) : (
        <h1 id="heading-page-name" className={styles.heading}>
          Sam Wagner
        </h1>
      )}

      {children}
    </header>
  );
}

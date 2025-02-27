import styles from "./header.module.css";

export default function Header({ className, children }) {
  return (
    <header className={`${className} ${styles.headerContainer}}`}>
      <h1 id="heading-page-name" className={styles.heading}>
        Sam Wagner
      </h1>

      {children}
    </header>
  );
}

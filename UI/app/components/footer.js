import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container} id="pageFooter">
      <ul className={styles.ul}>
        <li id="sams-footer-github-label">
          GitHub:{" "}
          <a
            href="https://www.github.com/SamBWagner"
            rel="nofollow"
            aria-labelledby="sams-footer-github-label"
            target="_blank"
          >
            @SamBWagner
          </a>
        </li>
        <li id="sams-footer-linkedin-label">
          LinkedIn:{" "}
          <a
            href="www.linkedin.com/in/sam-b-wagner"
            rel="nofollow"
            aria-labelledby="sams-footer-linkedin-label"
            target="_blank"
          >
            Sam Wagner
          </a>
        </li>
      </ul>
    </footer>
  );
}

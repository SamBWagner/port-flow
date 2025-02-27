import styles from "./footer.module.css";
import Link from "next/link";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Footer() {
  return (
    <div className="container">
      <footer className={styles.footer} id="pageFooter">
        <ul id="footer-list" className={styles.ul}>
          <li id="sams-footer-github-label">
            <Link
              href="https://www.github.com/SamBWagner"
              rel="nofollow"
              aria-labelledby="sams-footer-github-label"
              target="_blank"
            >
              <SlSocialGithub className={`${styles.gitHub}`} />
            </Link>
          </li>
          <li id="sams-footer-linkedin-label">
            <Link
              href="https://www.linkedin.com/in/sam-b-wagner"
              rel="nofollow"
              aria-labelledby="sams-footer-linkedin-label"
              target="_blank"
            >
              <SlSocialLinkedin className={`${styles.linkedIn}`} />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

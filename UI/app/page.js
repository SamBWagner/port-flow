import styles from "./styles.module.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function home() {
  return (
    <main className={styles.mainContainer}>
      <Header />

      <h2 className={`container ${styles.byLine}`}>Develop · Deploy · Deliver</h2>
      <div className={`container ${styles.socials}`}>
        <p>
          GitHub: <a href="https://github.com/SamBWagner">@SamBWagner</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sam-b-wagner"
            rel="nofollow"
            aria-labelledby="sams-footer-linkedin-label"
            target="_blank"
          >
            Sam Wagner
          </a>
        </p>
      </div>

      <div className={`container ${styles.blogLinkContainer}`}>
        <p>
          Check out my <a href="rust-game">blogs!</a>
        </p>
      </div>

      <Footer />
    </main>
  );
}
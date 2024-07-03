import styles from "./styles.module.css";
import Header from "./components/header";
import BlogCard from "./components/blogCard";

export default function home() {
  return (
    <main className={`container ${styles.mainContainer}`}>
      <Header />

      <h2 className={`${styles.byLine}`}>Develop · Deploy · Deliver</h2>
      <hr className={`${styles.divider}`}></hr>
      <div className={`${styles.blogCardContainer}`}>
        <BlogCard url="rust-game" urlAria="navigate to Learning Rust blog post">
          <h3>Learning Rust</h3>
          <p>
            Starting out in the industry there&apos;s been one thing I&apos;ve
            heard continually. Rust is cool, and you should learn it. So, after
            endless nagging by a few colleagues and the swathes of social media
            that pushes it, I’ve made the plunge&hellip;
          </p>
          <div className={styles.blogCardReadMore}>
            <p>Click to read more</p>
          </div>
        </BlogCard>
      </div>

      <div className={`${styles.socials}`}>
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
    </main>
  );
}

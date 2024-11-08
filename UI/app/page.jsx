import styles from "./styles.module.css";
import Header from "./components/header";
import BlogCard from "./components/blogCard";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

export default function home() {
  return (
    <main className={`${styles.mainContainer}`}>
      <Header className={`${styles.header}`} />

      <div className={`container ${styles.byLineContainer}`}>
        <h2 className={`${styles.byLine}`}>Develop · Deploy · Deliver</h2>
      </div>
      <div className={`${styles.blogCardContainer}`}>
        <h3 className={`container ${styles.blogContainerHeading}`}>Blogs</h3>
        <BlogCard
          className={`container`}
          url="first-commander-deck"
          urlAria="navigate to the Build your first commander deck article"
          releaseDate={"September 29th 2024"}
        >
          <h3>Build your first Magic: The Gathering - Commander deck</h3>
          <p>
            Building your first Commander deck can be both exciting and
            overwhelming. With thousands of cards to choose from and countless
            strategies to explore, it's easy to feel lost. This guide is
            designed to help new players step into the world of Commander. We'll
            start by commanders that are perfect for beginners. Then, we'll walk
            you through a simple framework for building your first deck.
            Finally, we'll give you a few extra tools to help you refine your
            deck as you play and make it your own!
          </p>
        </BlogCard>

        <BlogCard
          className={`container`}
          url="rust-game"
          urlAria="navigate to Learning Rust blog post"
          releaseDate={"December 10th 2023"}
        >
          <h3>Learning Rust</h3>
          <p>
            Starting out in the industry there&apos;s been one thing I&apos;ve
            heard continually. Rust is cool, and you should learn it. So, after
            endless nagging by a few colleagues and the swathes of social media
            that pushes it, I’ve made the plunge&hellip;
          </p>
        </BlogCard>
      </div>

      <div className={`container ${styles.socials}`}>
        <p>
          <a href="https://github.com/SamBWagner">
            <SlSocialGithub className={`${styles.gitHub}`} />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/sam-b-wagner"
            rel="nofollow"
            aria-labelledby="sams-footer-linkedin-label"
            target="_blank"
          >
            <SlSocialLinkedin className={`${styles.linkedIn}`} />
          </a>
        </p>
      </div>
    </main>
  );
}

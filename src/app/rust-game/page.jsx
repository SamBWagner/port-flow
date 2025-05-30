import Link from "next/link";
import Footer from "../components/footer";
import styles from "./style.module.css";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Learning Rust</title>
        <meta
          name="descriptionIn this guide, I'll show you how to quickly test whether a deck idea is a viable choice in less than 10 minutes."
          content="My first steps with the Rust programming language and game development with Bevy."
        />
      </Head>

      <header className={`container`}>
        <Link title="Go back home" href="/" className={`${styles.headerLink}`}>
          <p className={styles.blogPageHeader}>Sam Wagner</p>
        </Link>
      </header>

      <main className={styles.mainContainer}>
        <div className={styles.blogHeader}>
          <div className="container">
            <p className={styles.releaseDate}>December 10th 2023</p>
          </div>
          <h1
            id="learning-rust-blog-heading"
            className="container blog-heading"
          >
            Learning Rust
          </h1>
        </div>
        <div className="container contentContainer">
          <h3 className="container blog-subheading">My first game</h3>
          <section className="container">
            <p>
              Starting out in the industry there&apos;s been one thing I&apos;ve
              heard continually.{" "}
              <Link
                href="https://www.rust-lang.org/"
                rel="nofollow"
                aria-label="Rust's website"
                target="_blank"
              >
                Rust
              </Link>{" "}
              is cool, and you should learn it. So, after endless nagging by a
              few colleagues and the swathes of social media that pushes it,
              I’ve made the plunge.
            </p>
            <p>
              A few colleagues and I chose to partake in GitHub’s GameOff 2023.
              So, we had to choose a set of technologies to work with. In this
              case, we chose Rust as the language for our game. But we were left
              scratching our heads with what game engine to use (or indeed
              whether to use one at all). We boiled it down to two options:{" "}
              <Link
                href="https://godotengine.org/"
                rel="nofollow"
                aria-label="Godot's website"
                target="_blank"
              >
                Godot
              </Link>
              , a relatively famous cross-platform engine which had added some
              support for the Rust developers, and Bevy, a lightweight, Rust
              first game engine that was still in its infancy. We ended up
              choosing Bevy in this case for a ‘full Rust experience’ as one of
              the members on our team who was much more into Rust said that
              Godot’s support for Rust was good but not great.
            </p>
          </section>
          <section className="container">
            <h4 className="blog-section-heading">So, how’s Rust?</h4>
            <p>
              Well, I found Rust to be a rather refreshing affair. Rust’s
              borrowing and explicit pointer management and were not odd for me
              and I found that only two things that left my head spinning were
              lifetimes and closures. Those Darn pipes just look so strange, and
              it took me just way too long to make the connection that they’re
              just anonymous functions like in any other language. The compiler
              was the best part of Rust. Its error messages are clear, concise,
              helpful and holds your hand throughout the whole process. I never
              had a moment where I felt like I was fighting it.
            </p>
            <p>
              Overall, I’d say Rust is a great language to learn if you’re
              looking to build some memory efficient code and if you’re looking
              to get a start with learning some lower-level concepts.
              Unfortunately, I can’t comment on how the language holds up in an
              enterprise environment as the game’s scope was just too small. I
              can see that it’d be awesome but, of course, any language is only
              as good as its support. I’m sure that there are plenty of crates
              to help you and/or your company build whatever you need. But I’ll
              leave that to your own investigations.
            </p>
          </section>
          <section className="container">
            <h4 className="blog-section-heading">How’s Bevy?</h4>
            <p>
              Bevy is an{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Entity_component_system"
                rel="nofollow"
                target="_blank"
              >
                entity component system
              </Link>{" "}
              (<abbr title="entity components system">ECS</abbr>), which means
              that when you’re writing the game code, you’ll be predominently
              following these few core steps:
            </p>
            <ol>
              <li>
                Creating components
                <ul>
                  <li>
                    These are simple structures like <code>Weight</code>, or{" "}
                    <code>Direction</code> which can be combined to form
                    Entities.
                  </li>
                </ul>
              </li>
              <li>
                Spawning and Querying for Entities
                <ul>
                  <li>
                    These are the individual ‘things’ in the Game world. The
                    thing that took a while to understand is that nearly
                    everything is an entity. If I made a fish, it was an entity.
                    If I was looking for the death timer for a fish then, that
                    itself was also an entity.
                  </li>
                </ul>
              </li>
              <li>
                Writing systems
                <ul>
                  <li>
                    These are the functions that run the game. You might create
                    a system like <code>fish_movement()</code> which would find
                    all the fish in the world and then move them in the
                    direction that they’re meant to go.
                  </li>
                </ul>
              </li>
            </ol>
            <p>
              All this is to say that when you first start, the game engine
              follows a paradigm in{" "}
              <abbr title="entity components system">ECS</abbr> and that
              paradigm is absolute. So, if you’ve worked with other engines,
              this might be a bit of a head spin to start with. As it was for a
              few of the members who worked on gone-fish with me.
            </p>
            <p>
              Overall, as you end up building isolated systems, you end up with
              many opportunities to work with Rust in small doses. So, you can
              write simple code, and then immediately see the results of that
              code. I found it to be great for learning!
            </p>
          </section>
          <section className="container">
            <h4 className="blog-section-heading">Conclusions</h4>
            <p>
              I found that both Rust and Bevy were, when combined, an excellent
              first experience with both Rust and Game development. I’d
              recommend this setup for anyone who’s looking to take their first
              foray into game development and the Rust programming language.
            </p>
            <p>
              I’d recommend that if you’re going to give this expedition a try
              here is a list of things that I’d do for the best experience:
            </p>
            <ol>
              <li>
                Start off with the Rust Book. It’s a near perfect document for
                learning the language and doing it will give you a huge head
                start to the process of working on the game.
                <ul>
                  <li>
                    I’d complete up to section 3 (3 included) if you want to
                    speed run the learning experience. If you want to be fully
                    prepped, then I’d go all the way to 6 (6 included).
                  </li>
                </ul>
              </li>
              <li>
                Then move on to the Bevy Book where I’d just follow the guided
                tour and I’d finish the first part. Ending in the Audio section.
                <ul>
                  <li>
                    There’s also a phenomenal series by Jaques on YouTube which
                    will take you through building a full game in Bevy! I found
                    it much better than the book. However, not because the book
                    was bad. I just prefer video where possible.{" "}
                    <Link
                      href="https://www.youtube.com/watch?v=TQt-v_bFdao"
                      rel="nofollow"
                      aria-label="YouTube link to Jaques Bevy tutorial"
                      target="_blank"
                    >
                      Jaques Bevy tutorial
                    </Link>
                  </li>
                  <li>
                    There’s a caveat to both suggestions though. As Bevy is a
                    new, and constantly in flux game engine. Neither of these is
                    entirely up to date with the version of Bevy that I used to
                    build the game gone-fish. The book, at time of writing, was
                    sitting somewhere between v0.9 and v0.11 and the tutorial
                    linked is at v0.10. If I were to do this all over again, I’d
                    build my first game on the same versions as these tutorials,
                    either v0.9 or v0.10. That way you don’t need to do any
                    migratory steps while you’re still learning both.
                  </li>
                </ul>
              </li>
            </ol>
          </section>
          <section className="container">
            <h4 className="blog-section-heading">Credits</h4>
            <p>
              None of this adventure would&apos;ve been possible without the
              help of all of the people I mentioned throughout this project.
              I&apos;ll provide links to their GitHubs below. I hope you&apos;ll
              go and check them out!
            </p>
            <ul>
              <li>
                Tylah Kapa -{" "}
                <Link
                  href="https://github.com/tkapa"
                  rel="nofollow"
                  aria-label="GitHub profile link: @tkapa"
                  target="_blank"
                >
                  @tkapa
                </Link>
              </li>
              <li>
                Luke Parker -{" "}
                <Link
                  href="https://github.com/hona"
                  rel="nofollow"
                  aria-label="GitHub profile link: @hona"
                  target="_blank"
                >
                  @hona
                </Link>
              </li>
              <li>
                Brook Jeynes -{" "}
                <Link
                  href="https://github.com/BrookJeynes"
                  rel="nofollow"
                  aria-label="GitHub profile link: @BrookJeynes"
                  target="_blank"
                >
                  @BrookJeynes
                </Link>
              </li>
            </ul>
            <p>
              Also, feel free to play the game on{" "}
              <Link
                href="https://kapa.itch.io/gone-fish"
                rel="ugc"
                aria-label="gone-fish on Itch.io"
              >
                Itch.io
              </Link>{" "}
              where you can play it on the site through Web Assembly (
              <abbr title="Web Assembly">WASM</abbr>), or download it for either
              Windows of MacOS.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

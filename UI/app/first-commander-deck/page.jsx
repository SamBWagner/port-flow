import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import style from "./style.module.css";

export default function Page() {
  return (
    <>
      {/* 
        - What do I expect the reader to be when they arrive?
          - A new player who has never built a Commander deck before.
          - A player who has played Magic: The Gathering before but never built a Commander deck.
          - A player who either has a preconstructed Commander deck or has played with someone else's Commander deck.
          - A player who doens't know what makes their deck good or bad.
        - What do I want them to become after reading this?
          - A player who understands what makes a Commander deck good or bad.
          - A player who has a simple toolset to build their own Commander deck.
          - A player who can identify what they like about their deck and what they don't like about their deck.
          - A player who can identify what they like about other people's decks and what they don't like about other people's decks.
          - A player who can make some changes to their deck after playing it a few times.

        */}

      <Link href="/" className={style.headerLink}>
        <Header />
      </Link>

      <main>
        <h2 className="container">
          Beginner's Guide to Your First Magic: The Gathering - Commander Deck
        </h2>

        <div className="contentContainer">
          <section id="introduction" className="container">
            <p>
              Building your first Commander deck can be both exciting and
              overwhelming. With thousands of cards to choose from and countless
              strategies to explore, it's easy to feel lost. This guide is
              designed to help new players step into the world of Commander.
              We'll start by commanders that are perfect for beginners. Then,
              we'll walk you through a simple framework for building your first
              deck. Finally, we'll give you a few extra tools to help you refine
              your deck as you play and make it your own!
            </p>
          </section>

          <section id="beginner-commander-criteria" className="container">
            <h3>What Makes a Good Beginner Commander?</h3>
            <p>
              When picking your first commander, it's important to choose
              something that both appeals to you, and that pushes you into the
              pit of success. Here are some criteria for what we consider a good
              starting point.
            </p>

            <ul>
              <li>
                <p>
                  <strong>Costs less than 4 mana -</strong> Lower-cost
                  commanders can be cast earlier and more frequently, allowing
                  you to utilize their abilities more often throughout the game.
                </p>
                <p>
                  They're also less punishing if they're destroyed, as you can
                  recast them more easily. Getting you back in the action!
                </p>
              </li>
              <li>
                <p>
                  <strong>Multi-colored -</strong> Logic might state that having
                  just one color to worry about is easier, but in most cases,
                  it's actually the opposite. Having your commander identity be
                  a mix of colors gives you more options and flexibility in your
                  deck-building. This means that you can include more cards that
                  you like and that work well together.
                </p>
                <p>
                  I would recommend staying with 2 color commanders for your
                  first deck. This gives you a good balance of options and
                  simplicity. 3 color commanders can be a bit more complex and
                  require more attention to mana fixing. I still think they can
                  be ok though and I've included a few in the list below.
                </p>
              </li>
              <li>
                <p>
                  <strong>Draws you cards -</strong> Card draw keeps your hand
                  full of options and helps maintain momentum. Commanders that
                  can draw you cards are great for beginners because they help
                  you recover from setbacks and stay in the game.
                </p>
                <p>
                  This is not a hard and fast rule, but it's a good guideline to
                  follow. Card draw is one of the most powerful effects in
                  Magic: The Gathering, so having a commander that can do it is
                  a huge advantage.
                </p>
              </li>
              <li>
                <p>
                  <strong>Gives innate deck-building guidance -</strong>{" "}
                  Commanders with specific themes or mechanics make it easier to
                  choose the right cards.
                </p>
                <p>
                  A commander that rewards you for playing a certain way or
                  encourages a specific strategy can help you focus your deck
                  building. This makes it easier to know what cards to include
                  and what to leave out.
                </p>
                <p>
                  For example:{" "}
                  <a href="https://scryfall.com/card/cmr/362/wyleth-soul-of-steel">
                    Wyleth, Soul of Steel
                  </a>{" "}
                  rewards you for playing Auras and Equipment, so you know you
                  should include those in your deck. Whereas{" "}
                  <a href="https://scryfall.com/card/c16/46/thrasios-triton-hero">
                    Thrasios, Triton Hero
                  </a>
                  , while a powerful commander, doesn't give you much guidance
                  on what to include in your deck.
                </p>
              </li>
              <li>
                <p>
                  <strong>Has a clear way to win or progress the game -</strong>
                  Having a commander that allows you to play the game is good.
                  But, having a commander that also helps you understand how to
                  win the game is even better.
                </p>
                <p>
                  In my recommendations, I've included both commanders that do
                  and don't have a clear way to win. Those that do have a clear
                  way to win have earned themselves a higher placement though.
                </p>
              </li>
            </ul>
          </section>

          <section id="top-commanders" className="container">
            <h3>Top Recommended Commanders for Beginners</h3>

            <h4>Highly recommended</h4>
            <p>
              These commanders are extremely straightforward and forgiving,
              making them perfect for your first deck.
            </p>
            <ul>
              <li>
                <p>
                  <a href="https://scryfall.com/card/cmr/362/wyleth-soul-of-steel">
                    Wyleth, Soul of Steel
                  </a>{" "}
                  - A Voltron-style commander who encourages you to equip him
                  with Auras and Equipment and swing in for a win via commander
                  damage! He draws you cards whenever he attacks, keeping your
                  hand full and strategy simple: gear up and swing.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/40k/112/commissar-severina-raine">
                    Commissar Severina Raine
                  </a>{" "}
                  - Focuses on creating token creatures and draining your
                  opponents' life. Her abilities provide clear direction: amass
                  an army and overwhelm your foes.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/lcc/274/kumena-tyrant-of-orazca">
                    Kumena, Tyrant of Orazca
                  </a>{" "}
                  - A merfolk tribal commander who rewards you for playing
                  merfolk and attacking. He offers multiple abilities that
                  enhance your creatures and draw cards.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/mat/45/samut-vizier-of-naktamun">
                    Samut, Vizier of Naktamun
                  </a>{" "}
                  - Encourages you to play creatures with haste and attack
                  aggressively. Her abilities make combat exciting and
                  straightforward.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/one/203/jor-kadeen-first-goldwarden">
                    Jor Kadeen, First Goldwarden
                  </a>{" "}
                  - Rewards you for playing and equipping creatures. His ability
                  boosts your team, promoting an aggressive playstyle.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/blb/212/finneas-ace-archer">
                    Finneas, Ace Archer
                  </a>{" "}
                  - Focuses on creating tokens (like rabbits) and attacking. His
                  simple game plan of "going wide" is a recipe for success and a
                  proven strategy.
                </p>
              </li>
            </ul>

            <h4>Recommended</h4>
            <p>
              These are still fun, simple and forgiving commanders, but they
              might require a bit more thought to play effectively, or they
              might have a few more moving parts.
            </p>
            <ul>
              <li>
                <p>
                  <a href="https://scryfall.com/card/acr/49/basim-ibn-ishaq">
                    Basim, Ibn Ishaq
                  </a>{" "}
                  - Focuses on cumulative commander damage. Encourages you to
                  attack repeatedly with your commander to win.
                </p>
                <p>
                  Note that historic spells are any card that hs the type:
                  legendary, artifact, or saga.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/cmm/335/akiri-fearless-voyager">
                    Akiri, Fearless Voyager
                  </a>{" "}
                  - Rewards you for equipping creatures and attacking. She also
                  protects your equipped creatures, adding a layer of strategy.
                </p>
                <p>
                  As a suggestion, there are equipment cards that come in
                  already attached to a creature. They're a great pick for
                  Akiri! Here are a few examples:{" "}
                  <a href="https://scryfall.com/card/onc/14/hexplate-wallbreaker">
                    Hexplate Wallbreaker
                  </a>
                  ,{" "}
                  <a href="https://scryfall.com/card/mh3/34/mandibular-kite">
                    Mandibular Kite
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/ltr/215/merry-esquire-of-rohan">
                    Merry, Esquire of Rohan
                  </a>{" "}
                  - Benefits from being equipped and attacking with legendary
                  creatures. Encourages you to play legendary creatures and
                  attack.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/blb/205/baylen-the-haymaker">
                    Baylen, the Haymaker
                  </a>{" "}
                  - Focuses on creating tokens and powering them up for massive
                  attacks. It's also nice that he provides you with quite a few
                  options on how you use those tokens.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/snc/215/rigo-streetwise-mentor">
                    Rigo, Streetwise Mentor
                  </a>{" "}
                  - A commander that offers protection for himself with his
                  shield counter. He encounrages you to flood the board with 1/1
                  creatures and repeatedly attack.
                </p>
              </li>
              <li>
                <p>
                  <a href="https://scryfall.com/card/lci/232/kutzil-malamet-exemplar">
                    Kutzil, Malamet Exemplar
                  </a>{" "}
                  - Encourages you to play and buff creatures, then attack.
                  Offers an aggressive strategy with room for growth.
                </p>
              </li>
            </ul>
          </section>

          <section id="deckbuilding-guide" className="container">
            <h3>Deckbuilding Guide</h3>
            <p>
              You've now selected a commander and are ready to build your deck.
              In order to set you up for success, I've put together a simple
              guide/framework for you to work within so that you can make lots
              of fun and impactful decisions about how to build your deck, while
              not getting overwhelmed.
            </p>

            <h4>What makes a good deck?</h4>

            <p>
              A well built deck is one that offers you a many opportunities to
              make decisions that impact the game and that allows you to play
              the game the way you want to play it. To that end, a good deck
              ought to fullfill the following quotas:
            </p>

            <ul>
              <li>
                <p>
                  <strong>Land (40)</strong> - I recommend 40 lands as an
                  absolute baseline for a commander deck if you're a beginner.
                  This is because lands are the most important cards in your
                  deck. They're what allow you to play the game and make
                  meaningful decisions. If you had a choice between having too
                  many lands or too few, you'd always want to have too many.
                </p>
                <p>
                  For the purposes of deck tweaking in the future, having more
                  than enough lands also allows you to cut lands for other cards
                  that you might want to try out. This is a much more pleasant
                  experience than having to cut cards you like to make room for
                  more lands.
                </p>
              </li>
              <li>
                <p>
                  <strong>Ramp (9)</strong> - Cards that help you get more mana
                  so you can play more spells, more often.
                </p>
              </li>
              <li>
                <p>
                  <strong>Card draw (9)</strong> - Cards that help you draw more
                  cards so you have more options to choose from.
                </p>
              </li>
              <li>
                <p>
                  <strong>Spot removal (9)</strong> - Cards that help you deal
                  with an opponent's threats.
                </p>
              </li>
              <li>
                <p>
                  <strong>Board wipes (2)</strong> - Cards that act as a reset
                  button for when things get out of hand.
                </p>
              </li>
              <li>
                <p>
                  <strong>Graveyard hate (2)</strong> - Cards that help you deal
                  with one of Magic's most common strategies: using the
                  graveyard as a resource. If you don't have any of these, you
                  might find yourself losing to a deck that uses the graveyard
                  with little to no ways to interact with it. We're maximising
                  our opportunities to make choices so that you can have more
                  fun!
                </p>
              </li>
              <li>
                <p>
                  <strong>Land destruction (2)</strong> - This is a
                  contraversial category, but I think it's important to have at
                  least a few ways of dealing with lands. This is because there
                  are many lands that can be very powerful and can win the game
                  on their own. Having some ways to deal with them can be very
                  important for your ability to have fun.
                </p>
                <p>
                  I'd recommend looking into cards like:{" "}
                  <a href="https://scryfall.com/card/otc/283/demolition-field">
                    Demolition field
                  </a>
                  , and{" "}
                  <a href="https://scryfall.com/card/cm2/253/ghost-quarter">
                    Ghost quarter
                  </a>{" "}
                  as they are next to free to just throw into your decklist and
                  can be very impactful.
                </p>
              </li>
              <li>
                <p>
                  <strong>Sudden "I Win" Card (1)</strong> - Every deck needs a
                  fun, flashy way of winning the game. This could be a huge,
                  unstoppable creature or a game-ending spell. It's the card in
                  your deck that you're most excited to play.
                </p>
              </li>
            </ul>

            <h4>Building the core of your deck</h4>

            <h5>List of online tools for building your deck</h5>

            <ul>
              <li>
                <a href="https://www.archidekt.com/">Archidekt</a> - To build
                out your deck
              </li>
              <li>
                <a href="https://www.scryfall.com">Scryfall</a> - To find your
                cards
              </li>
              <li>
                <a href="https://edhrec.com">EDHREC</a> - To find inspiration
                for cards you might want to look for
              </li>
              <li>
                <a href="https://commanderspellbook.com/find-my-combos/">
                  Commander Spellbook - Combo finder
                </a>{" "}
                - To find out if your deck has any sneaky combos that you
                weren't aware of.
              </li>
            </ul>

            <p>
              You'll notice that the numbers above add up to 74 cards. This
              leaves you with 25 cards to build your "core" deck with. These are
              the cards that you'll use to build your deck's identity and
              strategy. They should be cards that you enjoy playing and that
              work well with your commander.
            </p>
            <p>
              I would recommend starting here. Your commander + 25 cards that
              work well with your commander. This will give you a solid
              foundation to build off of and inform the rest of your
              deck-building decisions.
            </p>

            <p>
              For example, if you're playing{" "}
              <a href="https://scryfall.com/card/cmr/362/wyleth-soul-of-steel">
                Wyleth, Soul of Steel
              </a>
              , you would find yourself 25 aura's and equipment cards that would
              work well with him. You might also include some cards that help
              you protect him as he's so important to your strategy.
            </p>

            <h4>Filling out the rest</h4>
            <p>
              Now that you've chosen a set of core cards that you think are
              super cool and work well with your commander, you should now start
              filling up the cards in the above categories. I would stick to
              these
              <strong>very</strong> closely. They're, I believe, a great
              guideline for what you need in your deck to make sure you're
              having fun.
            </p>

            <p>
              go through them 1 at a time. You're looking for cards that fit in
              the category, but also work well with your commander. For example,
              if you're playing Wyleth and you're trying to fill out your ramp
              list, you might want to include{" "}
              <a href="https://scryfall.com/card/ori/240/sword-of-the-animist">
                Sword of the Animist
              </a>
              .
            </p>
          </section>

          <section id="example" className="container">
            <h3>Example: Wyleth, Soul of Steel</h3>
            <p></p>

            <p>
              Let's walk through building a deck with{" "}
              <a href="https://scryfall.com/card/cmr/362/wyleth-soul-of-steel">
                Wyleth, Soul of Steel
              </a>{" "}
              as our commander. We'll start with the core of the deck and then
              fill in the rest. I'd recommend opening the finished decklist on
              my{" "}
              <a href="https://www.archidekt.com/decks/9388445/starter_deck_boros_voltron">
                Archidekt
              </a>
              .
            </p>

            <h4>Core, 25 cards</h4>
            <p>
              To complete this task, I'll primarily be using{" "}
              <a href="https://scryfall.com/">Scryfall</a> to search for cards
              that work well with Wyleth. I'll be looking for cards that
              fullfill this query{" "}
              <code>ci:boros legal:commander type:equipment usd&lt;2</code>. I
              won't explain how to use scryfall in this article but this query
              is asking for any card that's in the commander identity of Red and
              White, is legal in commander, is an equipment, and costs less than
              2 dollars (I thought it best to keep to a budget).
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

// <h4>Tier 1: Likely to Mess a Few Cards Up</h4>
// <p>
//   These commanders are a bit more complex but still accessible for
//   beginners willing to learn.
// </p>
// <ul>
//   <li>
//     <a href="https://scryfall.com/card/c18/47/tuvasa-the-sunlit">
//       Tuvasa the Sunlit
//     </a>
//     - Focuses on enchanting herself with Auras and attacking. Rewards
//     you with card draw and increased power.
//   </li>
//   <li>
//     <a href="https://scryfall.com/card/pip/114/paladin-elizabeth-taggerdy">
//       Paladin Elizabeth Taggerdy
//     </a>
//     - Encourages you to play creatures and attack. Her abilities
//     provide a straightforward game plan with some depth.
//   </li>
//   <li>
//     <a href="https://scryfall.com/card/bot/11/goldbug-humanitys-ally-goldbug-scrappy-scout">
//       Goldbug, Humanity's Ally
//     </a>
//     - Rewards you for playing Humans and attacking. A tribal strategy
//     that's easy to follow.
//   </li>
//   <li>
//     <a href="https://scryfall.com/card/acr/59/kassandra-eagle-bearer">
//       Kassandra, Eagle Bearer
//     </a>
//     - Encourages you to equip your creatures with legendary equipment
//     and attack. Combines equipment strategies with legendary
//     synergies.
//   </li>
//   <li>
//     <a href="https://scryfall.com/card/blb/217/helga-skittish-seer">
//       Helga, Skittish Seer
//     </a>
//     - Focuses on playing big creatures and attacking. Provides a
//     straightforward path to victory.
//   </li>
// </ul>

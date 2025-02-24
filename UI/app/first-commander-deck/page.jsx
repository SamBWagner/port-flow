import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
  return (
    <>
      <Link href="/" className={`${styles.headerLink}`}>
        <Header className={`container`} />
      </Link>

      <main>
        <h2 className="container">
          Beginner's Guide to Your First Magic: The Gathering - Commander Deck
        </h2>

        <div className="container contentContainer">
          <div className="container">
            <p className={styles.releaseDate}>September 29th 2024</p>
          </div>

          <section id="introduction" className="container">
            <p>
              Have you ever had a moment where you find a commander and you
              think it’s cool but you’re not sure if there will be enough cards
              available to make the deck run smoothly, or you weren’t sure if it
              will feel good to play so you’ve not wanted to waste time brewing
              up a 100-card deck? Well, in this guide, I’m going to show you how
              you can dramatically reduce the time it takes to test out a deck
              idea or even just a commander.
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
                  <a
                    href="https://scryfall.com/card/cmr/362/wyleth-soul-of-steel"
                    target="_blank"
                  >
                    Wyleth, Soul of Steel
                  </a>{" "}
                  rewards you for playing Auras and Equipment, so you know you
                  should include those in your deck. Whereas{" "}
                  <a
                    href="https://scryfall.com/card/c16/46/thrasios-triton-hero"
                    target="_blank"
                  >
                    Thrasios, Triton Hero
                  </a>
                  , while a powerful commander, doesn't give you much guidance
                  on what to include in your deck.
                </p>
              </li>
              <li>
                <p>
                  <strong>Has a clear way to win or progress the game</strong> -
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
                  <a
                    href="https://scryfall.com/card/cmr/362/wyleth-soul-of-steel"
                    target="_blank"
                  >
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
                  <a
                    href="https://scryfall.com/card/40k/112/commissar-severina-raine"
                    target="_blank"
                  >
                    Commissar Severina Raine
                  </a>{" "}
                  - Focuses on creating token creatures and draining your
                  opponents' life. Her abilities provide clear direction: amass
                  an army and overwhelm your foes.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://scryfall.com/card/lcc/274/kumena-tyrant-of-orazca"
                    target="_blank"
                  >
                    Kumena, Tyrant of Orazca
                  </a>{" "}
                  - A merfolk tribal commander who rewards you for playing
                  merfolk and attacking. He offers multiple abilities that
                  enhance your creatures and draw cards.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://scryfall.com/card/mat/45/samut-vizier-of-naktamun"
                    target="_blank"
                  >
                    Samut, Vizier of Naktamun
                  </a>{" "}
                  - Encourages you to play creatures with haste and attack
                  aggressively. Her abilities make combat exciting and
                  straightforward.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://scryfall.com/card/one/203/jor-kadeen-first-goldwarden"
                    target="_blank"
                  >
                    Jor Kadeen, First Goldwarden
                  </a>{" "}
                  - Rewards you for playing and equipping creatures. His ability
                  boosts your team, promoting an aggressive play style.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://scryfall.com/card/blb/212/finneas-ace-archer"
                    target="_blank"
                  >
                    Finneas, Ace Archer
                  </a>{" "}
                  - Focuses on creating tokens {"("}like rabbits{")"} and
                  attacking. His simple game plan of "going wide" is a recipe
                  for success and a proven strategy.
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
                  <a
                    href="https://scryfall.com/card/acr/49/basim-ibn-ishaq"
                    target="_blank"
                  >
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
                  <a
                    href="https://scryfall.com/card/cmm/335/akiri-fearless-voyager"
                    target="_blank"
                  >
                    Akiri, Fearless Voyager
                  </a>{" "}
                  - Rewards you for equipping creatures and attacking. She also
                  protects your equipped creatures, adding a layer of strategy.
                </p>
                <p>
                  As a suggestion, there are equipment cards that come in
                  already attached to a creature. They're a great pick for
                  Akiri! Here are a few examples:{" "}
                  <a
                    href="https://scryfall.com/card/onc/14/hexplate-wallbreaker"
                    target="_blank"
                  >
                    Hexplate Wallbreaker
                  </a>
                  ,{" "}
                  <a
                    href="https://scryfall.com/card/mh3/34/mandibular-kite"
                    target="_blank"
                  >
                    Mandibular Kite
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://scryfall.com/card/ltr/215/merry-esquire-of-rohan"
                    target="_blank"
                  >
                    Merry, Esquire of Rohan
                  </a>{" "}
                  - Benefits from being equipped and attacking with legendary
                  creatures. Encourages you to play legendary creatures and
                  attack.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://scryfall.com/card/blb/205/baylen-the-haymaker"
                    target="_blank"
                  >
                    Baylen, the Haymaker
                  </a>{" "}
                  - Focuses on creating tokens and powering them up for massive
                  attacks. It's also nice that he provides you with quite a few
                  options on how you use those tokens.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://scryfall.com/card/snc/215/rigo-streetwise-mentor"
                    target="_blank"
                  >
                    Rigo, Streetwise Mentor
                  </a>{" "}
                  - A commander that offers protection for himself with his
                  shield counter. He encourages you to flood the board with 1/1
                  creatures and repeatedly attack.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://scryfall.com/card/lci/232/kutzil-malamet-exemplar"
                    target="_blank"
                  >
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
              ought to fulfill the following quotas:
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
                  with little to no ways to interact with it. We're maximizing
                  our opportunities to make choices so that you can have more
                  fun!
                </p>
              </li>
              <li>
                <p>
                  <strong>Land destruction (2)</strong> - This is a
                  controversial category, but I think it's important to have at
                  least a few ways of dealing with lands. This is because there
                  are many lands that can be very powerful and can win the game
                  on their own. Having some ways to deal with them can be very
                  important for your ability to have fun.
                </p>
                <p>
                  I'd recommend looking into cards like:{" "}
                  <a
                    href="https://scryfall.com/card/otc/283/demolition-field"
                    target="_blank"
                  >
                    Demolition field
                  </a>
                  , and{" "}
                  <a
                    href="https://scryfall.com/card/cm2/253/ghost-quarter"
                    target="_blank"
                  >
                    Ghost quarter
                  </a>{" "}
                  as they are next to free to just throw into your deck list and
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

            <h4 id="building-the-core-of-your-deck">
              Building the core of your deck
            </h4>

            <h5 id="list-of-online-tools-for-building-your-deck">
              List of online tools for building your deck
            </h5>

            <ul>
              <li>
                <a href="https://www.archidekt.com/" target="_blank">
                  Archidekt
                </a>{" "}
                - To build out your deck
              </li>
              <li>
                <a href="https://www.scryfall.com" target="_blank">
                  Scryfall
                </a>{" "}
                - To find your cards
              </li>
              <li>
                <a href="https://edhrec.com" target="_blank">
                  EDHREC
                </a>{" "}
                - To find inspiration for cards you might want to look for
              </li>
              <li>
                <a
                  href="https://commanderspellbook.com/find-my-combos/"
                  target="_blank"
                >
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
              <a
                href="https://scryfall.com/card/cmr/362/wyleth-soul-of-steel"
                target="_blank"
              >
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
              these <strong>very</strong> closely. They're, I believe, a great
              guideline for what you need in your deck to make sure you're
              having fun.
            </p>

            <p>
              go through them 1 at a time. You're looking for cards that fit in
              the category, but also work well with your commander. For example,
              if you're playing Wyleth and you're trying to fill out your ramp
              list, you might want to include{" "}
              <a
                href="https://scryfall.com/card/ori/240/sword-of-the-animist"
                target="_blank"
              >
                Sword of the Animist
              </a>
              .
            </p>
          </section>

          <section id="skip-the-example-section" className="container">
            <p>
              If you don't want to go through an example with me, you can jump
              to the next section where I'll give you a few extra tools to help
              you with your post deck-building experience.
            </p>

            <p>
              <a href="#buying-and-goldfishing">Skip the example</a>
            </p>
          </section>

          <section id="example" className="container">
            <h3>Example: Wyleth, Soul of Steel</h3>
            <p></p>

            <p>
              Let's walk through building a deck with{" "}
              <a
                href="https://scryfall.com/card/cmr/362/wyleth-soul-of-steel"
                target="_blank"
              >
                Wyleth, Soul of Steel
              </a>{" "}
              as our commander. We'll start with the core of the deck and then
              fill in the rest. I'd recommend opening the finished deck list on
              my{" "}
              <a
                href="https://www.archidekt.com/decks/9388445/starter_deck_boros_voltron"
                target="_blank"
              >
                Archidekt
              </a>
              .
            </p>

            <h4>Core, 25 cards</h4>
            <p>
              To complete this task, I'll primarily be using{" "}
              <a href="https://scryfall.com/" target="_blank">
                Scryfall
              </a>{" "}
              to search for cards that work well with Wyleth. I'll be looking
              for cards that fulfill this query{" "}
              <code>ci:boros legal:commander type:equipment usd&lt;2</code>. I
              won't explain how to use scryfall in this article but this query
              is asking for any card that's in the commander identity of Red and
              White, is legal in commander, is an equipment, and costs less than
              2 dollars (I thought it best to keep to a budget).
            </p>

            <p>
              Here's a list of 5 cards that I found that should work well for
              Wyleth if I choose to build around him being my only creature:
            </p>

            <ul>
              <li>
                <a
                  href="https://scryfall.com/card/mh2/233/colossus-hammer"
                  target="_blank"
                >
                  Colossus Hammer
                </a>{" "}
                - We've got to get our commander big and strong.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/uma/18/hyena-umbra"
                  target="_blank"
                >
                  Hyena Umbra
                </a>{" "}
                - He's our only threat so we've got to protect him.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/c21/249/loxodon-warhammer"
                  target="_blank"
                >
                  Loxodon Warhammer
                </a>{" "}
                - We've only really got the one creature, so we might need to
                gain some life.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/otc/268/swiftfoot-boots"
                  target="_blank"
                >
                  Swiftfoot Boots
                </a>{" "}
                - Haste seems like a good thing to have available if he were to
                die. Hexproof helps us protect him too!
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/onc/14/hexplate-wallbreaker"
                  target="_blank"
                >
                  Hexplate Wallbreaker
                </a>{" "}
                - What's better than one combat? Two combats!
              </li>
            </ul>

            <h4>Land, 40 cards</h4>
            <p>
              Now we've got our core cards that we've chosen to build around
              Wyleth, we need to start filling out the rest of the deck. The
              next part of the puzzle is our lands. I've chosen to suggest a
              solid 40 lands for all beginner deck brewers to start with. I
              would simply look at your colors at this point and do an even
              split between the one/two/three colors you've chosen.
            </p>

            <p>
              For Wyleth, that means that I've chosen to do a simple split of 20
              plains and 20 mountains. Now, if you've looked at the decklist in{" "}
              <a href="https://www.archidekt.com/decks/9388445/starter_deck_boros_voltron">
                Archidekt
              </a>{" "}
              you may have noticed that there is another land in there called{" "}
              <a href="https://scryfall.com/card/dsc/96/command-tower">
                Command Tower
              </a>
              . This is a card that comes in untapped and creates both of our
              colors. In this case, I simply removed a mountain and swapped the
              command tower in.
            </p>

            <h4>Ramp, 9 cards</h4>
            <p>
              So now we've built out our core cards, we need to start filling
              out the cards in the template. Your goal here is to find as many
              cards as you can that fulfill the goal of the category, while also
              working well with your commander. In this case, because we're
              building a deck around Wyleth, we're going to want to find cards
              that both get us more mana and power up our commander.
            </p>

            <p>Here's a few of the cards that fit the bill:</p>

            <ul>
              <li>
                <a
                  href="https://scryfall.com/card/mom/131/beamtown-beatstick"
                  target="_blank"
                >
                  Beamtown Beatstick
                </a>{" "}
                - This card gets us some treasure which can accelerate our mana
                while also strapping Wyleth up with some evasion and power.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/lci/143/diamond-pick-axe"
                  target="_blank"
                >
                  Diamond Pick Axe
                </a>{" "}
                - This is the same as the Beatstick above.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/cmm/380/explorers-scope"
                  target="_blank"
                >
                  Explorer's Scope
                </a>{" "}
                - This card could get us some extra lands in the early game!
              </li>
            </ul>

            <p>
              You'll notice that I only list 3 cards here. This isn't because
              I'm keeping the list short, it's because there were no other
              options that I could find that worked. So, I'll have to fill out
              the rest of the category with other cards that accelerate my mana,
              but don't directly help my commander.
            </p>

            <ul>
              <li>
                <a
                  href="https://scryfall.com/card/dsc/94/sol-ring"
                  target="_blank"
                >
                  Sol Ring
                </a>{" "}
                - Classic ramp card that's in every commander deck.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/dsc/92/arcane-signet"
                  target="_blank"
                >
                  Arcane Signet
                </a>
              </li>
            </ul>

            <h4>Card draw, 9 cards</h4>
            <p>
              Now that we've got our ramp sorted, we need to start looking for
              cards that help us draw more cards. This is important because it
              helps us keep our hand full of options and allows us to keep
              playing the game. No cards, no Magic!
            </p>

            <p>
              Here's a few cards that I found that should work well for Wyleth:
            </p>

            <ul>
              <li>
                <a
                  href="https://scryfall.com/card/nec/88/sram-senior-edificer"
                  target="_blank"
                >
                  Sram, Senior Edificer
                </a>{" "}
                - This card is great because it draws us cards whenever we play
                an equipment.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/cmr/324/mask-of-memory"
                  target="_blank"
                >
                  Mask of Memory
                </a>{" "}
                - A great card for us as it rewards us for aggressively swinging
                Wyleth at our opponents. It also helps us filter our draws.
              </li>
            </ul>

            <p>
              There are a few more cards like:{" "}
              <a
                href="https://scryfall.com/card/cmm/335/akiri-fearless-voyager"
                target="_blank"
              >
                Akiri, Fearless Voyager
              </a>
              ,{" "}
              <a
                href="https://scryfall.com/card/cmm/51/puresteel-paladin"
                target="_blank"
              >
                Puresteel Paladin
              </a>
              , and{" "}
              <a
                href="https://scryfall.com/card/jmp/479/rogues-gloves"
                target="_blank"
              >
                Rogue's Gloves
              </a>
              . But, I'll stop going through every card from here on and just
              list the cards that I think are the best examples of how I'd
              recommend filling out the category.
            </p>

            <h4>Spot removal, 9 cards</h4>
            <p>
              Now that we've got our ramp and card draw sorted, we need to start
              looking for cards that help us deal with our opponents' threats.
              This is important because it helps us keep our opponents from
              winning the game.
            </p>

            <p>
              This category is an example of where you might not get many
              options that work well with your commander. You might have to
              include cards that don't directly help your commander, but are
              still important to have in your deck. In this case, our only
              option was to include a copy of{" "}
              <a
                href="https://scryfall.com/card/afc/198/argentum-armor"
                target="_blank"
              >
                Argentum Armor
              </a>
              . The rest we filled out with some more general removal spells
              like{" "}
              <a
                href="https://scryfall.com/card/dsc/106/swords-to-plowshares"
                target="_blank"
              >
                Swords to Plowshares
              </a>
              , and{" "}
              <a
                href="https://scryfall.com/card/otc/85/path-to-exile"
                target="_blank"
              >
                Path to Exile
              </a>
              . You should never feel bad about including these cards as
              regardless of their ability to synergies with your commander,
              they're always going to be useful.
            </p>

            <h4>Board wipes, 2 cards</h4>
            <p>
              Now that we've got our spot removal sorted, we need to think about
              what we do when our game hasn't gone too well, or, our opponents
              have gotten a bit out of hand. This is where board wipes come in.
              Again, try to pick a pair that synergies well with your game plan.
            </p>

            <p>In this case I've gone with:</p>

            <ul>
              <li>
                <a
                  href="https://scryfall.com/card/c19/62/divine-reckoning"
                  target="_blank"
                >
                  Divine Reckoning
                </a>{" "}
                - This card is great because it allows us to keep our commander
                while also dealing with our opponents' threats.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/cmr/47/slash-the-ranks"
                  target="_blank"
                >
                  Slash the Ranks
                </a>{" "}
                - This card is great for the same reasons as Divine Reckoning.
              </li>
            </ul>

            <h4>Graveyard hate, 2 cards</h4>
            <p>
              These next two categories are a bit more niche, but they're still
              important to have in your deck. Graveyard hate is important as
              it's a super popular strategy, and, if no one has any way to deal
              with it. Anyone playing a graveyard strategy will basically, win
              the game. This is no fun for you as you really do want to have a
              back and forth game.
            </p>

            <p>
              This is also a category where you might find that you're not able
              to find cards that directly slot into your commander's strategy.
              However, in this case, we've also decided to choose 1 card that
              overlaps with our land slots and gives us 1 more card in our
              "core" category. Pretty cool huh?
            </p>

            <ul>
              <li>
                <a
                  href="https://scryfall.com/card/otc/316/scavenger-grounds"
                  target="_blank"
                >
                  Scavenger Grounds
                </a>{" "}
                - A quick and easy way to handle any and all graveyard
                strategies that are going on. Do be careful that you don't
                accidentally exile your own graveyard if you're looking to do
                some graveyard shenanigans yourself. Remove one Mountain.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/neo/26/lion-sash"
                  target="_blank"
                >
                  Lion Sash
                </a>{" "}
                - A super cool pickup for our deck, it gives us both a way to
                deal with some sneaky threats lurking in a players graveyard,
                and it also gives us a way to pump up our commander!
              </li>
            </ul>

            <h4>Land destruction, 2 cards</h4>
            <p>
              Ok. So. You'll have to hear me out with this category as you
              might've heard people say that land destruction is a bit of a
              no-no in commander. While this isn't entirely true, it's wise to
              note here that I'm not advocating for you to include cards like{" "}
              <a
                href="https://scryfall.com/card/a25/5/armageddon"
                target="_blank"
              >
                Armageddon
              </a>{" "}
              which just wholesale slow the game down and lead to a miserable
              experience. Instead, I'm advocating that you include at least 2
              cards that can deal with some of the more powerful lands that are
              out there.
            </p>

            <ul>
              <li>
                <a
                  href="https://scryfall.com/card/cm2/253/ghost-quarter"
                  target="_blank"
                >
                  Ghost Quarter
                </a>{" "}
                - A card that we can also slot into our 40 lands that we can use
                to handle 1 of our opponents' pesky lands. Remove one Plains.
              </li>
              <li>
                <a
                  href="https://scryfall.com/card/otc/283/demolition-field"
                  target="_blank"
                >
                  Demolition Field
                </a>{" "}
                - Another card just like Ghost Quarter that we can use to handle
                our opponents' lands. Remove one Mountain.
              </li>

              <p>
                It's important to note here that we again have a pair of cards
                which don't directly help our commander. This means that we're
                going to add 2 more cards into our "core" category! Letting us
                pick a few more cards that are just cool and fun to play with.
                In the attached{" "}
                <a
                  href="https://www.archidekt.com/decks/9388445/starter_deck_boros_voltron"
                  target="_blank"
                >
                  Archidekt list
                </a>
                , I've listed the 3 cards that I chose as extras under the
                "Extras" category.
              </p>

              <h4>Sudden "I Win" Card, 1 card</h4>
              <p>
                Now for the pice de resistance. The card that you're the{" "}
                <strong>most</strong> excited to play. This is the card that
                makes you go "Woh!" when you draw it. For me, I chose to include{" "}
                <a
                  href="https://scryfall.com/card/neo/7/brilliant-restoration"
                  target="_blank"
                >
                  Brilliant Restoration
                </a>{" "}
                as I know the "Voltron" strategy can be a bit fragile and I
                wanted to include a card that would help me recover from a board
                wipe in a super flashy way!
              </p>
            </ul>

            <h4>Extras! 3 cards</h4>
            <p>
              Throughout this process, I've been adding cards to the deck and on
              some occasions, I've been able to find some cards that can fit
              into a few different categories. This means that I have a few
              extra slots that I can roll back into my "core" category! In this
              case I felt like I wanted some ways to protect Wyleth, and to
              throw in a couple of cool red and white legendary creatures that I
              found during my search.
            </p>

            <ul>
              <li>
                <a href="https://scryfall.com/card/mom/41/surge-of-salvation">
                  Surge of Salvation
                </a>{" "}
                - A powerful 1 mana instant that we can deploy when Wyleth is
                about to be removed.
              </li>
              <li>
                <a href="https://scryfall.com/card/afr/219/bruenor-battlehammer">
                  Bruenor Battlehammer
                </a>{" "}
                - This little dude seems super cool and makes Wyleth into an
                absolute monster!
              </li>
              <li>
                <a href="https://scryfall.com/card/mat/36/nahiri-forged-in-fury">
                  Nahiri, Forged in Fury
                </a>{" "}
                - She seems like a powerhouse to drop onto our board if we draw
                her and could very well have been put in the "Sudden I Win
                Category".
              </li>
            </ul>
          </section>

          <section id="buying-and-goldfishing" className="container">
            <h3>What now?</h3>

            <p>
              Now you've got your deck built, you're ready to start playing
              right? Well, yes. If you think you're good to go then head to a
              site like{" "}
              <a href="https://www.mtgmate.com.au/" target="_blank">
                MTGMate.com.au
              </a>
              , punch in your deck list and start playing! But, if you're a
              little worried about whether your deck is good or not, I'd
              recommend one simple thing. Goldfish your deck!
            </p>

            <h4>Goldfishing</h4>
            <p>
              Goldfishing is the act of taking a deck, and sitting a theoretical
              goldfish across from you and playing the game. This is a great way
              to see how your deck plays out without the pressure of having an
              opponent. It can also help you see if you've got the right amount
              of lands, ramp, card draw, etc.
            </p>

            <p>Here's my go-to strategy with Goldfishing:</p>

            <ol>
              <li>
                Open the Play tester in{" "}
                <a href="https://www.archidekt.com/" target="_blank">
                  Archidekt
                </a>
              </li>
              <li>
                Draw your opening hand and play the game as you would normally.
                <ol>
                  <li>Is there enough lands? 3 or more is ideal</li>
                  <li>
                    Are there cards you can play? Is everything too expensive?
                  </li>
                  <li>
                    Are you happy that you'll be able to play your commander and
                    "Do the thing" that you designed the deck around doing?
                  </li>
                </ol>
              </li>
              <li>
                Play the game to turn 5 and ask yourself the question
                <ol>
                  <li>Did I get to play the game?</li>
                  <li>
                    Do I have some idea on what I'll be doing for the rest of
                    the game?
                  </li>
                </ol>
              </li>
            </ol>

            <p>
              If you find that you're never able to answer those questions
              positively, I'd go back to your core cards and maybe make some
              adjustments. If you're finding that you're always able to answer
              those questions positively, then congratulations! You've built a
              great deck!
            </p>
          </section>

          <section id="conclusion" className="container">
            <h3>Conclusion</h3>

            <p>
              You've now got your first commander deck! Well done! Take it to
              your local game store and get in some games! I hope you found this
              guide helpful!
            </p>

            <p>
              <Link href="/" className={`${styles.goBackLink}`}>
                <IoIosArrowBack />
                back home
              </Link>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

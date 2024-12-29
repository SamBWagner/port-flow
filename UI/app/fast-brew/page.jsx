import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "./style.module.css";
import Image from "next/image";
import fullDeckList from "../../public/fast-brew/fullDeckList.png";
import openingSeven from "../../public/fast-brew/openingSeven.png";
import setupComplete from "../../public/fast-brew/setupComplete.png";
import midgameComplete from "../../public/fast-brew/midgameComplete.png";
import endgameComplete from "../../public/fast-brew/endgameComplete.png";
import { IoIosArrowBack } from "react-icons/io";

import React from "react";

export default function Page() {
  return (
    <>
      <Link href="/" className={`${styles.headerLink}`}>
        <Header className={`container`} />
      </Link>

      <main>
        <h2 id="fast-brewing-title" className="container">
          Advanced Deck-building: Fast Brewing
        </h2>

        <div className="container contentContainer">
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

          <section id="the-framework" className="container">
            <h3>The Framework</h3>
            <p>
              To fast brew, you need to first understand how it works. The goal
              here is to build a miniaturized version of your deck and then play
              it within some constraints, noting what it’s doing. To do this,
              we’re first going to put some restrictions on our deck-building.
            </p>
          </section>

          <section id="deck-building-restrictions" className="container">
            <h4>Deck-building Restrictions</h4>
            <p>
              To fast brew, we restrict your card selection to 25 cards and a
              commander. Any good commander deck will likely have anywhere from
              25-30 cards that are doing the lion’s share of the deck’s work. So
              this is a great way to concentrate your focus on the deck’s
              primary theme{"("}s{")"}. To put it simply, the primary theme{"("}
              s{")"} is the core action the deck is trying to take I.e. draw
              lots of cards, put +1/+1 counters on creatures, generate lots of
              creatures etc.
            </p>
            <p>
              If you are just starting out with magic or brewing commander decks
              I’d recommend reading my{" "}
              <Link href="/first-commander-deck">
                {" "}
                Beginner’s Guide to Your First Magic: The Gathering - Commander
                Deck
              </Link>{" "}
              before reading further. This guide,{" "}
              <i>Advanced Deck-building: Fast Brewing</i>, compliments the
              beginner’s guide’s section:{" "}
              <Link
                href={"/first-commander-deck#building-the-core-of-your-deck"}
              >
                Building the core of your deck
              </Link>
              .{" "}
            </p>
            <p>
              We also want to make sure we’re <strong>only</strong> putting in
              cards that are truly core to the game plan. This means we don’t
              want to run Ramp, Removal, or any other secondary or tertiary card
              category in our 25. A great example here would be if we were
              running a commander like{" "}
              <a
                target="_blank"
                href="https://scryfall.com/card/mat/45/samut-vizier-of-naktamun"
              >
                Samut, Vizier of Naktamun
              </a>{" "}
              . At first glance the card{" "}
              <a
                target="_blank"
                href="https://scryfall.com/card/zen/127/goblin-ruinblaster"
              >
                Goblin Ruinblaster
              </a>{" "}
              seems like a great pick because he is a creature with Haste,
              meaning he can attack on the turn he entered the battlefield.
              That’s what Samut wants you to do! But, as its primary role in the
              deck can be categorised as either Removal or Land Destruction, we
              should skip over it here and pick something else. We’re really
              looking for cards that progress the game to an end. In Samut’s
              case, we want creatures like{" "}
              <a
                target="_blank"
                href="https://scryfall.com/card/gtc/97/legion-loyalist"
              >
                Legion Loyalist
              </a>
              , which buffs up our board and pushes the game to an end via
              creature damage.
            </p>
          </section>
          <section id="play-testing" className="container">
            <h3>Play-testing</h3>
            <p>
              So once we have a 25-card deck and a commander, how do we test it?
              We’re going to give ourselves a set amount of mana and then probe
              the game at 3 key points: The Setup, The Mid-game, and The
              End-game. First, we’re going to draw 7 cards and not mulligan.
              Then we’re going to go to The Setup.
            </p>
          </section>
          <section id="play-testing" className="container">
            <h4>The Setup</h4>
            <p>
              The purpose of this part of the play test is to show you what your
              deck can do during the early stages of a game. Using your deck
              building app of choice, mine is{" "}
              <a href="https://www.archidekt.com/" target="_blank">
                Archidekt
              </a>
              , or a real set of 25 cards, simulate the first 3 turns of the
              game. To do this, shuffle up and:{" "}
            </p>
            <ol>
              <li>
                Draw a card, pretend you have 1 mana to spend and play through a
                turn.
              </li>
              <li>
                Draw a card, pretend you have 2 mana to spend and play through a
                turn.
              </li>
              <li>
                Draw a card, pretend you have 3 mana to spend and play through a
                turn.
              </li>
            </ol>
            <p>
              Note that it is likely you won’t have tertiary effects here I.e.
              ramp, removal, land destruction {"("}unless that is the goal of
              your deck{")"}, so if your deck is fundamentally a slower one, you
              might not do much here. This is totally fine, and you shouldn’t
              change your deck just to make this stage better. It’s just to see
              whether you’re doing anything early and if you’re going to be okay
              with that.
            </p>
          </section>
          <section id="the-mid-game" className="container">
            <h3>The Mid-game</h3>
            <p>
              You’re then going to have 2 turns, the first at 5 mana, then the
              next at 7. These are to simulate the middle portion of the game.
              This is where you’re deploying either a lot of stuff or your big
              heavy hitters. The questions to ask here is:
              <strong>
                “How much damage in creatures do I have on board?”, “Did I do
                something cool?”, “Did I achieve a part of my goal”,{" "}
              </strong>
              or<strong> “Did the deck just noodle around?”. </strong>This is
              the most important part of these tests. Don’t take them too
              seriously as you can very likely just have a bad hand. That’s
              okay.
            </p>
          </section>
          <section id="the-end-game" className="container">
            <h3 id="the-end-game-title">The End-game</h3>
            <p>
              This is the grand finale. In this final stage, you’re going to
              give yourself pseudo-infinite mana and draw 4 cards. This is going
              to simulate a long-form game and show you what your deck can
              achieve across a whole game. I would caution against just dumping
              your whole hand as that’s not proving anything. The goal here is
              to see:{" "}
              <b>
                “What cool things can I do now?”, “What are some awesome
                synergies I have?”,
              </b>{" "}
              and <b>“How do I end the game?”.</b>
            </p>
            <p>
              This is not as important as the previous step, but if you find
              that the deck just cannot generate power, never has anything cool
              or flashy to do, then this is a sign that you might be missing
              some top-end power, or just don’t have anything fun. Which is not
              good!
            </p>
            <p>
              If you’re already happy at this point, you can stop reading here
              as the rest of the guide is an example of how the fast-brewing
              framework works. Happy brewing!
            </p>
          </section>

          <section id="example-greta-sweettooth-scourge" className="container">
            <h3>Greta, Sweettooth Scourge</h3>
            <p>
              It’s all well and good to give you a guide, but let’s see it in
              action. In this case, we’re going to use the commander{" "}
              <a
                target="_blank"
                href="https://scryfall.com/card/woe/205/greta-sweettooth-scourge"
              >
                Greta, Sweettooth Scourge
              </a>
              . This commander offers us a few ways to build but is still mostly
              within the barriers of what I’d call a beginner-friendly
              commander. In this case, we’re going to just hydrate the deck with
              25 cards that do 1 of 2 things:
              <strong> make food</strong> or{" "}
              <strong>make/interact with counters</strong>. Here’s a link to the
              deck-list in{" "}
              <a
                href="https://www.archidekt.com/decks/10638046/backers_dozen_advanced_deckbuilding_guide"
                target="_blank"
              >
                Archidekt
              </a>{" "}
              that I’ve built by using this{" "}
              <a
                href="https://scryfall.com/search?q=legal:commander+ci:golgari+(o:food+or+(o:counter+and+o:%22+1%22))+usd%3C3&unique=cards&as=grid&order=edhrec"
                target="_blank"
              >
                Scryfall
              </a>{" "}
              search query:
            </p>
            <p>
              <code>
                legal:commander ci:golgari {"("}o:food or {"("}o:counter and o:
                {'"'}+1{'"'}
                {")"}
                {")"} usd{"<"}3
              </code>
            </p>
            <p>
              <i>
                To briefly explain the query, I’m searching for commander legal
                cards that are in the commander identity of Golgari
                {"("}green and black{")"} that either have the word “food” in
                the Oracle text or both “counter” and “+1” in the Oracle text.
                Finally, I’d rather only look at cheap-ish cards.
              </i>
            </p>
            <ul>
              <li>Drana, Liberator of Malakir</li>
              <li>Forgotten Ancient</li>
              <li>Gilded Goose</li>
              <li>Hardened Scales</li>
              <li>Killer Service</li>
              <li>Loyal Guardian</li>
              <li>Night of the Sweets' Revenge</li>
              <li>Nuka-Cola Vending Machine</li>
              <li>Old Flitterfang</li>
              <li>Ozolith, the Shattered Spire</li>
              <li>Peregrin Took</li>
              <li>Pippin, Warden of Isengard</li>
              <li>Power Fist</li>
              <li>Pridemalkin</li>
              <li>Provisions Merchant</li>
              <li>Rapacious Guest</li>
              <li>Rishkar, Peema Renegade</li>
              <li>Savvy Hunter</li>
              <li>Vinereap Mentor</li>
              <li>1 Syr Ginger, the Meal Ender</li>
              <li>1 Tireless Provisioner</li>
              <li>1 Tough Cookie</li>
              <li>1 Tuskguard Captain</li>
              <li>1 Vinereap Mentor</li>
              <li>Voracious Fell Beast</li>
              <li>Welcome to Sweettooth</li>
            </ul>
            1 Savvy Hunter 1 Voracious Fell Beast 1 Welcome to Sweettooth
            <p>
              Each of these cards offers us some way of interacting with or
              creating food and interacting with or creating +1/+1 counters.
              With this, we can run the deck through our framework. You’ll note
              that there is the odd card here and there which is a little more
              expensive; this is because I couldn’t overlook how awesome they
              would be in the deck. I.e. Nuka-Cola Vending Machine.
            </p>
            <Image
              alt="Full deck list"
              src={fullDeckList}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p>
              <strong>Figure: Full deck-list in Archidekt</strong>
            </p>
          </section>

          <section id="step-one-the-setup" className="container">
            <h3>Step 1: The Setup</h3>
            <p>
              Now that we’ve got the bones of the deck fleshed out, let’s start
              play-testing! To reiterate, first we’ll draw seven.
            </p>

            <Image
              alt="Opening seven cards"
              src={openingSeven}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p>
              <strong>Figure: Opening seven</strong>
            </p>
            <p>
              Here we can see a Tough Cookie, Provisions Merchant, Old
              Flitterfang, a Gilded Goose, Drana, Liberator of Malaria, a
              Voracious Fell Beast, and a Nuka-Cola Vending Machine. We can
              immediately see that we’ve got cards to play during our setup step
              as we’ve got a 1 cost creature in Gilded Goose, a 2 cost
              creature-artifact in Tough Cookie, and then a smattering of things
              to do with our 3 mana turn, including our commander.
            </p>
            <p>Let’s draw and play out the turns and see what happens!</p>
            <Image
              alt="Board state after the setup"
              src={setupComplete}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p>
              <strong>Figure: Setup complete</strong>
            </p>
            <p>
              So, how’d we do? We can see that on turn 1 we played the Gilded
              Goose, getting much-needed food for our commander’s ability, and a
              piece of ramp if we need it. Then, we play Hardened Scales that we
              drew as it has now set up the counterpart of the deck. Finally, we
              play it simple and drop our commander down.
            </p>
            <p>So let’s ask some questions:</p>
            <ul>
              <li>
                Did we play cards? Yes! We played a card on every turn and each
                of them was quite powerful for our plan of making food and
                getting counters!
              </li>
              <li>
                Do we feel like we’re going to have things to do in the
                mid-game? Yes! WE can see that we have more and more food
                generators in hand. And, some power generators in Pridemalkin,
                Drana, Liberator of Malakir, and Tough Cookie. Finally, we have
                a solid emergency button in Voracious Fell Beast which can net
                us some more food in an emergency or just act as a huge evasive
                beater!
              </li>
            </ul>
            <p>Seems we’re doing well! Let’s go to the mid-game!</p>
          </section>

          <section id="step-2-the-mid-game" className="container">
            <h3>Step 2: The Mid-game</h3>
            <p>
              Now we’ve seen our early game is pretty good! Let’s see how that
              mid-game plays. Our goal here is to see if the deck can deploy
              some reasonable threats and take some actions that progress our
              game plan to its conclusion. Remember, unlike the setup, we don’t
              go up just 1 mana this time. We’re going to do 2 turns with 5 and
              then 7 mana.
            </p>

            <Image
              alt="Board state after the Mid-game"
              src={midgameComplete}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p>
              <strong>
                Figure: The Mid-game complete (Note- I forgot to add the two
                counters onto Drana from her attack. Oops.)
              </strong>
            </p>
            <p>
              Well, well, well… This has gone exceptionally well! On our first
              of the Mid-game turns, we drew a Loyal Guardian, and our plans
              were pretty well set. Get out as many creatures as we can so that
              we can get as much value off the Loyal Guardian and the Hardened
              Scales. So, first we played Drana, Liberator of Malakir, and the
              Tough Cookie. We then went to the last mid-game turn and played
              out our newly drawn Welcome to Sweettooth, netting us another two
              bodies onto the board and then dropping our massive Loyal
              Guardian. In the mid-game, we’ve managed to make our board quite
              large and deploy a large amount of threats with our +1/+1 counter
              synergies. We then swung out with everything we had, doing a total
              of 12 normal damage and 7 commander damage. We also gained access
              to an additional 26 power on the board with our new human tokens
              and all those +1/+1 counters! Wow, wow, wow!
            </p>

            <p>Let’s ask ourselves some questions though:</p>
            <ul>
              <li>
                Did we make a meaningful difference to the game? Hell yes! We’ve
                deployed a lethal amount of damage to the board. If we weren’t
                the archenemy of the table, we’ve definitely been put into
                contention for that title now.
              </li>
              <li>
                Did we achieve what our deck wanted to do? Kind of. Overall,
                while we did achieve some great things. We also didn’t do
                anything with our commander and our food. We do have access to 6
                life in our food and can use our commander’s ability to pump up
                our board even more. But, overall, that part of our game plan
                fell a little flat.
              </li>
            </ul>

            <p>So with this spooky board, let’s head into the End-game!</p>
          </section>
          <section id="step-3-the-end" className="container">
            <h3>Step 3: The End</h3>
            <p>
              OK, so here we go! Let’s see what our deck is capable of at the
              end of the game. We’re going to draw 4 cards to simulate that
              we’ve got access to some extra cards over the course of the game
              and we’re going to give ourselves almost infinite mana and see
              what we can do.
            </p>

            <p>
              <i>
                A note here: While we do have infinite mana, the goal isn’t to
                just play every card in our hand. It’s to play a “line”. I.e. a
                succession of cards that work together to achieve a consolidated
                goal. This might mean we only play 2-4 of the cards in our hand.
                You don’t want to overdo it here as any deck with infinite mana
                will always do something crazy. It’s about asking the question:
                “What can my deck do when I’m able to do a ‘cool thing’?”.
              </i>
            </p>
            <Image
              alt="Board state after the Mid-game"
              src={endgameComplete}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <p>
              <string>Figure: The End-game</string>
            </p>
            <p>
              And for the grand finale, we ended up hitting for a total of 56
              damage, 11 commander damage, and deployed an additional… too much
              to count… power to the board. What a ride! The line we chose was
              to throw the newly drawn Power Fist onto Drana as she is a
              first-striking flyer with a nasty on-hit ability. We then tried to
              get her as big as we could! To do this, we played out our
              Pridemalkin, letting us put a counter on her (and an additional
              one from our Hardened Scales), Rishkar to throw a counter on both
              her and the Gilded Goose, then finally, we ate 3 food (we got one
              additional one from our Welcome to Sweettooth) with our
              commander’s ability and added a total of 6 additional counters
              onto her. Then we just swung for the hills!
            </p>

            <p>
              So we definitely “did something cool”. In this case, it was just
              making our big evasive flyer massive and pumping our whole board
              with Loyal Guardian, Hardened Scales, and a light dusting of
              counters from Rishkar, Preema Renegade.
            </p>

            <p>Now to ask the penultimate questions:</p>
            <ul>
              <li>
                Did we do something cool? YES! I won’t even go into how much we
                did again as it was rather bonkers.{" "}
              </li>
              <li>
                What were the most valuable cards throughout the game?
                Definitely our Hardened Scales, Drana, and Loyal Guardian. They
                all did a huge amount of work, and the game would look very
                different if we didn’t have them.
              </li>
              <li>
                Did you have fun? Yes, sir! This was big, silly Magic. The best
                kind of Magic. I’m very happy with how the deck plays and think
                it’s worth continuing on into building into a fully fledged
                Commander deck!
              </li>
            </ul>
          </section>
          <section id="conclusion" className="container">
            <h3 id="conclusion-title">Conclusion</h3>
            <p>
              This is Fast-brewing, it’s a way to feel out a deck idea and
              explore card options in a quick and efficient manner. These play
              sessions last all of a few minutes, and swapping cards in and out
              is super easy as there aren’t that many to contend with. You’ll
              find cards that just aren’t doing anything for you, and you’ll
              find cards that are just exceptional.{" "}
            </p>

            <p>This is the power of the fast brew: </p>
            <ul>
              <li>
                Speed: There is no need to mulligan and you draw 7 impactful
                cards every hand.
              </li>
              <li>
                Frequency: You reap most of the benefits of a full commander
                game in all of 5 minutes, so you can play hundreds in an hour.
              </li>
              <li>
                Simplicity: You’re at most playing 5 turns in a relatively
                strict setting. The cards themselves are the focus not other
                players or interactions.
              </li>
            </ul>

            <p>
              I hope you found this guide helpful, and I hope that you find some
              cool commanders and brew up some even cooler decks!
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

import React, { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "../styles/Halloween.module.scss";

const Halloween = () => {
  const [halloweenMenuOpen, setHalloweenMenuOpen] = useState(false);

  useEffect(() => {
    const navElement = document.querySelector("nav");
    navElement.style.display = "none";
  }, []);

  return (
    <>
      <div className={`${styles.wrapper} ${styles.halloweenWrapper}`}>
        <nav>
          <Link to="/" className={styles.siteTitle}>
            Home
          </Link>
          <div
            className={styles.menu}
            onClick={() => {
              setHalloweenMenuOpen(!halloweenMenuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={halloweenMenuOpen ? "open" : ""}>
            <li>
              <a href="#tile2025">2025 Regan MacNeil</a>
            </li>
            <li>
              <a href="#tile2024">2024 Darth Vader</a>
            </li>
            <li>
              <a href="#tile2023">2023 Halloween Owl</a>
            </li>
            <li>
              <a href="#tile2022">2022 Art the Clown</a>
            </li>
            <li>
              <a href="#tile2021">2021 Alice Cooper</a>
            </li>
            <li>
              <a href="#tile2020">2020 The Thing</a>
            </li>
            <li>
              <a href="#tile2019">2019 Night King</a>
            </li>
            <li>
              <a href="#tile2018">2018 Aliens Mother</a>
            </li>
            <li>
              <a href="#tile2017">2017 Freddy Krueger</a>
            </li>
            <li>
              <a href="#tile2016">2016 Negan</a>
            </li>
            <li>
              <a href="#tile2015b">2015b The Crow</a>
            </li>
            <li>
              <a href="#tile2015a">2015a Walter White</a>
            </li>
            <li>
              <a href="#tile2014">2014 Daryl Dixon</a>
            </li>
            <li>
              <a href="#tile2013">2013 Eddie</a>
            </li>
            <li>
              <a href="#tile2012">2012 Headless Horseman</a>
            </li>
            <li>
              <a href="#tile2011">2011 Scarecrow</a>
            </li>
          </ul>
        </nav>
        <header id={styles.intro}>
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-pumpkins-intro.webp"
            className={styles.background}
          />
          <h1 className={styles.title}>
            Nothing like a good pumpkin carving around Halloween!
          </h1>
        </header>
        <section>
          <p>
            Each October, there's little more I look forward to than pumpking
            carving night. A still young tradition with my bud and I (and
            potential guests), one Saturday night turns into great BBQ, rock and
            metal music, a few adult sodas and pumpkin carving. Since we're
            starting to build a little resume for ourselves, and garnishing
            interest from family and friends, I decided to share some of our
            work here. Hope you enjoy! Cheers
          </p>
        </section>

        <a name="tile2025"></a>
        <header id="regan">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-regan-macneil-exorcist.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2025-regan-macneil.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2025 Regan MacNeil</h1>
        </header>
        <section>
          <p>
            Regan is a shy, creative young woman who becomes possessed by the
            demon Pazuzu. Regan assumes a strange, aggressive behavior that
            worries and scares her mother, and begins to develop progressively
            inhuman traits and mannerisms. Her mother, Chris, consults
            physicians and psychiatrists, but no somatic nor psychiatric causes
            are found. The doctors finally suggest an exorcism, as patients who
            believe they are possessed sometimes benefit from ritualized
            treatment.
          </p>
        </section>

        <a name="tile2024"></a>
        <header id="vader">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-darth-vader2.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2024-pumpkin-darth-vader.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2024 Darth Vader</h1>
        </header>
        <section>
          <p>
            Anakin Skywalker was a powerful and brilliant Jedi Knight, but his
            emotional nature, fear of loss, and growing mistrust of the Jedi
            Council made him vulnerable to the influence of Emperor Palpatine
            (Darth Sidious). This, along with a disfiguring battle loss to
            Obi-Wan Kenobi, led to the birth of the uber villain, Darth Vader.
          </p>
        </section>

        <a name="tile2023"></a>
        <header id="owl">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-owl.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2023-pumpkin-halloween-owl.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2023 The Owl</h1>
        </header>
        <section>
          <p>
            Owls are masters of the night, possessing unique physical traits
            that make them incredibly efficient predators. Their wings are
            equipped with specialized feathers—a stiff leading edge, a soft,
            fringed trailing edge, and a velvety surface—which muffle the sound
            of air rushing over the wing, allowing them to approach prey in
            near-silence.
          </p>
        </section>

        <a name="tile2022"></a>
        <header id="art">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-terrifier.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2022-pumpkin-terrifier.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2022 Art the Clown</h1>
        </header>
        <section>
          <p>
            Art the Clown is infamous for his relentless and extreme level of
            violence, which is the main element that has propelled the Terrifier
            franchise to cult status.
          </p>
        </section>

        <a name="tile2021"></a>
        <header id="alice">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-alice-cooper.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2021-pumpkin-alice-cooper.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2021 Alice Cooper</h1>
        </header>
        <section>
          <p>
            Alice Cooper is an iconic American singer, songwriter, and actor,
            widely known as the "Godfather of Shock Rock." Following the breakup
            of the original band in 1975, Furnier legally changed his name to
            Alice Cooper and launched a solo career with the concept album
            Welcome to My Nightmare.
          </p>
        </section>

        <a name="tile2020"></a>
        <header id="norris">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-the-thing.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2020-pumpkin-the-thing.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2020 The Thing's Norris</h1>
        </header>
        <section>
          <p>
            When R.J. MacReady (Kurt Russell) uses a flamethrower to burn the
            creature, Norris's head violently tears itself away from the burning
            body, landing on the floor. The severed head then rapidly sprouts
            several thin, insect-like spider legs and attempts to scurry away
            across the floor. This transformation is what prompts the famous
            line, "You gotta be f***ing kidding!" from the character Palmer.
          </p>
        </section>

        <a name="tile2019"></a>
        <header id="nightking">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-night-king.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2019-pumpkin-night-king.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2019 Night King</h1>
        </header>
        <section>
          <p>
            The Children of the Forest created the White Walkers as a weapon to
            defend themselves against the First Men, but they eventually lost
            control of their creation. The first and most powerful White Walker
            is ... the Night King!
          </p>
        </section>

        <a name="tile2018"></a>
        <header id="mother">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-alien-xenomorph2.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2018-pumpkin-aliens-xenomorph.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2018 Mother</h1>
        </header>
        <section>
          <p>
            In Aliens, the central antagonist is the massive Xenomorph Queen,
            the ultimate "mother" of the alien hive. She is significantly larger
            and more powerful than the standard Xenomorph drones or warriors,
            distinguished by her immense size, large crown-like head carapace,
            and a massive, external ovipositor (the tube-like organ used for
            laying eggs).
          </p>
        </section>

        <a name="tile2017"></a>
        <header id="freddy">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-Freddy-Krueger.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2017-pumpkin-freddy-krueger.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2017 Freddy Krueger</h1>
        </header>
        <section>
          <p>
            In the hit film franchise, A Nightmare On Elm Street, Frederick
            Charles Krueger was a child murderer who preyed on children in an
            old boiler room. He was eventually caught and tried for his crimes,
            but was released on a legal technicality. The vengeful parents of
            Springwood took justice into their own hands. They hunted Freddy
            down, trapped him in his boiler room, and burned him alive. As he
            died, Freddy was approached by demonic entities. They offered him
            the ability to live on and kill in the dreams of the children in
            exchange for his soul. Freddy accepted, becoming a powerful Dream
            Demon seeking revenge on the children of the parents who killed him.
          </p>
        </section>

        <a name="tile2016"></a>
        <header id="negan">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-Negan-The-Walking-Dead.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2016-pumpkin-negan.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2016 Negan</h1>
        </header>
        <section>
          <p>
            Negan Smith is one of the most compelling and controversial
            characters in The Walking Dead universe. Initially the primary
            antagonist, he later evolved into an anti-hero and complex
            protagonist. Known almost as well is his trusty baseball bat wrapped
            in barbed wire, which he affectionately named "Lucille" after his
            deceased wife.
          </p>
        </section>

        <a name="tile2015b"></a>
        <header id="ericdraven">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-Eric-Draven-The-Crow.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2015b-pumpkin-eric-draven.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2015b Eric Draven</h1>
        </header>
        <section>
          <p>
            Eric Draven is the central character in The Crow comic book and film
            series, most famously portrayed by Brandon Lee in the 1994 cult
            classNameic movie. He was a rock musician who was resurrected from
            the dead to avenge his own murder and the murder of his fiancée,
            Shelly Webster.
          </p>
        </section>

        <a name="tile2015a"></a>
        <header id="walterwhite">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-Walter-White-Breaking-Bad.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2015a-pumpkin-walter-white.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2015a Walter White</h1>
        </header>
        <section>
          <p>
            Walter Hartwell White Sr., alias Heisenberg, is the main protagonist
            of the American crime drama television series Breaking Bad, where he
            is portrayed by actor Bryan Cranston. He begins the series as a
            brilliant but underachieving high school chemistry teacher in
            Albuquerque, New Mexico. He also works a second job at a local car
            wash to make ends meet. When diagnosed with Stage III lung cancer,
            with a growing need for money and a devil-may-care attitude toward
            life, he took on the alias Heisenberg, and grew into a ruthless drug
            kingpin.
          </p>
        </section>

        <a name="tile2014"></a>
        <header id="daryldixon">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-Daryl-Dixon-The-Walking-Dead.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2014-pumpkin-daryl-dixon.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2014 Daryl Dixon</h1>
        </header>
        <section>
          <p>
            Daryl Dixon is a fictional character and a fan-favorite survivor
            from AMC's post-apocalyptic horror drama series, The Walking Dead,
            portrayed by actor Norman Reedus. is unique in the franchise as he
            was created specifically for the television series and does not have
            a evolves from a hostile loner to a selfless, loyal, and crucial
            member and leader of the core survivor group.
          </p>
        </section>

        <a name="tile2013"></a>
        <header id="eddie">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-Eddie-Iron-Maiden.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2013-pumpkin-eddie1.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2013 Eddie</h1>
        </header>
        <section>
          <p>
            Eddie, officially known as Eddie the Head or Edward T. Head, is the
            iconic and ever-changing mascot of the British heavy metal band Iron
            Maiden. Eddie has appeared on virtually all of the band's album
            covers, singles, and merchandise since 1980, and is a permanent
            feature of their live stage shows, often appearing as a towering
            animatronic or a "walk-on" character. He is arguably the most famous
            mascot in the history of heavy metal.
          </p>
        </section>

        <a name="tile2012"></a>
        <header id="horseman">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-headless-horseman.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2012-pumpkin-headless-horseman1.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2012 The Headless Horseman</h1>
        </header>
        <section>
          <p>
            The Headless Horseman is one of the most enduring and famous figures
            in American folklore, primarily known as the antagonist in
            Washington Irving's short story, "The Legend of Sleepy Hollow." In
            Irving's story, which was published in 1820, the Headless Horseman
            is said to be the ghost of a "Hessian trooper" (a German mercenary
            soldier hired by the British) who was decapitated by a cannonball
            during an unnamed battle of the American Revolutionary War near
            Sleepy Hollow, New York.
          </p>
        </section>

        <a name="tile2011"></a>
        <header id="scarecrow">
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/bg-scarecrow.webp"
            className={styles.background}
          />
          <img
            src="https://assets.dougkarda.com/images/halloween/pumpkins/2011-pumpkin-scarecrow1.webp"
            className={styles.foreground}
          />
          <h1 className={styles.title}>2011 Scarecrow</h1>
        </header>
        <section>
          <p>
            A scarecrow is a decoy, typically a mannequin in the shape of a
            human, placed in an open field or garden to deter birds, such as
            crows and sparrows, from eating seeds and damaging growing crops. It
            is one of the oldest forms of agricultural pest control. It's
            aesthetics and timing with the traditional final harvest time is
            likely why it's been a successful association with Halloween.
          </p>
        </section>
      </div>
    </>
  );
};

export default Halloween;

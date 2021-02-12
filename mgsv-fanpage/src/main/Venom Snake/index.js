import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./venomsnake.css";
import vs_img from "../../assets/VSProfile.png";
import dots_img from "../../assets/dots.jpg";
import vs_img_2 from "../../assets/vsnake.png";
import quiet_img from "../../assets/quiet.png";
import d_dog from "../../assets/d-dog.png";
import d_horse from "../../assets/d-horse.png";
import d_walker from "../../assets/d-walker.png";
import pequod from "../../assets/pequod.png";
import "./skillsfunc";

const VenomSnakeProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <NavBar />
      <MainHeading />
      <AboutVenomSnake />
      <VenomSnakeSkills />
      <FieldBuddy />
    </motion.div>
  );
};

const NavBar = () => {
  const handleAboutClick = () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const handleSkillsClick = () => {
    document
      .getElementById("skills-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const handleBuddyClick = () => {
    document
      .getElementById("field-buddy-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav class="navigation">
      <div class="nav-container">
        <Link to="/">
          <h1>RETURN</h1>
        </Link>
        <div>
          <a class="about-link" onClick={() => handleAboutClick()}>
            <h3>ABOUT</h3>
          </a>
          <a class="skills-link" onClick={() => handleSkillsClick()}>
            <h3>SKILLS</h3>
          </a>
          <a class="buddy-link" onClick={() => handleBuddyClick()}>
            <h3>BUDDY</h3>
          </a>
        </div>
      </div>
    </nav>
  );
};

const MainHeading = () => {
  const handleAboutClick = () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="banner-section">
      <div class="banner-container">
        <div>
          <h1>
            Venom <span>Snake</span>,
          </h1>
          <h3>Commander and Chief of Diamond Dogs.</h3>
          <button id="about-btn" onClick={() => handleAboutClick()}>
            ABOUT
          </button>
        </div>
        <img src={vs_img} alt="Profile Image of Venom Snake" />
      </div>
    </section>
  );
};

const AboutVenomSnake = () => {
  return (
    <section id="about-section">
      <h1>About</h1>
      <div class="about-content">
        <p>
          Punished Venom Snake, also known Big Boss, Ahab, V, or Big Boss'
          Phantom, was a combat medic for for Militaires Sans Frontières (MSF),
          who would later become the mercenary commander of Diamond Dogs and
          Outer Heaven as on of the original Big Boss' most skilled and trusted
          lieutenants.
        </p>
        <p>
          Venom Snake was originally a field medic as mentions above. However,
          after falling into a 9 year comma, after an enemy (XOF) attack, things
          would change forever. He suffered imense brain and bodily damage. The
          original Big Boss and Ocelot would take advantage of this and convince
          him that he is the real Big Boss. And he was given the code name
          Punished Venom Snake and the title of Big Boss.
        </p>
        <p>
          V fell for this thanks to his brain damage, general amnesia,
          dissociative amnesia, dissociative identity disorder, and hypnotic
          suggestion. Thankfully however, he was able to regain his skills and
          expertise through training.
        </p>
        <p>
          While the original Big Boss was away working on his plans for Zanzibar
          Land, Venom Snake took his place and believed himself to be the
          original Big Boss. He built up the Mother Base and gathered up many
          recruits with the help of Ocelot and Miller. He went on countless
          infiltration and rescue operations in Afghanistan and Angola-Zaire.
        </p>
        <p>
          In my opinion, after playing the game... It was starting to become
          obvious that Venom Snake was starting to outshine the original Big
          Boss. Not only was he capable of doing all the things the original
          could but he also hinted at a very different personal goal than that
          of the originals'. World Peace.
        </p>
        <p>
          Venom Snake showed greater empathy and compassion than Big Boss and
          even ended up de-nuclearizing the entire world. But eventually things
          changed. Venom Snakes memories returned to him, he realized that he
          wasn't actually Big Boss. He was just playing the part so that the
          original could go about his plans untroubled by oposition. He was
          tricked, taken advantage of and was ultamitely just a pawn in the
          original Big Boss' plans.
        </p>
        <p>
          In my opinion. Venom Snakes goals were not aligned with the original
          Big Boss' goals. And because of the way he was treated, this probably
          built up animosity despite his loyalty for the Original Big Boss. Not
          only were his goals different but this built up animosity risked the
          newly formed Mother Base and Diamond Dogs turing against the origianl
          Big Boss. For this reason, despite Venom Snake doing a great job, the
          original Big Boss probably ended up betraying him in the end. Ending
          Venom Snakes life and also the lives of all the Diamond Dogs due to
          the entire base being destroyed.
        </p>
        <p>
          <em>
            "I won't scatter your sorrow to the heartless sea. I will always be
            with you. Plant your roots in me. I won't see you end as ashes.
            You're all diamonds. We'll make diamonds from their ashes, take them
            into battle with us. We are Diamond Dogs."
          </em>
        </p>
        <p>- Venom Snake</p>
      </div>
      <div class="dot-container">
        <img src={dots_img} />
      </div>
    </section>
  );
};

const VenomSnakeSkills = () => {
  return (
    <section id="skills-section">
      <h1>Skills</h1>
      <p>
        The following are the estimated skill evaluations for Venom Snake. These
        rankings can be found within the game. However, whether these are truly
        accurate or not is not well understood.
      </p>
      <div class="skills-container">
        <img
          src={vs_img_2}
          alt="image of Diamond Dog's commander and chief, Venom Snake"
        />
        <div class="skills">
          <div>
            <p class="skill-type">Combat</p>
            <div class="skill-bar">
              <div class="combat-level"></div>
            </div>
            <p class="rank">A++</p>
          </div>
          <div>
            <p class="skill-type">
              <abbr title="Research and Development">R & D</abbr>
            </p>
            <div class="skill-bar">
              <div class="rd-level"></div>
            </div>
            <p class="rank">A++</p>
          </div>
          <div>
            <p class="skill-type">
              <abbr title="Base Development">Base Dev</abbr>
            </p>
            <div class="skill-bar">
              <div class="bd-level"></div>
            </div>
            <p class="rank">A++</p>
          </div>
          <div>
            <p class="skill-type">Support</p>
            <div class="skill-bar">
              <div class="support-level"></div>
            </div>
            <p class="rank">A++</p>
          </div>
          <div>
            <p class="skill-type">Intel</p>
            <div class="skill-bar">
              <div class="intel-level"></div>
            </div>
            <p class="rank">A++</p>
          </div>
          <div>
            <p class="skill-type">Medical</p>
            <div class="skill-bar">
              <div class="medical-level"></div>
            </div>
            <p class="rank">A++</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FieldBuddy = () => {
  return (
    <section id="field-buddy-section">
      <h1>BUDDY</h1>
      <div className="buddy-container">
        <Quiet />
        <OtherFieldBuddies
          buddy_image={d_dog}
          buddy_info="D-Dog, the wolf of Diamond Dogs, 
          is a highly trained canine which assists Venom 
          Snake out in the field. He is capable of locating 
          and identifying enemies in the near vicinity. Also, 
          he is capable of engaging in combate and aprehending 
          the enemy even through knockouts."
        />
        <OtherFieldBuddies
          buddy_image={d_horse}
          buddy_info="D-Horse provides Venom Snake a means of 
          transportation when a vehicle isn't well suited for 
          a specific mission or terrain. "
        />
        <OtherFieldBuddies
          buddy_image={d_walker}
          buddy_info="D-Walker is a robot which can be used as 
          a means of transportation and as a weapon as well. 
          It can be equiped with tranquilizer darts, fire arms, 
          and a robotic arms to help aprehend enemies."
        />
        <OtherFieldBuddies
          buddy_image={pequod}
          buddy_info="Pequod is a pilot who provides Venom Snakes 
          his main method of transportaion which is through helicopter, 
          also known as the aerial command center. He can be summoned by 
          by Venom Snake while in missions to provide aerial support 
          through the use of onboard rail guns and missles. Also capable 
          of bombbardments and defensive maneuvers through the use of flares."
        />
      </div>
    </section>
  );
};

const Quiet = () => {
  return (
    <div className="quiet">
      <div>
        <img src={quiet_img} alt="image of field operative 'Quiet'" />
      </div>
      <div class="q-skills">
        <div>
          <p class="skill-type">Combat</p>
          <div class="q-skill-bar">
            <div class="q-combat-level"></div>
          </div>
          <p class="rank">A++</p>
        </div>
        <div>
          <p class="skill-type">
            <abbr title="Research and Development">R & D</abbr>
          </p>
          <div class="q-skill-bar">
            <div class="q-rd-level"></div>
          </div>
          <p class="rank">D</p>
        </div>
        <div>
          <p class="skill-type">
            <abbr title="Base Development">Base Dev</abbr>
          </p>
          <div class="q-skill-bar">
            <div class="q-bd-level"></div>
          </div>
          <p class="rank">E</p>
        </div>
        <div>
          <p class="skill-type">Support</p>
          <div class="q-skill-bar">
            <div class="q-support-level"></div>
          </div>
          <p class="rank">C</p>
        </div>
        <div>
          <p class="skill-type">Intel</p>
          <div class="q-skill-bar">
            <div class="q-intel-level"></div>
          </div>
          <p class="rank">A++</p>
        </div>
        <div>
          <p class="skill-type">Medical</p>
          <div class="q-skill-bar">
            <div class="q-medical-level"></div>
          </div>
          <p class="rank">D</p>
        </div>
        <p className="q-description">
          Codename Quiet, provides Venom Snake reconnaissance and long distance
          cover fire through the use of highly customized sniper rifles. Quiet
          also uses strange powered abilities to help you and herself in battle.
        </p>
      </div>
    </div>
  );
};

const OtherFieldBuddies = ({ buddy_image, buddy_info }) => {
  return (
    <div className="other-field-buddies">
      <div className="buddy-img-container">
        <img src={buddy_image} />
      </div>
      <div className="buddy-info-container">
        <p>{buddy_info}</p>
      </div>
    </div>
  );
};

export default VenomSnakeProfile;

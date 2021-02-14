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
import "./otheranimations";

const vspVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "100%",
  },
};

const VenomSnakeProfile = () => {
  return (
    <motion.div
      variants={vspVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 1 }}
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
            Venom <span className="heading-red">Snake</span>,
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
        <p>[Spoiler Alert]</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias
          facere obcaecati quia libero adipisci voluptate, dolore minus illo
          deserunt eius minima dolorem quidem nemo aspernatur, cupiditate porro,
          nobis error?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          voluptatibus quis officia quod non minima error possimus alias
          reprehenderit accusantium iste debitis voluptatem odit eum, corrupti
          placeat laborum qui. Mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          blanditiis ullam cumque in velit error deserunt vero aperiam sequi
          quis debitis optio, ipsam doloribus necessitatibus quam ut pariatur
          iste voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          voluptatibus quis officia quod non minima error possimus alias
          reprehenderit accusantium iste debitis voluptatem odit eum, corrupti
          placeat laborum qui. Mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          blanditiis ullam cumque in velit error deserunt vero aperiam sequi
          quis debitis optio, ipsam doloribus necessitatibus quam ut pariatur
          iste voluptates?
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
      <div className="vs-skill-info-container">
        <p>
          The following are the estimated skill evaluations for Venom Snake.
          These rankings can be found within the game. However, whether these
          are truly accurate or not is not well understood.
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
      </div>
    </section>
  );
};

const FieldBuddy = () => {
  return (
    <>
      <section id="field-buddy-section">
        <h1>BUDDY</h1>
        <div className="buddy-container">
          <Quiet />
          <div className="b-info-container-1">
            <OtherFieldBuddies
              buddy_image={d_dog}
              buddy_info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt corrupti illo perspiciatis, quis assumenda tenetur nam rerum, atque nesciunt exercitationem, sapiente neque qui facilis repudiandae illum pariatur a expedita?"
            />
            <OtherFieldBuddies
              buddy_image={d_horse}
              buddy_info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt corrupti illo perspiciatis, quis assumenda tenetur nam rerum, atque nesciunt exercitationem, sapiente neque qui facilis repudiandae illum pariatur a expedita?"
            />
          </div>
          <div className="b-info-container-2">
            <OtherFieldBuddies
              buddy_image={d_walker}
              buddy_info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt corrupti illo perspiciatis, quis assumenda tenetur nam rerum, atque nesciunt exercitationem, sapiente neque qui facilis repudiandae illum pariatur a expedita?"
            />
            <OtherFieldBuddies
              buddy_image={pequod}
              buddy_info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt corrupti illo perspiciatis, quis assumenda tenetur nam rerum, atque nesciunt exercitationem, sapiente neque qui facilis repudiandae illum pariatur a expedita?"
            />
          </div>
        </div>
      </section>
      <div className="banner2"></div>
    </>
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

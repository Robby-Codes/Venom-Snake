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

// framer motion transition animations for VenomSnakeProfile
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

// Main profile page component
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

// Navigation Bar component
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
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/">
          <h1>RETURN</h1>
        </Link>
        <div>
          <a className="about-link" onClick={() => handleAboutClick()}>
            <h3>ABOUT</h3>
          </a>
          <a className="skills-link" onClick={() => handleSkillsClick()}>
            <h3>SKILLS</h3>
          </a>
          <a className="buddy-link" onClick={() => handleBuddyClick()}>
            <h3>BUDDY</h3>
          </a>
        </div>
      </div>
    </nav>
  );
};

// Banner Section component
const MainHeading = () => {
  const handleAboutClick = () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="banner-section">
      <div className="banner-container">
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

// About Section component
const AboutVenomSnake = () => {
  return (
    <section id="about-section">
      <h1>About</h1>
      <div className="about-content">
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
      <div className="dot-container">
        <img src={dots_img} />
      </div>
    </section>
  );
};

// Skills Section component
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
        <div className="skills-container">
          <img
            src={vs_img_2}
            alt="image of Diamond Dog's commander and chief, Venom Snake"
          />
          <div className="skills">
            <div>
              <p className="skill-type">Combat</p>
              <div className="skill-bar">
                <div className="combat-level"></div>
              </div>
              <p className="rank">A++</p>
            </div>
            <div>
              <p className="skill-type">
                <abbr title="Research and Development">R & D</abbr>
              </p>
              <div className="skill-bar">
                <div className="rd-level"></div>
              </div>
              <p className="rank">A++</p>
            </div>
            <div>
              <p className="skill-type">
                <abbr title="Base Development">Base Dev</abbr>
              </p>
              <div className="skill-bar">
                <div className="bd-level"></div>
              </div>
              <p className="rank">A++</p>
            </div>
            <div>
              <p className="skill-type">Support</p>
              <div className="skill-bar">
                <div className="support-level"></div>
              </div>
              <p className="rank">A++</p>
            </div>
            <div>
              <p className="skill-type">Intel</p>
              <div className="skill-bar">
                <div className="intel-level"></div>
              </div>
              <p className="rank">A++</p>
            </div>
            <div>
              <p className="skill-type">Medical</p>
              <div className="skill-bar">
                <div className="medical-level"></div>
              </div>
              <p className="rank">A++</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Buddy Section component
const FieldBuddy = () => {
  return (
    <>
      <section id="field-buddy-section">
        <h1>Buddy</h1>
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

// "Quiet" component for Buddy Section
const Quiet = () => {
  return (
    <div className="quiet">
      <div>
        <img src={quiet_img} alt="image of field operative 'Quiet'" />
      </div>
      <div className="q-skills">
        <div>
          <p className="skill-type">Combat</p>
          <div className="q-skill-bar">
            <div className="q-combat-level"></div>
          </div>
          <p className="rank">A++</p>
        </div>
        <div>
          <p className="skill-type">
            <abbr title="Research and Development">R & D</abbr>
          </p>
          <div className="q-skill-bar">
            <div className="q-rd-level"></div>
          </div>
          <p className="rank">D</p>
        </div>
        <div>
          <p className="skill-type">
            <abbr title="Base Development">Base Dev</abbr>
          </p>
          <div className="q-skill-bar">
            <div className="q-bd-level"></div>
          </div>
          <p className="rank">E</p>
        </div>
        <div>
          <p className="skill-type">Support</p>
          <div className="q-skill-bar">
            <div className="q-support-level"></div>
          </div>
          <p className="rank">C</p>
        </div>
        <div>
          <p className="skill-type">Intel</p>
          <div className="q-skill-bar">
            <div className="q-intel-level"></div>
          </div>
          <p className="rank">A++</p>
        </div>
        <div>
          <p className="skill-type">Medical</p>
          <div className="q-skill-bar">
            <div className="q-medical-level"></div>
          </div>
          <p className="rank">D</p>
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

// Other buddy components for Buddy Section
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

import React from "react";
import "./venomsnake.css";
import vs_img from "../../assets/VSProfile.png";
import dots_img from "../../assets/dots.jpg";
import vs_img_2 from "../../assets/vsnake.png";
import "./skillsfunc";

const VenomSnakeProfile = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <AboutVenomSnake />
      <VenomSnakeSkills />
      <FieldBuddy />
    </>
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
  return (
    <nav class="navigation">
      <div class="nav-container">
        <a href=".">
          <h1>Turn Back</h1>
        </a>
        <div>
          <a class="about-link" onClick={() => handleAboutClick()}>
            <h3>ABOUT</h3>
          </a>
          <a class="skills-link" onClick={() => handleSkillsClick()}>
            <h3>SKILLS</h3>
          </a>
        </div>
      </div>
    </nav>
  );
};

const Banner = () => {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        maxime ab debitis et dolores quo totam natus minima numquam officia nemo
        veniam rem mollitia qui, quae possimus sequi. Officia, a.
      </p>
      <div class="skills-container">
        <img src={vs_img_2} />
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
      <div className="buddy-container">
        <div className="quiet"></div>
        <div className="d-dog"></div>
        <div className="d-horse"></div>
        <div className="d-walker"></div>
        <div className="pequod"></div>
      </div>
    </section>
  );
};

export default VenomSnakeProfile;

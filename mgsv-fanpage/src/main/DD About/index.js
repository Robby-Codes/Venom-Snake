import React from "react";

const AboutDiamondDogs = () => {
  return (
    <>
      <NavBar2 />
    </>
  );
};

const NavBar2 = () => {
  return (
    <nav class="navigation">
      <div class="nav-container">
        <a href=".">
          <h1>Turn Back</h1>
        </a>
        <div>
          <a class="about-link">
            <h3>ABOUT</h3>
          </a>
          <a class="skills-link">
            <h3>SKILLS</h3>
          </a>
          <a class="buddy-link">
            <h3>BUDDY</h3>
          </a>
        </div>
      </div>
    </nav>
  );
};

const Banner = () => {
  return <div className="banner-container"></div>;
};

export default AboutDiamondDogs;

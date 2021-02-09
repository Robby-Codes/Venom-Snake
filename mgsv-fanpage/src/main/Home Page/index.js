import React from "react";
import "./home.css";
import homebg from "../../assets/homebg.jpg";

const HomePage = () => {
  return <Menu />;
};

const Menu = () => {
  return (
    <div className="homepage-container">
      <div className="text-container">
        <h1>Metal Gear Solid V</h1>
        <h1>THE PHANTOM PAIN</h1>
        <h1>THE UNOFFICIAL FANPAGE</h1>
        <a id="vs-link" href=".">
          <h1>Venom Snakes Profile</h1>
        </a>
        <a id="dd-link" href=".">
          <h1>About Diamond Dog</h1>
        </a>
      </div>
    </div>
  );
};

export default HomePage;

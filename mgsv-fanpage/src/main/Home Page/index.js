import React from "react";
import "./home.css";
import homevideoloop from "../../assets/hploop.mp4";

const HomePage = () => {
  return <Menu />;
};

const Menu = () => {
  return (
    <div className="homepage-container">
      <div className="video-container">
        <video autoPlay loop>
          <source src={homevideoloop} type="video/mp4" />
          Sorry, Your Browser Cannot Play This Video
        </video>
      </div>
      <div className="text-container">
        <h1>METAL GEAR SOLID V</h1>
        <h1>THE PHANTOM PAIN</h1>
        <h1>THE UNOFFICIAL FANPAGE</h1>
        <a id="vs-link" href=".">
          <h1>VENOM SNAKE PROFILE</h1>
        </a>
        <a id="dd-link" href=".">
          <h1>ABOUT DIAMOND DOGS</h1>
        </a>
      </div>
      <small>Created By: Roberto Guerra</small>
    </div>
  );
};

export default HomePage;

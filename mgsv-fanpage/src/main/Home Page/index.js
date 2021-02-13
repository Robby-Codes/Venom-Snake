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
import "./home.css";
import homevideoloop from "../../assets/hploop.mp4";

const hpVariants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: "0%",
  },
  exit: {
    x: "-100%",
  },
};

const HomePage = () => {
  return (
    <motion.div
      variants={hpVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 1.5 }}
    >
      <Cover />
      <Menu />
    </motion.div>
  );
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
        <Link to="/Venom-Snake-Profile" id="vs-link">
          <h1>VENOM SNAKE PROFILE</h1>
        </Link>
      </div>
      <small>Created By: Roberto Guerra</small>
    </div>
  );
};

const Cover = () => {
  return <div className="cover-container"></div>;
};

export default HomePage;

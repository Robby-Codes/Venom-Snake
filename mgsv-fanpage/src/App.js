import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, animationControls, motion } from "framer-motion";
import HomePage from "../src/main/Home Page";
import VenomSnakeProfile from "../src/main/Venom Snake";
import v_cigar from "./assets/timer.jpeg";

// Using react-router and framer-motion imports to create
// specific site paths and transition animations
function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Background />
      <Switch location={location} key={location.key}>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/Venom-Snake-Profile"
          exact
          component={VenomSnakeProfile}
        />
      </Switch>
    </AnimatePresence>
  );
}

// Background that's revealed during framer-motion exit animations
// on every page.
const Background = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${v_cigar})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "fixed",
        zIndex: "-1",
      }}
    ></div>
  );
};

export default App;

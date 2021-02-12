import React, { useLocation } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "../src/main/Home Page";
import VenomSnakeProfile from "../src/main/Venom Snake";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Venom-Snake-Profile" component={VenomSnakeProfile} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;

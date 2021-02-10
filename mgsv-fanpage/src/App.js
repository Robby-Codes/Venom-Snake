import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../src/main/Home Page";
import VenomSnakeProfile from "../src/main/Venom Snake";
import AboutDiamondDogs from "../src/main/DD About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/Venom-Snake-Profile">
          <VenomSnakeProfile />
        </Route>
        <Route path="/About-Diamond-Dogs">
          <AboutDiamondDogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

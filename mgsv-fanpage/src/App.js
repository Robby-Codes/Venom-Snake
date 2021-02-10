import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../src/main/Home Page";
import VenomSnakeProfile from "../src/main/Venom Snake";

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
      </Switch>
    </Router>
  );
}

export default App;

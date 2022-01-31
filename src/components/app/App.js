import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from "../view";
import LocationsNav from "../locations-nav";

const App = () => {
  return (
    <Router>
      <div className="app">
        <LocationsNav />
        <Switch>
          <Route path="/:location" children={<View />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

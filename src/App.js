import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "./content";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:name?/:child?/:grandchild?" component={Content} />
      </Switch>
    </Router>
  );
};

export default App;

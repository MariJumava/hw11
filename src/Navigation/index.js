import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Figure from '../Figure';
import Navbar from '../Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

          <Route path="/figure/:form/:color">
            <Figure />
          </Route>

          <Route path="/">
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
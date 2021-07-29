import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Figure from '../Figure';
import Navbar from '../Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/figure/:form/:color">
            <Navbar />
          </Route>

          <Route path="/">
            <Navbar />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
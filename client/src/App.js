import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/books" component={Saved} />
              <Route exact path="/books" component={Detail} />
              <Route component={NoMatch} />
          </Switch>
         
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import dotenv from "dotenv";
dotenv.config();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/books" component={Saved} />
              <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} />
          </Switch>
         
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import Navigation from "../components/Navigation";
import SavedResults from "../components/SavedResults";

class Saved extends Component {
  render() {
    return (
      <div id="saved-hero-img">
        <Navigation />
        <body className="content-container">
          <h1 id="saved-header">SAVED books</h1>
          <SavedResults />
        </body>
      </div>
    );
  }
}

export default Saved;

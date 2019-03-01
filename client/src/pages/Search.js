import React, { Component } from "react";
import Hero from "../components/Hero";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  render() {
    return (
      <div>
        <Hero />
        <SearchResults />
      </div>
    );
  }
}

export default Search;

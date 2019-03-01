import React, { Component } from "react";
import Hero from "../components/Hero";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        query: "",
        searchResults: []
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    }; 

  render() {
    return (
      <div>
        <Hero handleInputChange={this.handleInputChange} query={this.state.query}/>
        <SearchResults />
      </div>
    );
  }
}

export default Search;

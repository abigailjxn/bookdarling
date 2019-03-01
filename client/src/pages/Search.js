import React, { Component } from "react";
import Hero from "../components/Hero";
import SearchResults from "../components/SearchResults";

const apiKey = process.env.API_Key;

class Search extends Component {
    state = {
        query: "",
        searchResults: []
    };

     queryString = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&key=${apiKey}&maxResults=25`;

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    }; 

      handleSubmit = event => {
        event.preventDefault();
        fetch(this.queryString)
        .then(results => {
            return results.json();
        })
        .then(data => this.setState({searchResults: data}))
        // change query to RegEx for GoogleBooks API Reqest
        console.log(this.state.query)
    }

  render() {
    return (
      <div>
        <Hero handleInputChange={this.handleInputChange} query={this.state.query} handleSubmit={this.handleSubmit}/>
        <SearchResults />
      </div>
    );
  }
}

export default Search;

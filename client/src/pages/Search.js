import React, { Component } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

// const apiKey = process.env.REACT_APP_API_Key;
// console.log(apiKey);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResults: {}
      // apiKey: apiKey
    };
  }

  //  queryString = "https://www.googleapis.com/books/v1/volumes?q=1q84&key=AIzaSyDn_KvhMNLVAGWyQQS99HIuPZXDluwSU18&maxResults=25";

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = event => {
    let query = this.state.query;
    console.log(query);
    API.searchBooks(query)
      .then(res => this.setState({ searchResults: res.data }))
      .catch(err => console.log(err));
    // axios.get(this.queryString)
    // .then(res => {
    //     this.setState({
    //         searchResults: res
    //     })
    // })

    // .then(data => this.setState({searchResults: data}))
    // change query to RegEx for GoogleBooks API Reqest
    // console.log(this.state.query);
    // console.log(this.state.searchResults);
  };

  render() {
    return (
      <div>
        <Hero
          handleInputChange={this.handleInputChange}
          query={this.state.query}
          handleSubmit={this.handleSubmit}
        />
        {/* <SearchResults searchResults={this.state.searchResults}/> */}
        <div id="saved-book-container">
          {this.state.searchResults.items && 
              this.state.searchResults.items.map(book => {
                let imageLink = book.volumeInfo.imageLinks.smallThumbnail;

             return (
            <div id="saved-book-square" key={book.id}>
              <img
                className="book-img"
                src={imageLink}
              />
              <div id="saved-book-text">
                <div id="saved-book-author">{book.volumeInfo.authors}</div>
                <div id="saved-book-title">{book.volumeInfo.title}</div>

                <div id="saved-book-star">
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>)
              })}
        </div>
      </div>
    );
  }
}

export default Search;

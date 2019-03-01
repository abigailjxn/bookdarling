import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class SearchResults extends Component {
  state = {
    books: []
  };

// INCLUDE GOOGLE API INTEGRATION HERE

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

 


  render() {
    return (
      <div>
        {/* //include heart for saving book, results just need to be able to render and be saved*/}
        <div id="saved-book-container">
          {this.state.books.map(book => (
            <div id="saved-book-square" key={book._id}>
              <Link to={"/books/" + book._id}>
                <img className="book-img" src={book.image} />

                <div id="saved-book-text">
                  <div id="saved-book-author">{book.author}</div>
                  <div id="saved-book-title">{book.title}</div>
                  {/* Make this a save Icon */}
                  <div id="saved-book-star"><i className="fas fa-star"></i></div>
                </div>
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchResults;

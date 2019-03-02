import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class SearchResults extends Component {
 constructor(props) {
     super(props);
 };

  render() {
    return (
      <div>
        {/* //include heart for saving book, results just need to be able to render and be saved*/}
        <div id="saved-book-container">
          {this.props.items.map(book => (
            <div id="saved-book-square" key={book.id}>
            
                <img className="book-img" src={book.volumeInfo.imageLinks.thumbnail} />

                <div id="saved-book-text">
                  <div id="saved-book-author">{book.author}</div>
                  <div id="saved-book-title">{book.title}</div>
                 
                  <div id="saved-book-star"><i className="fas fa-star"></i></div>
                </div>
             
              
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchResults;

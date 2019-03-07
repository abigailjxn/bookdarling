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
        <h1 id="search-header">Search Results</h1>
        <div id="search-book-container">
                {this.props.results.items && this.props.results.items.map(book => {
                        // Need to include if statement to account for res with no thumbnail link
                        //   if (book.volumeInfo.imageLinks.thumbnail = undefined || null) {
                        //       let imageLink = "/images/no-match.jpg"
                        //   } else {
                        let imageLink = book.volumeInfo.imageLinks.thumbnail
                        return (
                            <div id="search-book-square" key={book.id}>
                                <img
                                    className="book-img"
                                    src={imageLink}
                                />
                                <div id="search-book-text">
                                {/* Add logic to add spaces between array indices  */}
                                    <div id="search-book-author">{book.volumeInfo.authors}</div>
                                    <div id="search-book-title">{book.volumeInfo.title}</div>

                                    <div id="search-book-bookmark">
                                        <i className="fas fa-bookmark"/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                        // }
                    )
                }
            </div>
      </div>
    );
  }
}

export default SearchResults;

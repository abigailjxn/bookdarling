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
                {this.props.results.items && this.props.results.items.map(book => {
                        // Need to include if statement to account for res with no thumbnail link
                        //   if (book.volumeInfo.imageLinks.thumbnail = undefined || null) {
                        //       let imageLink = "/images/no-match.jpg"
                        //   } else {
                        let imageLink = book.volumeInfo.imageLinks.thumbnail
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

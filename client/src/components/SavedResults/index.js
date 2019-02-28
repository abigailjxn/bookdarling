import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class SavedResults extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  updateBook = (id, bookData) => {
    API.updateBook(id, bookData)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        {/* //include star button for update book // include delete button for
        deleting book // include details route to get details for book */}
        <div id="saved-book-container">
          {this.state.books.map(book => (
            <div id="saved-book-square"  key={book._id}>
              <Link to={"/books/" + book._id}>
                <img className="book-img" src={book.image} />
                <div id="saved-book-text">
                  <div id="saved-book-author">{book.author}</div>
                  <div id="saved-book-title">{book.title}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SavedResults;

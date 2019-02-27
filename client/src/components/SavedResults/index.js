import React, { Component } from "react";
import API from "../../utils/API";


class SavedResults extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  updateBook = () => {
    API.updateBook(id, bookData)
    .then(res => 
      this.setState({books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
      //include star button for update book
      // include delete button for deleting book
      // include details route to get details for book
      <div>working</div>
    );
  }
}

export default SavedResults;

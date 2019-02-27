import React, { Component } from "react";
import "./style.css";
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

  updateBook = (id, bookData) => {
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
      <div >
       
        //include star button for update book
        // include delete button for deleting book
        // include details route to get details for book
        <div></div>

      </div>
    );
  }
}

export default SavedResults;

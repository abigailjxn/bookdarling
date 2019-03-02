import axios from "axios";

const apiKey = process.env.REACT_APP_API_Key;

export default {
  // Get Saved Books from Mongo DB
  getSavedBooks: () => axios.get("/api/books"),
  // Get single booke based on ID
  getBook: (id) => axios.get("/api/books/" + id),
  // Save Book to Mongo DB
  saveBook: (bookData) => axios.post("/api/books", bookData),
  // Update Book in Mongo DB
  updateBook: (id, bookData) => axios.put("/api/books/" + id, bookData),
  // Delete Boo from Mongo DB
  deleteBook: (id) => axios.delete("/api/books/" + id),
  searchBooks: (query) => axios.get("https://www.googleapis.com/books/v1/volumes?q=1q84&key=" + apiKey + "&maxResults=25")
};

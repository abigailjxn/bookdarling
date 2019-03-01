import axios from "axios";

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
  deleteBook: (id) => axios.delete("/api/books/" + id)
};

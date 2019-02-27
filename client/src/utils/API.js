import axios from "axios";

export default {
  // Get Saved Books from Mongo DB
  getSavedBooks: () => axios.get("/api/books"),
  // Get single booke based on ID
  // getBook: () => axios.get("/api/books/" + id),
  // Save Book to Mongo DB
  // saveBook: () => axios.post("/api/books", bookData),
  // Update Book in Mongo DB
  // updateBook: () => axios.put("/api/books/" + id, bookData),
  // Delete Boo from Mongo DB
  // deleteBook: () => axios.delete("/api/books" + id)
};

const router = require("express").Router;
const booksController = ("../../controllers/booksController");

// "/api/books" route
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// "/api/books/:id" routes
router.route("/:id")
    .get(booksController.findbyId)
    .put(booksController.update)
    .delete(booksController.delete);

module.exports = router;
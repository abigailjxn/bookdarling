const router = require("express").Router();
const booksController = require("../../controllers/booksController");


// "/api/books" route
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// "/api/books/:id" routes
router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;

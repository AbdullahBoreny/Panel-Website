const { Router } = require("express");
const bookRouter = Router();
const { getBookById, getBooks,postBooks } = require('../controllers/bookController');
let books = [
  { id: 1, title: "Pride and Prejudice" },
  { id: 2, title: "To Kill a Mockingbird" },
];
bookRouter.get("/:bookId",getBookById);
bookRouter.route("/")
.get(getBooks)
.post(postBooks)


module.exports = bookRouter;

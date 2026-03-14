const { Router } = require("express");
const bookRouter = Router();
const { getBookById, getBooks,postBooks } = require('../controllers/bookController');

bookRouter.get("/:bookId",getBookById);
bookRouter.route("/")
.get(getBooks)
.post(postBooks)


module.exports = bookRouter;

const { Router } = require("express");
const bookRouter = Router();
const { getBookById, getBooks } = require('../controllers/bookController');

bookRouter.get("/:bookId",getBookById);
bookRouter.get("/",getBooks);
bookRouter.post("/", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.json({ message: "Book added!", book: newBook });
});

module.exports = bookRouter;

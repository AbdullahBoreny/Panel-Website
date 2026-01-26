const { Router } = require("express");
const bookRouter = Router();

let books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
];

bookRouter.get("/", (req, res) => {
  res.json(books); // send all books
});

bookRouter.post("/", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.json({ message: "Book added!", book: newBook });
});

module.exports = bookRouter;
